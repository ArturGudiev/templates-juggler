import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Git commit with message',
        content: 'git branch -d branch_name',
    },
    {
        title: 'Print default editor',
        content: 'git var GIT_EDITOR',
    },
    {
        title: 'Git set editor',
        content: `
        git config --global core.editor "code --wait"

        # for merge
        git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait --merge \$LOCAL \$REMOTE \$BASE \$MERGED"


        `,
    },
] as Template[];