import { User } from "../models/User";
import { Event } from "../models/Event";
import axios from "axios";
import moment from "moment";

export default class GithubRepository {
  private githubUsername: string;
  private githubUrl: string = "https://api.github.com";
  private events: Event[] = [];
  private now = moment();

  private instance = axios.create({ baseURL: this.githubUrl, timeout: 1000 });

  constructor(username: string) {
    this.githubUsername = username;
  }

  /**
   * Gets the current user information.
   */
  public async getUser(): Promise<User | null> {
    return await this.instance
      .get(`/users/${this.githubUsername}`)
      .then(response => response.data as User)
      .catch(() => null);
  }

  /**
   * Gets all events belonging to the current user.
   */
  private async getMonthEvents(): Promise<Event[] | null> {
    if (this.events.length > 0) return this.events;
    var promises = [] as Promise<void>[];

    //Inner function for adding events to the collection.
    var addEvent = (page: number) => {
      promises.push(
        //this.instance.get(`/users/${this.githubUsername}/events`, {page: `${page}`})
        fetch(`${this.githubUrl}${this.githubUsername}/events?page=${page}`)
          .then(response => response.json())
          .then(data => (this.events = this.events.concat(data as Event[])))
          .then(() => {})
      );
    };

    //Adds all events to a collection for parallel execution.
    for (var i = 1; i <= 10; i++) addEvent(i);
    await Promise.all(promises);

    //Filters retrieved events by this month.
    this.events = this.events.filter(x => moment(x.created_at).month() === this.now.month());

    if (this.events.length > 0) return this.events;
    else return null;
  }

  /**
   * Gets all pull requests for the current month.
   */
  public async getMonthsPullRequestEvents(): Promise<Event[] | null> {
    var events = await this.getMonthEvents();
    if (events) return events.filter(x => x.type === "PullRequestEvent");
    else return null;
  }

  /**
   * Gets all push events for the current month.
   */
  public async getMonthsPushEvents(): Promise<Event[] | null> {
    var events = await this.getMonthEvents();
    if (events) return events.filter(x => x.type === "PushEvent");
    else return null;
  }
}
