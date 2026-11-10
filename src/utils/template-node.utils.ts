import { equalLowerStrings } from "ag-utils-lib";
import { Template, TemplateNode } from "../types/template.interface.js";

export function findTemplateNode(root: TemplateNode, query: string): TemplateNode | null {
    if (equalLowerStrings(root.name, query)) {
        return root;
    }

    if (root.aliases?.some((alias) => equalLowerStrings(alias, query))) {
        return root;
    }

    for (const child of root.children ?? []) {
        const found = findTemplateNode(child, query);
        if (found) {
            return found;
        }
    }

    return null;
}

export function findTemplateByAlias(root: TemplateNode, query: string): Template | null {
    for (const template of root.templates ?? []) {
        if (equalLowerStrings(template.title, query)) {
            return template;
        }

        if (template.aliases?.some((alias) => equalLowerStrings(alias, query))) {
            return template;
        }

        for (const child of template.children ?? []) {
            const foundInChildren = findTemplateInList(child, query);
            if (foundInChildren) {
                return foundInChildren;
            }
        }
    }

    for (const child of root.children ?? []) {
        const found = findTemplateByAlias(child, query);
        if (found) {
            return found;
        }
    }

    return null;
}

function findTemplateInList(template: Template, query: string): Template | null {
    if (equalLowerStrings(template.title, query)) {
        return template;
    }

    if (template.aliases?.some((alias) => equalLowerStrings(alias, query))) {
        return template;
    }

    for (const child of template.children ?? []) {
        const found = findTemplateInList(child, query);
        if (found) {
            return found;
        }
    }

    return null;
}

export function collectNodeNames(root: TemplateNode): string[] {
    const names = [root.name];

    for (const child of root.children ?? []) {
        names.push(...collectNodeNames(child));
    }

    return names;
}

export function collectTemplateAliases(root: TemplateNode): string[] {
    const aliases: string[] = [];

    for (const template of root.templates ?? []) {
        collectTemplateAliasesFromTemplate(template, aliases);
    }

    for (const child of root.children ?? []) {
        aliases.push(...collectTemplateAliases(child));
    }

    return aliases;
}

function collectTemplateAliasesFromTemplate(template: Template, aliases: string[]): void {
    if (template.aliases?.length) {
        aliases.push(...template.aliases);
    }

    for (const child of template.children ?? []) {
        collectTemplateAliasesFromTemplate(child, aliases);
    }
}
