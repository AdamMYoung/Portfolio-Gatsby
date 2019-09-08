import React, { useEffect, useState } from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import CountCard from "../elements/card/CountCard";
import GithubRepository from "../../../data/GithubRepository";

interface IProps {}

interface IState {
  publicRepos: number;
  githubPushes: number;
  pullRequests: number;
}

const githubUsername = "AdamMYoung";

const Commits: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number>(0);
  const [githubPushes, setGithubPushes] = useState<number>(0);
  const [pullRequests, setPullRequests] = useState<number>(0);

  useEffect(() => {
    getGithubData();
  }, []);

  /**
   * Gets all GitHub data for the account.
   */
  const getGithubData = async () => {
    var repo = new GithubRepository(githubUsername);

    //User
    var user = await repo.getUser();
    if (user) setRepoCount(user.public_repos);

    //Events
    var pushes = await repo.getMonthsPushEvents();
    var pullRequests = await repo.getMonthsPullRequestEvents();

    if (pushes && pullRequests) {
      setGithubPushes(pushes.length);
      setPullRequests(pullRequests.length);
    }
  };

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
            <CountCard title="Public Repos" count={repoCount} />
            <CountCard title="Pushes to GitHub this month" count={githubPushes} />
            <CountCard title="Pull requests this month" count={pullRequests} />
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Commits;
