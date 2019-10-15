import axios from "axios";
import { Post } from "../models/blogger/Post";

export default class BloggerRepository {
  private bloggerUrl = "https://www.googleapis.com/blogger/v3/";
  private blogId: string;

  private instance = axios.create({ baseURL: this.bloggerUrl, timeout: 1000 });

  constructor(blogId: string) {
    this.blogId = blogId;
  }

  /**
   * Returns all posts belonging to the blog.
   */
  public async getPosts() {
    return await this.instance
      .get(`blogs/${this.blogId}/posts?key=AIzaSyDeCUpK6JR49bjK3aqEcBPxZnAhJubUYnA`, {})
      .then(response => response.data.items as Post[])
      .catch(() => null);
  }

  /**
   * Returns the post from the blog with the specified ID.
   * @param {number} id ID of the post.
   */
  public async getPost(id: number) {
    return await this.instance
      .get(`blogs/${this.blogId}/posts/${id}?key=AIzaSyDeCUpK6JR49bjK3aqEcBPxZnAhJubUYnA`, {})
      .then(response => response.data as Post)
      .catch(() => null);
  }
}
