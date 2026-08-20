import { fzf } from "fzf-node";

export async function selectSeveralFromList(
    choices: string[],
    message = "",
    funcOptions: { fzfOptions?: string[] } = {},
): Promise<string[] | null> {
    if (message) {
        console.log(message);
    }
    if (choices.length === 0) {
        return null;
    }
    if (choices.length === 1) {
        return [choices[0]];
    }

    const options = ["--multi", ...(funcOptions.fzfOptions ?? [])];
    const selected = await fzf(choices, options);

    if (!selected?.length) {
        return null;
    }

    return Array.isArray(selected) ? selected : [selected];
}
