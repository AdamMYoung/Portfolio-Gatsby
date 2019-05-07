import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

interface IProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
}

export default class InfoCard extends Component<IProps> {
  render() {
    const {
      image,
      title,
      subtitle,
      description,
      buttonLink,
      buttonText
    } = this.props;

    return (
      <Card bg="dark" text="light">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        {buttonLink && buttonText && (
          <Button variant="primary" href={buttonLink}>
            {buttonText}
          </Button>
        )}
      </Card>
    );
  }
}
