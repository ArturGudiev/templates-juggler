import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Check if port is open',
        content: `
        nc -zv 127.0.0.1 8080
        `
    },
    {
        title: 'Get ip address (macOS)',
        content: `
        ipconfig getifaddr en0
        # if empty, try: ipconfig getifaddr en1
        # or any active interface:
        ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1
        `
    },
    {
        title: 'Get ip address (Linux)',
        content: `
        ip addr show eth0 | grep "inet " | awk '{print $2}' | cut -d/ -f1
        `
    },
    {
        title: "Copy ssh key from windows to mac",
        content: `
        type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh user@mac_ip_address "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
        `,
    }
] as Template[];