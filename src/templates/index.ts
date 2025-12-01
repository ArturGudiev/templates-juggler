import { Template } from "src/types/template.interface.js";
import BOOTSTRAP_TEMPLATES from "./bootstrap.tempaltes.js";
import FLUTTER_TEMPLATES from "./flutter.templates.js";
import BASH_TEMPLATES from "./bash.templates.js";
import VUE_TEMPLATES from "./vue.tempaltes.js";
import GO_TEMPLATES from "./go.templates.js";
import MATERIAL_TEMPLATES from "./material.templates.js";
import FASTAPI_TEMPLATES from "./fastapi.templates.js";


export const TEMPLATES_SET: {[key: string]: Template[]} = {
    'FastAPI': FASTAPI_TEMPLATES,
    'Material': MATERIAL_TEMPLATES,
    'Bootstrap': BOOTSTRAP_TEMPLATES,
    'Flutter': FLUTTER_TEMPLATES,
    'Bash': BASH_TEMPLATES,
    'Go': GO_TEMPLATES,
    'Vue': VUE_TEMPLATES,
};
