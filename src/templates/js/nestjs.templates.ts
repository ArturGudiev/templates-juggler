import { Template } from "../../types/template.interface.js";

export default [
    {
       title: 'GET method',
        content: `
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
`
    }
] as Template[];