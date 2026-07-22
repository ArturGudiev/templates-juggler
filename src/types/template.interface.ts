export interface Template {
    title: string;
    content?: string;
    fileContent?: string;
    syntaxHighlightLanguage?: string;
    templateFunction?: () => Promise<string>;
    children?: Template[];
}

export interface TemplateNode {
    templates?: Template[]
    children?: TemplateNode[]
    aliases?: string[]
    name: string
}
