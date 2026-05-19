import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'install single package',
        content: ``
    }, 
    {
        title: 'destructure final',
        templateFunction: async () => {
            const varName = (await getUserInput("Enter variable name (e.g. user):")).trim();
            if (!varName) {
                return "";
            }
            return `
        if (widget.${varName} case final ${varName}?) {
            return Text(${varName}.name);
        }
        `;
        },
    }
] as Template[];
