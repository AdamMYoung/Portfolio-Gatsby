import React, { Component } from "react";
import "./Card.css";
import { Card } from "react-bootstrap";

interface IProps {
  title: string;
  count: number;
}

export default class CountCard extends Component<IProps> {
  render() {
    const { title, count } = this.props;

    return (
      <Card bg="dark" text="light">
        <h1 style={{ paddingTop: 24 }}>{count}</h1>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
