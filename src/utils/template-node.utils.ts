import { equalLowerStrings } from "ag-utils-lib";
import { TemplateNode } from "../types/template.interface.js";

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

export function collectNodeNames(root: TemplateNode): string[] {
    const names = [root.name];

    for (const child of root.children ?? []) {
        names.push(...collectNodeNames(child));
    }

    return names;
}
