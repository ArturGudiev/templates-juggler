import { getUserInput } from "ag-utils-lib";
import { Template } from "../../types/template.interface.js";
import { clearScreen } from "../../utils/cli.utils.js";
import { selectSeveralFromList } from "../../utils/select-several.temp.js";

export default [
  {
    title: 'Text style interactive',
    templateFunction: async () => {
      clearScreen();
      const styleInteractiveFunctions = {
        'font-size': async () => {
          const fontSize = (await getUserInput("Enter font size (e.g. 17):")).trim();
          if (!fontSize) {
            return "";
          }
          return `fontSize: ${fontSize},`;
        },
        'text color': async () => {
          const color = (await getUserInput("Enter color (e.g. #FFD683 or Colors.red):")).trim();
          if (!color) {
            return "";
          }
          if (color.startsWith('#')) {
            const hex = color.slice(1);
            return `color: Color(0xFF${hex.toUpperCase()}),`;
          }
          if (color.startsWith('Color(') || color.startsWith('Colors.')) {
            return `color: ${color},`;
          }
          return `color: Colors.${color},`;
        },
        'letter-spacing': async () => {
          const spacing = (await getUserInput("Enter letter spacing (e.g. 0.16):")).trim();
          if (!spacing) {
            return "";
          }
          return `letterSpacing: ${spacing},`;
        },
      };

      const styles = Object.keys(styleInteractiveFunctions);
      const selectedStyles = await selectSeveralFromList(styles, "Select styles:");

      if (!selectedStyles?.length) {
        return "";
      }

      const parts: string[] = [];
      for (const style of selectedStyles) {
        const styleFn = styleInteractiveFunctions[style as keyof typeof styleInteractiveFunctions];
        const part = await styleFn();
        if (part) {
          parts.push(part);
        }
      }

      if (!parts.length) {
        return "";
      }

      const textContent = (await getUserInput("Enter text content:")).trim() || "Text";

      return `Text(
  '${textContent}',
  style: TextStyle(
    ${parts.join('\n    ')}
  ),
)`;
    },
  },
  { 
    title: "Make Center element not occupy the wole width",
    content: `
    Container(
        height: 24,
        decoration: BoxDecoration(
          color: Color(0xFFEFF4FF),
          borderRadius: BorderRadius.circular(40),
        ),
        child: Center(
            child: Text(
                'Phone number here',
                style: TextStyle(fontSize: 10, fontWeight: FontWeight.w400)
            ).withPadding(left: 12, right: 12)
        ),
      )

    // ===================================
    // ----> wrap with intrinsicWidth
    // ===================================
    
    IntrinsicWidth(
      child: Container(
        height: 24,
        decoration: BoxDecoration(
          color: Color(0xFFEFF4FF),
          borderRadius: BorderRadius.circular(40),
        ),
        child: Center(
            child: Text(
                'Phone number here',
                style: TextStyle(fontSize: 10, fontWeight: FontWeight.w400)
            ).withPadding(left: 12, right: 12)
        ),
      ),
    );
    
    ` 
  },
  {
    title: 'set min width or height for container',
    content: `
    // add property constraint 

    constraints: BoxConstraints(
      minWidth: 150.0,
      maxWidth: 300.0,
    ),
    
    `
  },
  {
    title: 'TextField: font properties',
    content: `
    TextField(
      // Styles the input text typed by the user
      style: TextStyle(
        fontFamily: 'Roboto',       // Sets the font family
        fontSize: 18.0,             // Sets the font size
        fontWeight: FontWeight.bold, // Sets the font weight (e.g., bold, w600)
        ...
      ),
      decoration: InputDecoration(
        labelText: 'Enter Name',
        ...
      ),
    )
    `,
  },
  {
    title: 'Justify content in Row',
    content: `
    Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        ...
      ],
    )
    `
  },
  {
    title: 'Make container to have only necessary width to container children',
    content: `
    Container(
      // ...
      child: Row(
        mainAxisSize: MainAxisSize.min, // !!!
        children: [
          allIncidentsButton,
          myStatementsButton,
        ],
      ),
    );
    `
  },
  {
    title: 'Extract and reuse button styles',
    content: `

    final selectedStyle = FilledButton.styleFrom(
      backgroundColor: Colors.white,
      foregroundColor: const Color(0xFF5C7DBA),
    );

     final myStatementsButton = FilledButton(
      onPressed: () {},
      style: selectedStyle.merge(FilledButton.styleFrom(
        fixedSize: const Size.fromHeight(39),
        padding: const EdgeInsets.symmetric(
          horizontal: 20,
          vertical: 0,
        ),
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
        visualDensity: const VisualDensity(vertical: -2),
      )),
      ...
    `
  },
  {
    title: 'DataRow: add background color',
    content: `
    DataRow(
      color: Colors.white,
      color: WidgetStateProperty.all(
        const Color(0xFFF1F3F6),
      ),
      ...
    )
    `
  },
  {
    title: 'Add property conditionally',
    content: `
    DataRow(
      color: org.rejection != null
          ? WidgetStateProperty.all(
              const Color(0xFFF1F3F6),
            )
          : null,
                      
    `
  },
  {
    title: 'Get keyboard height in logical pixels (flutter pixels)',
    content: `
        final keyboardValue = MediaQuery.viewInsetsOf(context).bottom;
    `
  },
  {
    title: 'Get screen width',
    content: `
    final screenWidth = MediaQuery.of(context).size.width;
    `
  }
] as Template[];
