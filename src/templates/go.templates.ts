import { Template } from "../types/tempalte.interface.js";

export default [
    {
        title: 'Create a slice (array)',
        content: `


    var albums = []album{
        {ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
        {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
        {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
    }
`
    },
    {
        title: 'Create a struct json serializabl (interface)',
        content: `
        Struct tags such as json:"artist" specify what a field’s name should be when the struct’s contents are serialized into JSON. Without them, the JSON would use the struct’s capitalized field names – a style not as common in JSON.
    
    type album struct {
        ID     string  \`json:"id"\`
        Title  string  \`json:"title"\`
        Artist string  \`json:"artist"\`
        Price  float64 \`json:"price"\`
    } 
`
    }
] as Template[];