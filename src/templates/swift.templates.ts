import { Template } from "../types/template.interface.js";

export default [
    {
        title: "Simple button",
        content: `
        Button(
            action: {
                print("Button pressed")
            },
            label: {
                Text("Press me")
            }
        )
    `
    },
    {
        
    },
] as Template[];
