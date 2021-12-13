type MarkdownNode = {
    type: string;
    value: string;
    children?: MarkdownNode[];
};

export const getTextFromMarkdownNode = (node: MarkdownNode): string => {
    if (!node.children) {
        return node.value;
    }

    return node.children.map(getTextFromMarkdownNode).join('');
};
