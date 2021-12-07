import { useBlogPosts } from '~hooks/static-queries';

export const useBlogTopics = () => {
    const topicSet = new Set<string>();
    const posts = useBlogPosts();

    posts.forEach((p) => p.topics.forEach((t) => topicSet.add(t)));

    return Array.from(topicSet);
};
