/**
 * Represents a Bloggger post.
 */
export interface Post {
  id: number;
  published: Date;
  updated: Date;
  title: string;
  content: string;
}
