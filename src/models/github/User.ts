/**
 * Represents a GitHub user.
 */
export interface User {
  login: string;
  avatar_url: string;
  url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  followings: number;
}
