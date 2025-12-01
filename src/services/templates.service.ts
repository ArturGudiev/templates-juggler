import { getJSONFileContent, selectIndexFromList, selectObjectFromList } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

function getTemplateContent(template: Template) {
    if (template.content) {
        return template.content;
    }

    if (template.fileContent) {
        // TODO 
    }
    return '';
}

async function selectTemplate(templates: Template[]): Promise<Template | null> {
    const index = await selectIndexFromList(templates.map(el => el.title));
    if (index !== undefined && index >= 0) { 
        return templates[index];
    }
    return null;
}

export default {
    selectTemplate,
    getTemplateContent
}