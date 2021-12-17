type MarkdownNode = {
    type: string;
    value: string;
    children?: MarkdownNode[];
};

/**
 * Iterates through a markdown node, building together a string of the text inside.
 * Useful when italics and bold text are split by contentful.
 * @param node Contentful markdown node to parse
 */
export const getTextFromMarkdownNode = (node: MarkdownNode): string => {
    if (!node.children) {
        return node.value;
    }

    return node.children.map(getTextFromMarkdownNode).join('');
};
