import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
      <Card bg="dark" text="light">
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Button variant="primary" href={link}>
          GitHub
        </Button>
      </Card>
    );
  }
}
