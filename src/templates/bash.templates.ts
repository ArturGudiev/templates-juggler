import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'script case',
        content: `
        "*")
		 ;;

        `
    },
    {
    title: 'Ternary operator',
    content: `
       # [ условие ] && если_истина || если_ложь
        [ "$age" -gt 18 ] && status="Adult" || status="Minor"
 
    `
    },
    {
    title: 'Check variable not null',
    content: `
       if [ -n "$VAR" ]; then
            echo "Переменная не пустая"
        else
            echo "Переменная пустая (null)"
        fi

 
    `
    }
] as Template[];