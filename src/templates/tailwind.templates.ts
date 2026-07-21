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
        title: 'Flex --- center',
        content: `
      flex items-center
      flex items-baseline

`
    }
] as Template[];