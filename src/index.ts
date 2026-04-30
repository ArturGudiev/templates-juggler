import { selectObjectFromList } from "ag-utils-lib";
import { templatesService } from "./services/index.js";
import { TEMPLATES_SET } from "./templates/index.js";

async function templateSetsInteractive(): Promise<void> {
    const templateSetsNames = Object.keys(TEMPLATES_SET);
    const obj = await selectObjectFromList(templateSetsNames);
    if (obj) {
        const templates = TEMPLATES_SET[obj.value];
        const template = await templatesService.selectTemplate(templates);
        if (template) {
            const res = await templatesService.getTemplateContent(template);
            console.log(`\n${res}\n`);
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
                console.log(res);
            }
        } else {
            console.error(`Error: Template set "${key}" not found.`);
            console.log(`Available template sets: ${Object.keys(TEMPLATES_SET).join(', ')}`);
        }
    }
}

main()
