import { Nav, Navbar } from "react-bootstrap";

//     Style
import "./Navbar_component.css";

//     Component
export default function Navbar_component() {
  const selectComponent = (component) => {
    this.props.changeComponent(component);
  };

  return (
    <div>
      <Navbar>
        <Nav>
          <Nav.Link onClick={() => selectComponent("AboutMe")}>
            About me
          </Nav.Link>
          <Nav.Link onClick={() => selectComponent("Skills")}>Skills</Nav.Link>
          <Nav.Link onClick={() => selectComponent("Projects")}>
            Projects
          </Nav.Link>
          <Nav.Link onClick={() => selectComponent("ContactMe")}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
