import React, { Component } from "react";
import { Row, Container, Fade } from "react-bootstrap";
import "./Entry.css";

interface IProps {
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  height?: number | string;
  fullscreen?: boolean;
}

interface IState {
  loaded: boolean;
}

export default class Entry extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const {
      backgroundColor,
      backgroundImage,
      textColor,
      height,
      fullscreen
    } = this.props;

    const { loaded } = this.state;

    return (
      <Row noGutters>
        <Fade in={loaded}>
          <Container
            className="body background-image"
            fluid
            style={{
              backgroundColor: backgroundColor,
              backgroundImage: `url(${backgroundImage})`,
              backgroundAttachment: "fixed",
              color: textColor,
              height: fullscreen ? "100vh" : height ? height : "auto"
            }}
          >
            {this.props.children}
          </Container>
        </Fade>
      </Row>
    );
  }
}
