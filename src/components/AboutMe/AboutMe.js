import { Container, Row, Col } from "react-bootstrap";

//     Style
import "./AboutMe.css";

//     Component
export default function AboutMe() {
  return (
    <Container fluid className="aboutContainer">
      <Row xs expand="lg2" className="aboutRow">
        <Col className="aboutCol">
          <h1>&lt;Hello World&#47;&gt;</h1>
          <p>
            Hi, I'm Paul Antonio Almasi and ...
            <br />
            eaouaoe
            <br />
            eaouaoeuaeo
            <br />
            aeuoaeo
            <br />
          </p>
        </Col>
        <Col className="aboutCol">
          <button href="#">Download my CV</button>
        </Col>
      </Row>
    </Container>
  );
}
