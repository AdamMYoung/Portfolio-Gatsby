import React, { useEffect, useState } from "react";

import BloggerRepository from "../../data/BloggerRepository";
import { Post } from "../../models/blogger/Post";
import Entry from "../home/entry/Entry";
import BlogCard from "./BlogCard";
import { Container, Row, Col } from "react-bootstrap";

const bloggerApi = new BloggerRepository("5234620729516617055");

const Blog: React.FC = () => {
  const [posts, setPosts] = useState([] as Post[]);

  /**
   * Fetches all blog posts.
   */
  useEffect(() => {
    const fetchData = async () => {
      const results = await bloggerApi.getPosts();
      if (results) setPosts(results);
    };
    fetchData();
  }, []);

  return (
    <Container style={{ minHeight: "100vh", marginTop: 24 }}>
      <Row>
        <Col>
          <h1>The Blog</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {posts.map((post, index) => (
            <Entry>
              <BlogCard
                postId={post.id}
                title={post.title}
                content={post.content}
                date={post.updated}
                switchAlignment={index % 2 === 0}
              />
            </Entry>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
