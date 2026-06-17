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
  }
] as Template[];
