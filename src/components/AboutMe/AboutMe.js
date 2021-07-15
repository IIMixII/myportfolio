import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

//     Style
import "./AboutMe.css";

//     Component
export default function AboutMe(props) {
  const changeHeight = () => {
    props.setComponentHeight(document.getElementById("container").clientHeight);
  };

  useEffect(() => {
    changeHeight();
    window.addEventListener("resize", changeHeight);

    // This is to correct the 'skills' component size for the first time
    setTimeout(() => {
      changeHeight();
    }, 150);

    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  });

  return (
    <Container fluid className="aboutContainer" id="container">
      <Row xs expand="lg2" className="aboutRow">
        <Col className="aboutCol">
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("<Hello World").typeString(" />").start();
              }}
            />
          </h2>

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
