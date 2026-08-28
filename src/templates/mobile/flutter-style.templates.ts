import { getUserInput, selectFromList } from "ag-utils-lib";
import { Template } from "../../types/template.interface.js";
import { clearScreen } from "../../utils/cli.utils.js";
import { selectSeveralFromList } from "../../utils/select-several.temp.js";

export default [
  {
    title: 'Text style interactive',
    templateFunction: async () => {
      clearScreen();
      const styleInteractiveFunctions = {
        'font-weight': async () => {
          const fontWeights: Record<string, string> = {
            '100 thin': 'fontWeight: FontWeight.w100,',
            '200 extralight': 'fontWeight: FontWeight.w200,',
            '300 light': 'fontWeight: FontWeight.w300,',
            '400 normal': 'fontWeight: FontWeight.w400,',
            '500 medium': 'fontWeight: FontWeight.w500,',
            '600 semibold': 'fontWeight: FontWeight.w600,',
            '700 bold': 'fontWeight: FontWeight.w700,',
            '800 extrabold': 'fontWeight: FontWeight.w800,',
            '900 black': 'fontWeight: FontWeight.w900,',
          };
          const selected = await selectFromList(Object.keys(fontWeights), 'Select font weight:');
          return selected ? fontWeights[selected] : '';
        },
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

      return `style: TextStyle(
  ${parts.join('\n  ')}
),`;
    },
  },
  {
    title: 'Container style interactive',
    templateFunction: async () => {
      clearScreen();

      const formatColor = (color: string): string => {
        if (color.startsWith('#')) {
          const hex = color.slice(1);
          return `Color(0xFF${hex.toUpperCase()})`;
        }
        if (color.startsWith('Color(') || color.startsWith('Colors.')) {
          return color;
        }
        return `Colors.${color}`;
      };

      const borderValues: { width?: string; color?: string } = {};
      const styleInteractiveFunctions = {
        'border width': async () => {
          const width = (await getUserInput("Enter border width (e.g. 1):")).trim();
          if (width) {
            borderValues.width = width;
          }
        },
        'border color': async () => {
          const color = (await getUserInput("Enter border color (e.g. #FFD683 or Colors.red):")).trim();
          if (color) {
            borderValues.color = formatColor(color);
          }
        },
      };

      const styles = Object.keys(styleInteractiveFunctions);
      const selectedStyles = await selectSeveralFromList(styles, "Select styles:");

      if (!selectedStyles?.length) {
        return "";
      }

      for (const style of selectedStyles) {
        const styleFn = styleInteractiveFunctions[style as keyof typeof styleInteractiveFunctions];
        await styleFn();
      }

      const borderParts: string[] = [];
      if (borderValues.width) {
        borderParts.push(`width: ${borderValues.width}`);
      }
      if (borderValues.color) {
        borderParts.push(`color: ${borderValues.color}`);
      }

      if (!borderParts.length) {
        return "";
      }

      return `decoration: BoxDecoration(
  border: Border.all(
    ${borderParts.join(',\n    ')},
  ),
),`;
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
