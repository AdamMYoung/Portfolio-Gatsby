import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import "./Entry.css";

interface IProps {
  backgroundColor?: string;
  textColor?: string;
  height?: number;
}

export default class Entry extends Component<IProps> {
  render() {
    const { backgroundColor, textColor, height } = this.props;

    return (
      <Row>
        <Container
          className="body"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
            height: height
          }}
        >
          {this.props.children}
        </Container>
      </Row>
    );
  }
}
