import { Nav, Navbar } from "react-bootstrap";

//     Style
import "./Navbar_component.css";

//     Component
export default function Navbar_component(props) {
  return (
    <div>
      <Navbar>
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
    </div>
  );
}
