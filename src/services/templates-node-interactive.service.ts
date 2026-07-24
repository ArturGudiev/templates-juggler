import { getUserInput, selectIndexFromList, waitForUserInput } from "ag-utils-lib";
import chalk from "chalk";
import clipboardy from "clipboardy";
import { Template, TemplateNode } from "../types/template.interface.js";
import { clearScreen } from "../utils/cli.utils.js";
import { printTemplateContent } from "../utils/print-highlighted.js";
import templatesService from "./templates.service.js";

function printNodeInfo(node: TemplateNode): void {
    console.log(`Name: ${node.name}`);

    if (node.aliases?.length) {
        console.log(`Aliases: ${node.aliases.join(", ")}`);
    }
}

function printChildren(children: TemplateNode[] | undefined): void {
    if (!children?.length) {
        return;
    }

    console.log(chalk.cyan("\nChildren:"));
    children.forEach((child, index) => {
        const aliases = child.aliases?.length ? chalk.cyan.dim(` (${child.aliases.join(", ")})`) : "";
        console.log(`${chalk.white(`  ${index + 1}.`)} ${chalk.cyan(child.name)}${aliases}`);
    });
}

function printTemplates(templates: Template[] | undefined): void {
    if (!templates?.length) {
        return;
    }

    console.log(chalk.yellow("\nTemplates:"));
    templates.forEach((template, index) => {
        console.log(`${chalk.white(`  ${index + 1}.`)} ${chalk.yellow(template.title)}`);
    });
}

function printCommands(hasParent: boolean): void {
    console.log("\nCommands:");
    console.log("  n [num]  - select child node");
    console.log("  t [num]  - select template");
    if (hasParent) {
        console.log("  u        - go to parent");
    }
    console.log("  x, q     - exit");
}

function parseIndex(value: string | undefined, max: number): number | null {
    if (!value) {
        return null;
    }

    const index = Number.parseInt(value, 10);
    if (Number.isNaN(index) || index < 1 || index > max) {
        return null;
    }

    return index - 1;
}

async function copyToClipboard(content: string): Promise<void> {
    try {
        await clipboardy.write(content);
        console.log("\nTemplate copied to clipboard.\n");
    } catch (error) {
        console.error("\nFailed to copy template to clipboard:");
        console.error(error);
    }
}

async function displayTemplate(template: Template): Promise<void> {
    const content = await templatesService.getTemplateContent(template);
    await copyToClipboard(content);
    printTemplateContent(content, template.syntaxHighlightLanguage);
    await waitForUserInput();
}

async function handleTemplateCommand(
    templates: Template[] | undefined,
    indexArg: string | undefined,
): Promise<void> {
    if (!templates?.length) {
        console.log("\nNo templates available.");
        await waitForUserInput();
        return;
    }

    if (indexArg !== undefined) {
        const index = parseIndex(indexArg, templates.length);
        if (index === null) {
            console.log(`\nInvalid template number. Choose 1-${templates.length}.`);
            await waitForUserInput();
            return;
        }

        await displayTemplate(templates[index]);
        return;
    }

    const template = await templatesService.selectTemplate(templates);
    if (template) {
        await displayTemplate(template);
    }
}

async function handleNodeCommand(
    children: TemplateNode[] | undefined,
    indexArg: string | undefined,
    parent: TemplateNode,
): Promise<void> {
    if (!children?.length) {
        console.log("\nNo child nodes available.");
        await waitForUserInput();
        return;
    }

    if (indexArg !== undefined) {
        const index = parseIndex(indexArg, children.length);
        if (index === null) {
            console.log(`\nInvalid child number. Choose 1-${children.length}.`);
            await waitForUserInput();
            return;
        }

        await templatesNodeInteractive(children[index], parent);
        return;
    }

    const index = await selectIndexFromList(children.map((child) => child.name));
    if (index !== undefined && index >= 0) {
        await templatesNodeInteractive(children[index], parent);
    }
}

export async function templatesNodeInteractive(
    node: TemplateNode,
    parent: TemplateNode | null = null,
    options: { selectTemplateOnStart?: boolean } = {},
): Promise<void> {
    let shouldSelectTemplateOnStart = options.selectTemplateOnStart === true;

    while (true) {
        clearScreen();
        printNodeInfo(node);
        printChildren(node.children);
        printTemplates(node.templates);
        printCommands(parent !== null);

        if (shouldSelectTemplateOnStart) {
            shouldSelectTemplateOnStart = false;
            await handleTemplateCommand(node.templates, undefined);
            continue;
        }

        const line = await getUserInput(">", false);
        const parts = line.split(/\s+/).filter(Boolean);

        if (!parts.length) {
            continue;
        }

        const command = parts[0].toLowerCase();

        if (command === "x" || command === "q") {
            clearScreen();
            process.exit(0);
        }

        if (command === "u") {
            if (!parent) {
                console.log("\nAlready at root.");
                await waitForUserInput();
                continue;
            }
            return;
        }

        if (command === "n") {
            await handleNodeCommand(node.children, parts[1], node);
            continue;
        }

        if (command === "t") {
            await handleTemplateCommand(node.templates, parts[1]);
            continue;
        }
    }
}
