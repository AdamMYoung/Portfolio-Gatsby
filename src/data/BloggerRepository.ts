export default class BloggerRepository {
  private bloggerUrl = "";
  private bloggerApiKey: string;

  constructor(apiKey: string) {
    this.bloggerApiKey = apiKey;
  }

  /**
   * Returns all blogs belonging to the account.
   */
  public async getBlogs() {}

  /**
   * Returns blog detail from the specified blog.
   * @param uid UID of the blog to return
   */
  public async GetBlog(uid: string) {}
}
