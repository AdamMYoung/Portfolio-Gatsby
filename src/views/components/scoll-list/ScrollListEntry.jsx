import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import ScrollEvent from "../scroll-event/ScrollEvent";

export const ScrollListEntry = props => {
  return (
    <div id={props.name} style={{ minHeight: "90vh", marginTop: 24, marginBotom: 24 }}>
      <Container>
        <Row>
          <Col>
            <ScrollEvent onEnter={props.onEntryEntered}>
              <div>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
              </div>
            </ScrollEvent>
          </Col>
        </Row>
        <Row>
          <Col>
            {React.Children.toArray(props.children).map((child, index) =>
              React.cloneElement(child, {
                onSectionEntered: () => props.onSectionEntered(index)
              })
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ScrollListEntry.defaultProps = {
  displayInList: true
};

ScrollListEntry.propTypes = {
  // Title to display in the list.
  title: PropTypes.string.isRequired,

  //Subtitle to display in the list.
  subtitle: PropTypes.string,

  //Indicates if the section should be displayed in the side list. Defaults to true.
  displayInList: PropTypes.bool
};
