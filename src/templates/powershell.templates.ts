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
] as Template[];