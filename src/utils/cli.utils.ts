import { stdout as output } from "node:process";

export function clearScreen(): void {
    output.write("\x1b[2J\x1b[H");
}
