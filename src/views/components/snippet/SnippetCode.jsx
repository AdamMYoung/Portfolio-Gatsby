import React from "react";
import { Row, Col } from "react-bootstrap";
import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";

export class SnippetCode extends React.Component {
  componentDidMount() {
    this._setHighlight();
  }

  componentDidUpdate() {
    this._setHighlight();
  }

  _setHighlight = () => {
    document.querySelectorAll("code").forEach(block => hljs.highlightBlock(block));
  };

  render() {
    return (
      <Row>
        <Col>
          <code>{this.props.children}</code>
        </Col>
      </Row>
    );
  }
}
