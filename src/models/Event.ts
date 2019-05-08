/**
 * Represents a GitHub event (PullRequest, MergeRequest, CommitRequest etc).
 */
export interface Event {
  type: string;
  public: boolean;
  created_at: string;
  id: number;
}
