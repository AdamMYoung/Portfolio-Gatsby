import React, { Component } from "react";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import "./Commits.css";
import { Event } from "../../models/Event";
var moment = require("moment");

interface IProps {}

interface IState {
  publicRepos: number;
  githubPushes: number;
  pullRequests: number;
}

export default class Commits extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      publicRepos: 0,
      githubPushes: 0,
      pullRequests: 0
    };
  }

  componentDidMount() {
    this.getGithubData();
  }

  /**
   * Gets all GitHub data for the account.
   */
  private getGithubData = async () => {
    let now = moment();

    await fetch("https://api.github.com/users/AdamMYoung")
      .then(response => response.json())
      .then(data => this.setState({ publicRepos: data.public_repos }));

    //Gets all events.
    var events = await fetch("https://api.github.com/users/AdamMYoung/events")
      .then(response => response.json())
      .then(data => data as Event[]);

    //Filters by this month.
    var monthEvents = events.filter(
      x =>
        moment()
          .get(x.created_at)
          .month() === now.month()
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
            <div>
              <h2>I Love What I Do</h2>
              <h6>
                Here's some statistics for what I've been up to recently...
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Card bg="dark" text="light">
                <h1 className="github-count">{publicRepos}</h1>
                <Card.Body>
                  <Card.Title>Public Repos</Card.Title>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light">
                <h1 className="github-count">{githubPushes}</h1>
                <Card.Body>
                  <Card.Title>Pushes to GitHub this month</Card.Title>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light">
                <h1 className="github-count">{pullRequests}</h1>
                <Card.Body>
                  <Card.Title>Pull requests this month</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}
