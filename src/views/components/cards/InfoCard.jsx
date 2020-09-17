import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const InfoCard = props => (
  <Card style={{ background: "transparent", border: "none" }} text="light">
    {props.image && <Card.Img style={{ borderRadius: "1%" }} variant="top" src={props.image} alt={props.title} />}
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.subtitle}</Card.Subtitle>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    {props.children}
  </Card>
);

export default InfoCard;

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,

  image: PropTypes.string,

  subtitle: PropTypes.string,

  description: PropTypes.string
};
