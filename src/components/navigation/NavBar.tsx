import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

interface IProps extends RouteComponentProps {}

const NavBar: React.FC<IProps> = props => {
  /**
   * Scrolls the browser window to the specified element.
   * @param id ID of the element to scroll to.
   */
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView(true);
  };

  return (
    <Navbar id="navbar" bg="dark" variant="dark" expand="md" sticky="top" collapseOnSelect>
      <Navbar.Brand>Adam Young</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
