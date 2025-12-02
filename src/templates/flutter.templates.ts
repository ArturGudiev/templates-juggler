import { Template } from "../types/tempalte.interface.js";

export default [
    {
        title: 'Flutter Button1',
        content: `
    Button(
        child: Text('123')    
    )  
`
    },
    {
        title: 'Flutter Button 2',
        content: `
    Button(
        child: Text('2222')    
    )  
`
    },
        {
        title: 'Elevated Button',
        content: `
        ElevatedButton(
            onPressed: _toggleIncidentsPanel,
            child: Text('Инциденты'),
        ),
`
    }
] as Template[];