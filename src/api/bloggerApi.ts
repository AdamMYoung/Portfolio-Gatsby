import { Post } from '../types';

const BLOGGER_URL = 'https://www.googleapis.com/blogger/v3';

/**
 * Returns a collection of blog posts belonging to the assigned Blogger blog.
 */
export const getBlogPosts = async () => {
  return await fetch(
    `${BLOGGER_URL}/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_BLOGGER_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data.items as Post[]);
};
