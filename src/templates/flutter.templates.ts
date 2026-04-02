import { Template } from "../types/template.interface.js";

export default [
    { title: 'Filter requests', content: 't:json'},
    {
        title: 'Flutter Button1',
        content: `Button(child: Text('123'))`
    },
     {
        title: 'CLI install packages',
        content: `flutter pub get`
    },
    {
        title: 'CLI install specific version',
        content: `flutter pub add package_name:1.2.3`
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