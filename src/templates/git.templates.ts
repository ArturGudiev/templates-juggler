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
    {
        title: 'Show unpushed commits',
        content: 'git log origin/main..HEAD --oneline',
    },
    {
        title: 'Show local branches',
        content: 'git branch',
    },
    {
        title: 'Show local branches',
        content: `
        git branch

        # with last commits 
        git branch -v

        # with remote tracking branches
        git branch -a

        `
        ,
    },
    {
        title: 'delete local branch',
        content: `git branch -d branch_name`
    },
    {
        title: 'Delete a local branch',
        content: `git branch | fzf | xargs git branch -d`
    },
    // {
    //     title: '',
    //     content: `` 
    // }
] as Template[];