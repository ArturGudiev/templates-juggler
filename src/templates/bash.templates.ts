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
    `},
    {
        title: 'Read for user input',
        content: `echo -n "Press [Enter] to continue..."; read1`,
    }, 
    {
        title: 'Function without parameters',
        content: `

        greet() {
            echo "Hello, World!"
        }

        greet
        `,
    },
     {
        title: 'Function with parameters',
        content: `
    show_user_info() {
        echo "First Name: $1"
        echo "Last Name: $2"
        echo "All Arguments: $@" # $@ represents all passed items
    }

    show_user_info "John" "Doe"
        `,
    },
    {
        title: 'Switch case',
        content: `
case "$ПЕРЕМЕННАЯ" in
    шаблон1)
        # Команды, если совпало с шаблон1
        ;;
    шаблон2)
        # Команды, если совпало с шаблон2
        ;;
    *)
        # Default case: команды для всего остального
        ;;
esac
        `,
    }
] as Template[];