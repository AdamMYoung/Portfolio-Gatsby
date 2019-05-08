import React, { Component } from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import CountCard from "../elements/card/CountCard";
import GithubRepository from "../../data/GithubRepository";

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
    var repo = new GithubRepository(githubUsername);

    //User
    var user = await repo.getUser();
    if (user) this.setState({ publicRepos: user.public_repos });

    //Events
    var pushes = await repo.getMonthsPushEvents();
    var pullRequests = await repo.getMonthsPullRequestEvents();

    if (pushes && pullRequests) {
      this.setState({
        githubPushes: pushes.length,
        pullRequests: pullRequests.length
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
