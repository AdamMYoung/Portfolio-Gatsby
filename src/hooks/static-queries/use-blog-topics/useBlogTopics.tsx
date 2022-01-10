import { useBlogPosts } from '~hooks/static-queries';

/**
 * Static query hook to return all blog topics from the CMS.
 */
export const useBlogTopics = (as: 'set' | 'array' = 'set') => {
    const topicSet = [];
    const posts = useBlogPosts();

    posts.forEach((p) => p.topics.forEach((t) => topicSet.push(t)));

    if (as === 'set') {
        return Array.from(new Set(topicSet)).sort((a, b) => a.length - b.length);
    }

    return Array.from(topicSet).sort((a, b) => b.length - a.length);
};
