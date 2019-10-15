import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface IProps {
  postId: number;
  title: string;
  content: string;
  date: Date;
  switchAlignment?: boolean;
}

const BlogCard: React.FC<IProps> = props => {
  /**
   * Returns text information from the html.
   * @param html HTML to parse.
   */
  const getSynopsis = (html: string, limit: number = 500) => {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    const text = temp.textContent || temp.innerText || "";

    return `${text.substring(0, limit)}...`;
  };

  /**
   * Returns the first image found in the html.
   * @param html HTML to parse.
   */
  const getImage = (html: string) => {
    var re = /<img[^>]+src="http:\/\/([^">]+)/g;
    var results = re.exec(html);

    return results && results[0] ? results[0] : null;
  };

  const image = getImage(props.content);

  return (
    <Container style={{ margin: 12 }}>
      <Row>
        <Col>
          <h2>{props.title}</h2>
          <h4>{new Date(props.date).toDateString()}</h4>
        </Col>
      </Row>
      <Row>
        {image && (
          <Col sm={{ span: 3, offset: props.switchAlignment ? 9 : 0 }}>
            <Image fluid src={image} />
          </Col>
        )}

        <Col style={{ marginTop: 14 }}>
          <div style={{ textAlign: "left" }}>{getSynopsis(props.content)}</div>
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col>
          <LinkContainer to={`/blog/${props.postId}`}>
            <Button>Read More</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogCard;
