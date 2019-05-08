import { User } from "../models/User";
import { Event } from "../models/Event";

export default class GithubRepository {
  private githubUsername: string;
  private githubUrl: string = "https://api.github.com/users/";

  constructor(username: string) {
    this.githubUsername = username;
  }

  /**
   * Gets the current user information.
   */
  public async getUser(): Promise<User | null> {
    return await fetch(`${this.githubUrl}${this.githubUsername}`)
      .then(response => response.json())
      .then(data => data as User)
      .catch(() => null);
  }

  /**
   * Gets all events belonging to the current user.
   */
  public async getEvents(): Promise<Event[] | null> {
    var promises = [] as Promise<void>[];
    var events = [] as Event[];

    //Inner function for adding events to the collection.
    var addEvent = (page: number) => {
      promises.push(
        fetch(`${this.githubUrl}${this.githubUsername}/events?page=${page}`)
          .then(response => response.json())
          .then(data => (events = events.concat(data as Event[])))
          .then(() => {})
      );
    };

    //Adds all events to a collection for parallel execution.
    for (var i = 1; i <= 10; i++) addEvent(i);

    await Promise.all(promises);

    if (events.length > 0) return events;
    else return null;
  }
}
