import { Template } from "../types/template.interface.js";

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
    }, 
    {
        title: 'Simple Web Server',
        content: `
        package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
        
        `
    },
    {
        title: 'Sort array',
        content: `
        
    sort.Slice(entries, func(i, j int) bool {
		di, dj := entries[i].IsDir(), entries[j].IsDir()
		if di != dj {
			return di
		}
		return entries[i].Name() < entries[j].Name()
	})

        `,
    },
    {
        title: 'Map array',
        content: `
        
   aliasModels := make([]*models.AliasModel, len(aliases))
	for i, alias := range aliases {
		aliasModels[i] = &models.AliasModel{
			ID:     alias.ID,
			Type:   alias.Type,
			Alias:  alias.Alias,
			ItemID: alias.ItemID,
			FilePath: alias.FilePath,
		}
	}

        `,
    }
] as Template[];