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
        content: `
         curl localhost:3000/t2/body-request -d {"name":"John","age":30} -H Content-Type: application/json
        `
    }

] as Template[];