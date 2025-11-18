import { Template } from "src/types/tempalte.interface.js";
import BOOTSTRAP_TEMPLATES from "./bootstrap.tempaltes.js";
import FLUTTER_TEMPLATES from "./flutter.templates.js";


export { default as BOOTSTRAP_TEMPLATES } from "./bootstrap.tempaltes.js";
export { default as FLUTTER_TEMPLATES } from "./flutter.templates.js";


export const TEMPLATES_SET: {[key: string]: Template[]} = {
    'Bootstrap': BOOTSTRAP_TEMPLATES,
    'Flutter': FLUTTER_TEMPLATES,
};
