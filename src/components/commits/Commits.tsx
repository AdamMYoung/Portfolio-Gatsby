import React, { Component } from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import CountCard from "../elements/card/CountCard";
import GithubRepository from "../../data/GithubRepository";
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
    var repo = new GithubRepository(githubUsername);

    //Gets user
    var user = await repo.getUser();
    if (user) this.setState({ publicRepos: user.public_repos });

    var events = await repo.getEvents();
    if (events) {
      //Filters events by this month.
      var monthEvents = events.filter(
        x => moment(x.created_at).month() === now.month()
      );

      //Filters events by event type.
      var pushCount = monthEvents.filter(x => x.type === "PushEvent").length;
      var pullRequestCount = monthEvents.filter(
        x => x.type === "PullRequestEvent"
      ).length;

      //Updates the stored values.
      this.setState({
        githubPushes: pushCount,
        pullRequests: pullRequestCount
      });
    }
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
