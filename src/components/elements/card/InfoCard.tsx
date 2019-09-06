import React from "react";
import { Card } from "react-bootstrap";

interface IProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const InfoCard: React.FC<IProps> = props => (
  <Card bg="dark" text="light">
    {props.image && <Card.Img variant="top" src={props.image} alt={props.title} />}
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.subtitle}</Card.Subtitle>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    {props.children}
  </Card>
);

export default InfoCard;
