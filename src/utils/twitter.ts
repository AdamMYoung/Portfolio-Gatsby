export const getTwitterIntent = (url: string, text: string) => {
    return `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(text)}`;
};
