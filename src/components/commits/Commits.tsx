import React, { Component } from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import { Event } from "../../models/Event";
import CountCard from "../elements/card/CountCard";
var moment = require("moment");

interface IProps {}

interface IState {
  publicRepos: number;
  githubPushes: number;
  pullRequests: number;
}

const githubUsername = "AdamMYoung";

export default class Commits extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      publicRepos: 0,
      githubPushes: 0,
      pullRequests: 0
    };
  }

  async componentDidMount() {
    await this.getGithubData();
  }

  /**
   * Gets all GitHub data for the account.
   */
  private getGithubData = async () => {
    let now = moment();

    //Gets user
    await fetch(`https://api.github.com/users/${githubUsername}`)
      .then(response => response.json())
      .then(data => this.setState({ publicRepos: data.public_repos }));

    var events = [] as Event[];

    //Gets all events.
    for (var i = 1; i <= 10; i++) {
      var result = await fetch(
        `https://api.github.com/users/${githubUsername}/events?page=${i}`
      )
        .then(response => response.json())
        .then(data => data as Event[]);

      events = events.concat(result);

      //If last element is older than current month, stop fetching.
      var lastElement = moment(result[result.length - 1].created_at);
      if (lastElement.month() !== now.month()) break;
    }

    //Filters by this month.
    var monthEvents = events.filter(
      x => moment(x.created_at).month() === now.month()
    );

    //Filters by event type.
    var pushCount = monthEvents.filter(x => x.type === "PushEvent").length;
    var pullRequestCount = monthEvents.filter(
      x => x.type === "PullRequestEvent"
    ).length;

    //Updates the stored values.
    this.setState({ githubPushes: pushCount, pullRequests: pullRequestCount });
  };

  render() {
    const { publicRepos, githubPushes, pullRequests } = this.state;

    return (
      <Container className="center-text">
        <Row>
          <Col>
            <h2>I Love What I Do</h2>
            <h6>This month's open source contributions.</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <CountCard title="Public Repos" count={publicRepos} />
              <CountCard
                title="Pushes to GitHub this month"
                count={githubPushes}
              />
              <CountCard
                title="Pull requests this month"
                count={pullRequests}
              />
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}
