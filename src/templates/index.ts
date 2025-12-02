import { Template } from "src/types/tempalte.interface.js";
import BOOTSTRAP_TEMPLATES from "./bootstrap.tempaltes.js";
import FLUTTER_TEMPLATES from "./flutter.templates.js";
import BASH_TEMPLATES from "./bash.templates.js";
import GO_TEMPLATES from "./go.templates.js";


export { default as BOOTSTRAP_TEMPLATES } from "./bootstrap.tempaltes.js";
export { default as FLUTTER_TEMPLATES } from "./flutter.templates.js";
export { default as BASH_TEMPLATES } from "./bash.templates.js";
export { default as GO_TEMPLATES } from "./go.templates.js";


export const TEMPLATES_SET: {[key: string]: Template[]} = {
    'Bootstrap': BOOTSTRAP_TEMPLATES,
    'Flutter': FLUTTER_TEMPLATES,
    'Bash': BASH_TEMPLATES,
    'Go': GO_TEMPLATES,
};
