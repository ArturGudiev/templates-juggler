import { getUserInput, selectIndexFromList } from "ag-utils-lib";
import { Template } from "../../../types/template.interface.js";

function toJavaFieldName(dbName: string): string {
    return dbName.replace(/_([a-zA-Z0-9])/g, (_, char: string) => char.toUpperCase());
}

function toPascalCase(name: string): string {
    const camel = name.includes("_") ? toJavaFieldName(name) : name;
    return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function toSnakeCase(name: string): string {
    return name
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/-/g, "_")
        .toLowerCase();
}

function parseColumnType(raw: string): { javaType: string; attrs: string[] } | null {
    const trimmed = raw.trim();
    const upper = trimmed.toUpperCase();

    if (upper === "BIGINT") {
        return { javaType: "Long", attrs: [] };
    }

    if (upper === "INTEGER" || upper === "INT" || trimmed === "Integer") {
        return { javaType: "Integer", attrs: [] };
    }

    if (upper === "TIMESTAMPTZ" || upper === "TIMESTAMP WITH TIME ZONE") {
        return { javaType: "Instant", attrs: [] };
    }

    const varchar = /^VARCHAR\((\d+)\)$/i.exec(trimmed);
    if (varchar) {
        return { javaType: "String", attrs: [`length = ${varchar[1]}`] };
    }

    const numeric = /^NUMERIC\((\d+)\s*,\s*(\d+)\)$/i.exec(trimmed);
    if (numeric) {
        return {
            javaType: "BigDecimal",
            attrs: [`precision = ${numeric[1]}`, `scale = ${numeric[2]}`],
        };
    }

    return null;
}

async function resolveColumnType(): Promise<{ javaType: string; attrs: string[] } | null> {
    const typeOptions = ["BIGINT", "Integer", "TIMESTAMPTZ", "VARCHAR(n)", "NUMERIC(p,s)"];
    const typeIndex = await selectIndexFromList(typeOptions);
    if (typeIndex === undefined || typeIndex < 0) {
        return null;
    }

    switch (typeOptions[typeIndex]) {
        case "BIGINT":
            return { javaType: "Long", attrs: [] };
        case "Integer":
            return { javaType: "Integer", attrs: [] };
        case "TIMESTAMPTZ":
            return { javaType: "Instant", attrs: [] };
        case "VARCHAR(n)": {
            const length = (await getUserInput("Enter VARCHAR length (n):")).trim();
            if (!length) {
                return null;
            }
            return { javaType: "String", attrs: [`length = ${length}`] };
        }
        case "NUMERIC(p,s)": {
            const precision = (await getUserInput("Enter NUMERIC precision (p):")).trim();
            if (!precision) {
                return null;
            }
            const scale = (await getUserInput("Enter NUMERIC scale (s):")).trim();
            if (!scale) {
                return null;
            }
            return {
                javaType: "BigDecimal",
                attrs: [`precision = ${precision}`, `scale = ${scale}`],
            };
        }
        default:
            return null;
    }
}

function buildEntityField(
    name: string,
    required: boolean,
    javaType: string,
    attrs: string[],
): string {
    const fieldName = name.includes("_") ? toJavaFieldName(name) : name;
    const columnParts = [
        ...(name.includes("_") ? [`name = "${name}"`] : []),
        ...(required ? ["nullable = false"] : []),
        ...attrs,
    ];

    return `
  @Column(${columnParts.join(", ")})
  private ${javaType} ${fieldName};
`;
}

async function askRequired(): Promise<boolean | null> {
    const requiredIndex = await selectIndexFromList(["required", "not required"]);
    if (requiredIndex === undefined || requiredIndex < 0) {
        return null;
    }
    return requiredIndex === 0;
}

/** Strips trailing `!` (required) or `?` (not required). Returns null required if neither. */
function takeRequiredMarker(raw: string): { value: string; required: boolean | null } {
    const trimmed = raw.trim();
    if (trimmed.endsWith("?")) {
        return { value: trimmed.slice(0, -1).trim(), required: false };
    }
    if (trimmed.endsWith("!")) {
        return { value: trimmed.slice(0, -1).trim(), required: true };
    }
    return { value: trimmed, required: null };
}

export default [
    {
        title: "FK",
        aliases: ["spring-fk"],
        content: `
        @ManyToOne(optional = false)
        @JoinColumn(name = "user_id", nullable = false)
        private User user;
    `,
    },
    {
        title: "FK by name",
        aliases: ["spring-fk-by-name"],
        syntaxHighlightLanguage: "java",
        templateFunction: async () => {
            const rawName = (await getUserInput("Enter relation name (e.g. user, transfer):")).trim();
            if (!rawName) {
                return "";
            }

            const { value: name, required: markerRequired } = takeRequiredMarker(rawName);
            if (!name) {
                return "";
            }

            let required = markerRequired;
            if (required === null) {
                required = await askRequired();
                if (required === null) {
                    return "";
                }
            }

            const fieldName = name.includes("_") ? toJavaFieldName(name) : name;
            const typeName = toPascalCase(name);
            const columnName = `${toSnakeCase(name)}_id`;
            const optional = required ? "false" : "true";
            const nullable = required ? "false" : "true";

            return `
        @ManyToOne(optional = ${optional})
        @JoinColumn(name = "${columnName}", nullable = ${nullable})
        private ${typeName} ${fieldName};
`;
        },
    },
    {
        title: "Entity field",
        aliases: ["ef", "entity-field"],
        syntaxHighlightLanguage: "java",
        templateFunction: async () => {
            const required = await askRequired();
            if (required === null) {
                return "";
            }

            const name = (await getUserInput("Enter column/field name (e.g. user_id, amount):")).trim();
            if (!name) {
                return "";
            }

            const resolvedType = await resolveColumnType();
            if (!resolvedType) {
                return "";
            }

            return buildEntityField(name, required, resolvedType.javaType, resolvedType.attrs);
        },
    },
    {
        title: "Entity field parsed",
        aliases: ["efp", "entity-field-parsed"],
        syntaxHighlightLanguage: "java",
        templateFunction: async () => {
            const rawLine = (await getUserInput("Enter line")).trim();
            if (!rawLine) {
                return "";
            }

            const { value: line, required: markerRequired } = takeRequiredMarker(rawLine);
            if (!line) {
                return "";
            }

            const match = /^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.+)$/.exec(line);
            if (!match) {
                return "";
            }

            const name = match[1];
            const parsedType = parseColumnType(match[2]);
            if (!parsedType) {
                return "";
            }

            let required = markerRequired;
            if (required === null) {
                required = await askRequired();
                if (required === null) {
                    return "";
                }
            }

            return buildEntityField(name, required, parsedType.javaType, parsedType.attrs);
        },
    },
] as Template[];
