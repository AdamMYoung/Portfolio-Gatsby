export type BlogPost = {
    createdAt: string;
    updatedAt: string;
    id: string;
    topics: string[];
    title: string;
    slug: string;
    copy: {
        copy: string;
    };
    heroImage: {
        file: {
            url: string;
        };
    };
};
