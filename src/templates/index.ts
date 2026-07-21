import { Template, TemplateNode } from "src/types/template.interface.js";
import BOOTSTRAP_TEMPLATES from "./bootstrap.tempaltes.js";
import FLUTTER_TEMPLATES from "./flutter.templates.js";
import FLUTTER_STYLE_TEMPLATES from "./mobile/flutter-style.templates.js";
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
import ANGULAR_TEMPLATES from "./js/angular.templates.js"
import DART_TEMPLATES from "./dart.templates.js"
import DATA_TEMPLATES from "./data.templates.js"
import DOCKER_TEMPLATES from "./docker.templates.js"
import SSH_TEMPLATES from "./network/ssh.templates.js"
import SWIFT_TEMPLATES from "./swift.templates.js"

export const TEMPLATES_ROOT_SET: {[key: string]: Template[]} = {
    'Angular': ANGULAR_TEMPLATES,
    'Bash': BASH_TEMPLATES,
    'Bootstrap': BOOTSTRAP_TEMPLATES,
    'CHP': CHP_TEMPLATES,
    'CSS': CSS_TEMPLATES,
    'Dashbpard': DASHBOARD_TEMPLATES,
    'Dart': DART_TEMPLATES,
    'Data': DATA_TEMPLATES,
    'Docker': DOCKER_TEMPLATES,
    'FastAPI': FASTAPI_TEMPLATES,
    'Flutter': FLUTTER_TEMPLATES,
    'Flutter Style': FLUTTER_STYLE_TEMPLATES,
    'Git': GIT_TEMPLATES,
    'Go': GO_TEMPLATES,
    'Go Ent': GO_ENT_TEMPLATES,
    'Go-Gin': GO_GIN_TEMPLATES,
    'HTML': HTML_TEMPLATES,
    'Linux': LINUX_TEMPLATES,
    'Material': MATERIAL_TEMPLATES,
    'NestJS': NESTJS_TEMPLATES,
    'PostgreSQL': POSTGRESQL_TEMPLATES,
    'PowerShell': POWERSHELL_TEMPLATES,
    'SSH': SSH_TEMPLATES,
    'Swift': SWIFT_TEMPLATES,
    'Tailwind': TAILWIND_TEMPLATES,
    'Vue': VUE_TEMPLATES,
};

export const TEMPLATES_ROOT_NODE: TemplateNode = {
    name: 'Tempaltes Root',
    children: [
        {
            name: 'Angular',
            templates: ANGULAR_TEMPLATES,
        },
        {
            name: 'Bash',
            templates: BASH_TEMPLATES,
        },
        {
            name: 'Bootstrap',
            templates: BOOTSTRAP_TEMPLATES,
        },
        {
            name: 'CHP',
            templates: CHP_TEMPLATES,
        },
        {
            name: 'CSS',
            templates: CSS_TEMPLATES,
        },
        {
            name: 'Dashbpard',
            templates: DASHBOARD_TEMPLATES,
        },
        {
            name: 'Dart',
            templates: DART_TEMPLATES,
        },
        {
            name: 'Data',
            templates: DATA_TEMPLATES,
        },
        {
            name: 'Docker',
            templates: DOCKER_TEMPLATES,
        },
        {
            name: 'FastAPI',
            templates: FASTAPI_TEMPLATES,
        },
        {
            name: 'Flutter',
            templates: FLUTTER_TEMPLATES,
        },
        {
            name: 'Flutter Style',
            templates: FLUTTER_STYLE_TEMPLATES,
        },
        {
            name: 'Git',
            templates: GIT_TEMPLATES,
        },
        {
            name: 'Go',
            templates: GO_TEMPLATES,
        },
        {
            name: 'Go Ent',
            templates: GO_ENT_TEMPLATES,
        },
        {
            name: 'Go-Gin',
            templates: GO_GIN_TEMPLATES,
        },
        {
            name: 'HTML',
            templates: HTML_TEMPLATES,
        },
        {
            name: 'Linux',
            templates: LINUX_TEMPLATES,
        },
        {
            name: 'Material',
            templates: MATERIAL_TEMPLATES,
        },
        {
            name: 'NestJS',
            templates: NESTJS_TEMPLATES,
        },
        {
            name: 'PostgreSQL',
            templates: POSTGRESQL_TEMPLATES,
        },
        {
            name: 'PowerShell',
            templates: POWERSHELL_TEMPLATES,
        },
        {
            name: 'SSH',
            templates: SSH_TEMPLATES,
        },
        {
            name: 'Swift',
            templates: SWIFT_TEMPLATES,
        },
        {
            name: 'Tailwind',
            templates: TAILWIND_TEMPLATES,
        },
        {
            name: 'Vue',
            templates: VUE_TEMPLATES,
        },
    ],
};