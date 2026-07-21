import { highlight } from "cli-highlight";

const LANGUAGE_ALIASES: Record<string, string> = {
    js: "javascript",
    javascript: "javascript",
    ts: "typescript",
    typescript: "typescript",
    py: "python",
    python: "python",
    go: "go",
    sql: "sql",
    postgresql: "sql",
    postgres: "sql",
    psql: "sql",
    bash: "bash",
    sh: "bash",
    shell: "bash",
    powershell: "powershell",
    ps1: "powershell",
    dart: "dart",
    css: "css",
    html: "html",
    json: "json",
    yaml: "yaml",
    yml: "yaml",
    rust: "rust",
    rs: "rust",
};

function normalizeLanguage(language: string): string {
    const normalized = language.replace(/^\./, "").toLowerCase();
    return LANGUAGE_ALIASES[normalized] ?? normalized;
}

export function printTemplateContent(content: string, syntaxHighlightLanguage?: string): void {
    if (!content) {
        return;
    }

    if (syntaxHighlightLanguage) {
        const language = normalizeLanguage(syntaxHighlightLanguage);
        console.log(`\n${highlight(content, { language, ignoreIllegals: true })}\n`);
        return;
    }

    console.log(`\n${content}\n`);
}
