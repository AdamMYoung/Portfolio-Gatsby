import React, { useEffect, useState } from "react";
import { Row, Container, Fade } from "react-bootstrap";
import "./Entry.css";

interface IProps {
  id?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  height?: number | string;
  fullscreen?: boolean;
  divider?: boolean;
}

const Entry: React.FC<IProps> = props => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <>
      <Row id={props.id} noGutters>
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
      {props.divider && <span className="section-divider" />}
    </>
  );
};

Entry.defaultProps = {
  divider: true
};

export default Entry;
