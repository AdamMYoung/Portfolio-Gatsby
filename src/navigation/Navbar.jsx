import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown, OverlayTrigger, Popover } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BlockPicker } from "react-color";

const colors = ["#b71c1c", "#880e4f", "#4a148c", "#1a237e", "#01579b", "#004d40", "#870000"];

const NavBar = props => (
  <Navbar variant="dark">
    <Nav className="mr-auto">
      <OverlayTrigger
        rootClose
        trigger="click"
        placement="bottom"
        overlay={
          <Popover style={{ background: "transparent" }}>
            <BlockPicker colors={colors} color={props.color} onChangeComplete={color => props.onColourChanged(color.hex)} />
          </Popover>
        }
      >
        <Nav.Link>Change Colour</Nav.Link>
      </OverlayTrigger>

      <Navbar.Text>|</Navbar.Text>

      <LinkContainer exact to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>

      <NavDropdown title="Projects">
        <NavDropdown.Item href="https://github.com/AdamMYoung/Vocalia-Listen">Vocalia</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/AdamMYoung/Groupr">Groupr</NavDropdown.Item>
      </NavDropdown>

      <LinkContainer exact to="/snippets">
        <Nav.Link>Snippets</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default NavBar;

NavBar.propTypes = {
  color: PropTypes.string,

  onColourChanged: PropTypes.func
};
