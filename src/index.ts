import { selectObjectFromList } from "ag-utils-lib";
import bootstrapTemplates from "./templates/bootstrap.tempaltes.js"
import { templatesService } from "./services/index.js";


console.log("Hello TypeScript Node.js");


async function f() {
    console.log('In f')
    const template = await templatesService.selectTemplate(bootstrapTemplates);
    if (template) {
        console.log(templatesService.getTemplateContent(template));
    }
}

f()