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
    }, 
    {
        title: 'sentinel',
        content: `
        const Object _sentinel = Object();
        const Object sentinel = _sentinel;
        `
    },
    {
        title: 'Parse response and convert to freezed class',
        content: `
            // single object 
            final responseData = jsonDecode(response.body);
            return LoginToken.fromJson(rawData)

            // list of objects 
            final responseData = jsonDecode(response.body) as List;
            return responseData.map((e) => LoginToken.fromJson(e)).toList();
        `
    },
    {
        title: 'Flutter Text with dynamic content',
        templateFunction: async () => {
            const content = await getUserInput('Enter content for text:');
            return `Text('${content}');`},
    },
] as Template[];
