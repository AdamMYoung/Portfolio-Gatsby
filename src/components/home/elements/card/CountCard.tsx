import React from "react";
import { Card } from "react-bootstrap";

interface IProps {
  title: string;
  count: number;
}

const CountCard: React.FC<IProps> = props => (
  <Card bg="dark" text="light">
    <h1 style={{ paddingTop: 24 }}>{props.count}</h1>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default CountCard;
