import { ArgumentParser } from "argparse";
import { templatesNodeInteractive } from "./services/templates-node-interactive.service.js";
import { TEMPLATES_ROOT_NODE } from "./templates/index.js";
import { collectNodeNames, findTemplateNode } from "./utils/template-node.utils.js";

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

    const args = parser.parse_args();
    const templatesNode = args.templatesNodeFlag ?? args.templatesNode;

    if (!templatesNode) {
        await templatesNodeInteractive(TEMPLATES_ROOT_NODE);
        return;
    }

    const node = findTemplateNode(TEMPLATES_ROOT_NODE, templatesNode);

    if (node) {
        await templatesNodeInteractive(node);
    } else {
        console.error(`Error: Template node "${templatesNode}" not found.`);
        console.log(`Available template nodes: ${collectNodeNames(TEMPLATES_ROOT_NODE).join(", ")}`);
        process.exit(1);
    }
}

main();
