export interface TemplateNode {
    children?: TemplateNode[];
}

export interface Template {
    title: string;
    content?: string;
    fileContent?: string;
    templateFunction?: () => Promise<string>;
    children?: Template[];
}

