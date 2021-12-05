import { useBlogPosts } from '../use-blog-posts/useBlogPosts';

export const useBlogTopics = () => {
    const topicSet = new Set<string>();
    const posts = useBlogPosts();

    posts.forEach((p) => p.topics.forEach((t) => topicSet.add(t)));

    return Array.from(topicSet);
};
