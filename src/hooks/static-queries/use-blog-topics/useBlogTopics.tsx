import { useBlogPosts } from '~hooks/static-queries';

/**
 * Static query hook to return all blog topics from the CMS.
 */
export const useBlogTopics = (as: 'set' | 'array' = 'set') => {
    const topicSet = [];
    const posts = useBlogPosts();

    posts.forEach((p) => p.topics.forEach((t) => topicSet.push(t)));

    if (as === 'set') {
        return Array.from(new Set(topicSet));
    }

    return Array.from(topicSet);
};
