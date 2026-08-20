import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Font Size',
        content: `
      text-{size}

      Стандартная шкала размеровОсновные классы, доступные «из коробки»:
      text-xs: 0.75rem (12px)
      text-sm: 0.875rem (14px)
      text-base: 1rem (16px) — стандартный размер
      text-lg: 1.125rem (18px)
      text-xl: 1.25rem (20px)
      text-2xl до text-9xl: от 1.5rem (24px) до 8rem (128px)

      text-[17px] или text-[2rem]
`
    },
    {
        title: 'font-weight',
        content: `
            font-thin - 100
            font-extralight - 200
            font-light - 300
            font-normal - 400
            font-medium - 500
            font-semibold - 600
            font-bold - 700
            font-extrabold - 800    
            font-black - 900
        `
    },
    {
        title: 'Font Style',
        content: `
            italic
            normal
            bold
            extrabold
            black
        `
    },
    {
        title: 'Flex --- center',
        content: `
      flex items-center
      flex items-baseline
`
    },
    {
        title: 'Padding',
        content: `
            pt-[17px]
            pb-[17px]
            pl-[17px]
            pr-[17px]
        `
    },
    {
        title: 'Font: Letter Spacing',
        content: `
            tracking-[0.16em]
            tracking-[-0.16em]
        `
    },
    {
        title: 'Font: Combined',
        content: `
            Font (poppins) --- font-poppins
            
            weight (semibold) --- font-semibold italic --- font-italic
            100 (thin), 200 (extralight), 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black)

            font size (17px) --- text-[17px]

            font color #FFD683 --- text-[#FFD683]
            `
    },
    {
        title: 'Text color',
        content: `
            text-[#FFD683]

            text-red-500
            text-green-500
            text-blue-500
            text-yellow-500
            text-purple-500
            text-orange-500
            text-pink-500
        `
    },
    {
        title: 'Border radius',
        content: `
        rounded-sm rounded-md rounded-lg rounded-xl rounded-2xl rounded-3xl rounded-full
        rounded-[40px]
        `
    }, 
    {
        title: 'Border: example of 1px solid red',
        content: `
        border border-solid border-red-500

        border-[1px] border-solid border-red-500
        border-[1px] border-solid border-[#ff0000]
        `
    }, 
    {
        title: 'Grid: Display in center',
        content: `
        grid place-items-center
        `
    }
] as Template[];