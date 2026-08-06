import { getUserInput } from "ag-utils-lib";
import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Curl with status code',
        content: `
         curl -w "  %{http_code}" localhost:3000/t2

        `
    },
    {
        title: 'Curl POST with body',
        templateFunction: async () => {
            let url = await getUserInput('URL to invoke:');
            let body = await getUserInput('Body:');
            if (!url) {
                url = 'http://localhost:3000/t2/body-request';
            }
            if (!body) {
                body = '{"name":"John","age":30}';
            }
            return `curl ${url} -d '${body}' -H "Content-Type: application/json"`;
        }
    },
    {
        title: 'IP Tables for INPUT',
        content: `
         sudo iptables -L INPUT -n --line-numbers
        `
    },
    {
        title: 'IP Tables for Docker user',
        content: `
         sudo iptables -L DOCKER-USER -n -v --line-numbers
        `
    }, 
    {
        title: 'Get space of the directory',
        content: `du -sh /path/to/directory`,
    }

] as Template[];