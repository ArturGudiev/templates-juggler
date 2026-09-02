import { getUserInput, selectFromList } from "ag-utils-lib";
import { Template } from "../../types/template.interface.js";
import { clearScreen } from "../../utils/cli.utils.js";
import { selectSeveralFromList } from "../../utils/select-several.temp.js";

export default [
  {
    title: 'Create project', 
    content: `
    flutter create <project-name>
    ` 
  }
] as Template[];
