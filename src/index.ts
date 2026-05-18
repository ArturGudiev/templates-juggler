import { selectObjectFromList } from "ag-utils-lib";
import clipboardy from "clipboardy";
import { templatesService } from "./services/index.js";
import { TEMPLATES_SET } from "./templates/index.js";

async function copyToClipboard(content: string): Promise<void> {
    try {
        await clipboardy.write(content);
        console.log("\nTemplate copied to clipboard.\n");
    } catch (error) {
        console.error("\nFailed to copy template to clipboard:");
        console.error(error);
    }
}

async function templateSetsInteractive(): Promise<void> {
    const templateSetsNames = Object.keys(TEMPLATES_SET);
    const obj = await selectObjectFromList(templateSetsNames);
    if (obj) {
        const templates = TEMPLATES_SET[obj.value];
        const template = await templatesService.selectTemplate(templates);
        if (template) {
            const res = await templatesService.getTemplateContent(template);
            await copyToClipboard(res);
            console.log(`\n${res}\n`);
            await clipboardy.write(res);
        }
    }
}


async function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        // No arguments - run interactive mode
        await templateSetsInteractive();
    } else {
        // Argument provided - use as key for TEMPALTES_SET
        const key = args[0];
        const templateSet = TEMPLATES_SET[key];
        
        if (templateSet) {
            const template = await templatesService.selectTemplate(templateSet);
            if (template) {
                const res = await templatesService.getTemplateContent(template);
                console.log(`\n${res}\n`);
                await clipboardy.write(res);
            }
        } else {
            console.error(`Error: Template set "${key}" not found.`);
            console.log(`Available template sets: ${Object.keys(TEMPLATES_SET).join(', ')}`);
        }
    }
}

main()
