import { Template } from "../../types/template.interface.js";

export default [
  {
    title: 'input with variable (that contains input value)',
    content: `
        import { useState } from 'react';

        function MyComponent() {
            const [text, setText] = useState('');

            return (
                <input value={text} onChange={(e) => setText(e.target.value)} />
            );
        }
    `,
    
  }
] as Template[];