import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Function',
        content: `
function Get-Greeting {
    param($Name) # Параметры лучше объявлять в блоке param
    return "Hello, $Name!"
}
        `
    },
    {
        title: 'Get your external IP',
        content: `
            Invoke-RestMethod ipinfo.io/ip
        `
    },
    {
        title: 'POST request',
        templateFunction: async () => {
            let url = await getUserInput('URL to invoke:');
            let body = await getUserInput('Body:');
            if (!url) {
                url = 'http://localhost:3000/t4a/m2';
            }
            if (!body) {
                body = '{"name":"John","price":777}';
            }
            return `Invoke-RestMethod -Uri ${url} -Method Post -Body '${body}' -ContentType "application/json"`;
        }
        
    },
] as Template[];