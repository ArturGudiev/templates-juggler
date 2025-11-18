import { Template } from "../types/tempalte.interface.js";

export default [
    {
        title: 'Button',
        content: `
    <div>AAAA</div>        
`
    },
    {
        title: 'Button2',
        content: `
    <div>BBBB</div>        
`
    },
    {
        title: 'Input with label',
        content: `
<div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" v-model="description" aria-describedby="descriptionHelp">
</div>
`
    },
] as Template[];