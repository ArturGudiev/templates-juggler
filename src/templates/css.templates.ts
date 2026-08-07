import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'CSS Grid (3 columns)',
        content: `
    <div style="display: grid; grid-template-columns: 1fr auto 1fr">
      <div style="grid-column: 2">Sort label</div>
      <div style="
          grid-column: 2;
          font-size: 12px;
          font-weight: 500;
          color: #5C7DBA;
          border: 1px solid red;
          text-align: center
    "
      >Сортировать по:</div>
      <div style="grid-column: 3; text-align: right">X</div>
    </div>
`
    },
        {
        title: 'Linear gradient',
        content: `

    background: linear-gradient(to right, red 50%, blue 50%);
    
    background: linear-gradient(direction, color-stop1, color-stop2, ...);
    
`
    },
    {
        title: 'Box shadow',
        content: `
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5); // X Y blur spread color
        `
    }
] as Template[];
