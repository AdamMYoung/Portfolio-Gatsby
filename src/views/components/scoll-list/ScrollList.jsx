import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import { ScrollListEntry } from "./ScrollListEntry";
import { ScrollListSection } from "./ScrollListSection";
import { getGuid } from "../../../utility/stringUtils";

const ScrollList = props => {
  const [visibleEntryIndex, setVisibleEntryIndex] = useState(0);
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);

  const entries = React.Children.toArray(props.children).map((child, index) =>
    React.cloneElement(child, {
      name: getGuid(),
      onEntryEntered: () => setVisibleEntryIndex(index),
      onSectionEntered: sectionIndex => {
        setVisibleSectionIndex(sectionIndex);
        setVisibleEntryIndex(index);
      }
    })
  );

  /**
   * Returns text styling based on if the entry is active or not.
   */
  const getTextStyle = (requiredIndex, currentIndex) => {
    return { cursor: "pointer", color: requiredIndex === currentIndex ? "white" : "gray" };
  };

  const itemsSubList = entries.map((entry, index) => (
    <div key={index}>
      {/* Entry title. */}
      {entry.props.displayInList && (
        <a key={index} style={{ cursor: "pointer" }} onClick={() => document.getElementById(entry.props.name).scrollIntoView()}>
          <h3 key={entry.props.title} style={getTextStyle(index, visibleEntryIndex)}>
            {entry.props.title}
          </h3>
        </a>
      )}

      {/* Section titles. */}
      {entry.props.displayInList &&
        index === visibleEntryIndex &&
        React.Children.toArray(entry.props.children).map(
          (section, sectionIndex) =>
            section.props.displayInList && (
              <h5
                key={sectionIndex}
                style={getTextStyle(sectionIndex, visibleSectionIndex)}
                onClick={() => document.getElementById(section.props.title).scrollIntoView()}
              >
                {section.props.title}
              </h5>
            )
        )}
    </div>
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
        {entries}
      </Col>
    </Row>
  );
};

ScrollList.Entry = ScrollListEntry;
ScrollList.Section = ScrollListSection;

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
