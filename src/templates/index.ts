import { Template } from "src/types/template.interface.js";
import BOOTSTRAP_TEMPLATES from "./bootstrap.tempaltes.js";
import FLUTTER_TEMPLATES from "./flutter.templates.js";
import BASH_TEMPLATES from "./bash.templates.js";
import VUE_TEMPLATES from "./vue.tempaltes.js";
import GO_TEMPLATES from "./go.templates.js";
import GO_ENT_TEMPLATES from "./go_ent.templates.js";
import GO_GIN_TEMPLATES from "./go-gin.templates.js";
import MATERIAL_TEMPLATES from "./material.templates.js";
import FASTAPI_TEMPLATES from "./fastapi.templates.js";
import POSTGRESQL_TEMPLATES from "./postgresql.templates.js";
import HTML_TEMPLATES from "./html.templates.js";
import CHP_TEMPLATES from "./chp.templates.js";
import TAILWIND_TEMPLATES from "./tailwind.templates.js";
import DASHBOARD_TEMPLATES from "./dash.templates.js"
import CSS_TEMPLATES from "./css.templates.js";
import NESTJS_TEMPLATES from "./js/nestjs.templates.js"
import POWERSHELL_TEMPLATES from "./powershell.templates.js"
import GIT_TEMPLATES from "./git.templates.js"
import LINUX_TEMPLATES from "./linux.templates.js"

export const TEMPLATES_SET: {[key: string]: Template[]} = {
    'FastAPI': FASTAPI_TEMPLATES,
    'Material': MATERIAL_TEMPLATES,
    'Bootstrap': BOOTSTRAP_TEMPLATES,
    'Flutter': FLUTTER_TEMPLATES,
    
    'Bash': BASH_TEMPLATES,
    'PowerShell': POWERSHELL_TEMPLATES,
    'Linux': LINUX_TEMPLATES,
    
    'Go': GO_TEMPLATES,
    'Go Ent': GO_ENT_TEMPLATES,
    'Go-Gin': GO_GIN_TEMPLATES,
    'Vue': VUE_TEMPLATES,
    'NestJS': NESTJS_TEMPLATES,
    
    'PostgreSQL': POSTGRESQL_TEMPLATES,
    'HTML': HTML_TEMPLATES,
    'CHP': CHP_TEMPLATES,
    'Tailwind': TAILWIND_TEMPLATES,
    'Dashbpard': DASHBOARD_TEMPLATES,
    'CSS': CSS_TEMPLATES,

    'Git': GIT_TEMPLATES,

};
