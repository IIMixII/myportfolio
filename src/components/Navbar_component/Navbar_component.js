import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";

//     Style
import "./Navbar_component.css";

//     Component
export default function Navbar_component(props) {
  const [navbarBackgroundColor, setNavbarBackgroundColor] =
    useState("#121420ab");

  useEffect(() => {
    setNavbarBackgroundColor(props.initialState ? "#121420ab" : "#2f008eab");
  }, [props.initialState]);

  return (
    <Navbar style={{ backgroundColor: navbarBackgroundColor }}>
      <Nav>
        <Nav.Link onClick={() => props.changeComponent("AboutMe")}>
          About me
        </Nav.Link>
        <Nav.Link onClick={() => props.changeComponent("Skills")}>
          Skills
        </Nav.Link>
        <Nav.Link onClick={() => props.changeComponent("Projects")}>
          Projects
        </Nav.Link>
        <Nav.Link onClick={() => props.changeComponent("ContactMe")}>
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
