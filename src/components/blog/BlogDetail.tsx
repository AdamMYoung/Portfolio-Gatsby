import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";

import BloggerRepository from "../../data/BloggerRepository";
import { Post } from "../../models/blogger/Post";

const bloggerApi = new BloggerRepository("5234620729516617055");

interface IProps {
  id: number;
}

class BlogDetail extends React.Component<IProps> {
  state = {
    post: {} as Post
  };

  async componentDidMount() {
    const result = await bloggerApi.getPost(this.props.id);
    if (result) this.setState({ post: result });
    this.setHighlight();
  }

  componentDidUpdate() {
    this.setHighlight();
  }

  setHighlight = () => {
    document.querySelectorAll("code").forEach(block => {
      hljs.highlightBlock(block);
    });
  };

  render() {
    const post = this.state.post;

    return (
      <div style={{ minHeight: "80vh" }}>
        {post && (
          <Container style={{ marginTop: 12, marginBottom: 24 }}>
            <Row>
              <Col>
                <LinkContainer to="/blog" style={{ margin: 12, float: "left" }}>
                  <Button variant="primary">Back to blog</Button>
                </LinkContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{post.title}</h2>
                <h4>{new Date(post.updated).toDateString()}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: post.content }} />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default BlogDetail;
