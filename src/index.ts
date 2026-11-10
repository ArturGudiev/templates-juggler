import { ArgumentParser } from "argparse";
import { displayTemplate, templatesNodeInteractive } from "./services/templates-node-interactive.service.js";
import { TEMPLATES_ROOT_NODE } from "./templates/index.js";
import {
    collectNodeNames,
    collectTemplateAliases,
    findTemplateByAlias,
    findTemplateNode,
} from "./utils/template-node.utils.js";

async function main() {
    const parser = new ArgumentParser({
        description: "A tool for getting a list of common templates",
    });

    parser.add_argument("templatesNode", {
        nargs: "?",
        help: `Template node name or alias. Available: ${collectNodeNames(TEMPLATES_ROOT_NODE).join(", ")}`,
    });

    parser.add_argument("--templates-node", {
        dest: "templatesNodeFlag",
        help: "Template node name or alias (named form of the positional argument)",
    });

    parser.add_argument("-t", "--template", {
        dest: "templateAlias",
        help: "Find and execute a template by its alias (or title)",
    });

    const args = parser.parse_args();

    if (args.templateAlias) {
        const template = findTemplateByAlias(TEMPLATES_ROOT_NODE, args.templateAlias);
        if (!template) {
            console.error(`Error: Template "${args.templateAlias}" not found.`);
            const aliases = collectTemplateAliases(TEMPLATES_ROOT_NODE);
            if (aliases.length) {
                console.log(`Available template aliases: ${aliases.join(", ")}`);
            }
            process.exit(1);
        }

        await displayTemplate(template, { wait: false });
        return;
    }

    const templatesNode = args.templatesNodeFlag ?? args.templatesNode;

    if (!templatesNode) {
        await templatesNodeInteractive(TEMPLATES_ROOT_NODE);
        return;
    }

    const node = findTemplateNode(TEMPLATES_ROOT_NODE, templatesNode);

    if (node) {
        await templatesNodeInteractive(node, null, { selectTemplateOnStart: true });
    } else {
        console.error(`Error: Template node "${templatesNode}" not found.`);
        console.log(`Available template nodes: ${collectNodeNames(TEMPLATES_ROOT_NODE).join(", ")}`);
        process.exit(1);
    }
}

main();
