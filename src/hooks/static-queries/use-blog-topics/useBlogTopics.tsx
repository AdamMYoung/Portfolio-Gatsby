import { useBlogPosts } from '~hooks/static-queries';

export const useBlogTopics = (type: 'set' | 'array' = 'set') => {
    const topicSet = [];
    const posts = useBlogPosts();

    posts.forEach((p) => p.topics.forEach((t) => topicSet.push(t)));

    if (type === 'set') {
        return Array.from(new Set(topicSet));
    }

    return Array.from(topicSet);
};
