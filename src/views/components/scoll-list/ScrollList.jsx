import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import ScrollEvent from "../scroll-event/ScrollEvent";

const ScrollListItem = props => {
  return (
    <div style={{ minHeight: "90vh", marginTop: 24, marginBotom: 24 }}>
      <Container>
        <Row>
          <Col>
            <ScrollEvent onEnter={props.onEnter}>
              <div>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
              </div>
            </ScrollEvent>
          </Col>
        </Row>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </div>
  );
};

const ScrollList = props => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  //Add highlight change on scroll interaction.
  const itemsSubList = React.Children.toArray(props.children).map((item, index) => (
    <h3 key={item.props.title} style={{ color: visibleIndex === index ? "white" : "gray" }}>
      {item.props.title}
    </h3>
  ));

  return (
    <Row style={{ minHeight: props.minHeight, margin: 0, marginBottom: 48 }}>
      <Col sm={12} md={3} lg={2} className="d-none d-md-block">
        <div style={{ position: "sticky", top: 56 }}>
          <strong>
            <h1>{props.title}</h1>
          </strong>

          {itemsSubList}
        </div>
      </Col>

      <Col sm={12} md={9} lg={10}>
        {React.Children.toArray(props.children).map((child, index) =>
          React.cloneElement(child, { onEnter: () => setVisibleIndex(index) })
        )}
      </Col>
    </Row>
  );
};

ScrollList.Item = ScrollListItem;

export default ScrollList;

ScrollList.defaultProps = {
  onEnter: () => {},
  minHeight: "90vh"
};

ScrollList.propTypes = {
  //Title of the list.
  title: PropTypes.string,

  //Minimum height of the list.
  minHeight: PropTypes.string
};

ScrollListItem.propTypes = {
  // Title to display in the list.
  title: PropTypes.string.isRequired,

  //Subtitle to display in the list.
  subtitle: PropTypes.string,

  //Content to display in the list entry.
  children: PropTypes.node.isRequired
};
