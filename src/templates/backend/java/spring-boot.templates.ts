import { Template } from "../../../types/template.interface.js";

export default [
  {
    title: "FK", 
    content: `
        @ManyToOne(optional = false)
        @JoinColumn(name = "user_id", nullable = false)
        private User user;
    `
  }
] as Template[];
