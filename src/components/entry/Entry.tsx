import React, { useEffect, useState } from "react";
import { Row, Container, Fade } from "react-bootstrap";
import "./Entry.css";

interface IProps {
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  height?: number | string;
  fullscreen?: boolean;
}

const Entry: React.FC<IProps> = props => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <Row noGutters>
      <Fade in={loaded}>
        <Container
          className="body background-image"
          fluid
          style={{
            backgroundColor: props.backgroundColor,
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundAttachment: "fixed",
            color: props.textColor,
            height: props.fullscreen ? "100vh" : props.height ? props.height : "auto"
          }}
        >
          {props.children}
        </Container>
      </Fade>
    </Row>
  );
};

export default Entry;
