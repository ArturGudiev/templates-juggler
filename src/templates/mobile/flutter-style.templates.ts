import { Template } from "../../types/template.interface.js";

export default [
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
  }
  
] as Template[];
