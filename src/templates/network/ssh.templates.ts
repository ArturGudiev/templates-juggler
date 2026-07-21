import { Template } from "../../types/template.interface.js";

export default [
    {
        title: 'add another host to white list to connect via ssh',
        content: `
        ssh-keygen -t ed 25519 -C "new-laptop"
        cat ~/.ssh/id_ed25519.pub

        # on vm
        sudo nano /etc/ssh/authorized_keys

        `
    },
] as Template[];