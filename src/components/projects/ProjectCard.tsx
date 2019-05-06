import React, { Component } from "react";
import { Card } from "react-bootstrap";

interface IProps {
  title: string;
  src: string;
  description: string;
  link: string;
}

export default class ProjectCard extends Component<IProps> {
  render() {
    const { title, src, description, link } = this.props;

    return (
      <Card
        bg="dark"
        text="light"
        style={{ textAlign: "center", marginTop: 6 }}
      >
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={link}>Github</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}
