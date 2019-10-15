import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import BloggerRepository from "../../data/BloggerRepository";

const bloggerApi = new BloggerRepository("5234620729516617055");

interface IProps {
  id: number;
}

const BlogDetail: React.FC<IProps> = props => {
  const [post, setPost] = useState();

  /**
   * Fetches the blog post of the specified ID.
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await bloggerApi.getPost(props.id);
      if (result) setPost(result);
    };
    fetchData();
  }, []);

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
};

export default BlogDetail;
