import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import "./Entry.css";

interface IProps {
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  height?: number | string;
  fullscreen?: boolean;
}

export default class Entry extends Component<IProps> {
  render() {
    const {
      backgroundColor,
      backgroundImage,
      textColor,
      height,
      fullscreen
    } = this.props;

    return (
      <Row noGutters>
        <Container
          className="body"
          fluid
          style={{
            backgroundColor: backgroundColor,
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            color: textColor,
            height: fullscreen ? "100vh" : height ? height : "auto"
          }}
        >
          {this.props.children}
        </Container>
      </Row>
    );
  }
}
