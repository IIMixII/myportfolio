import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

//     Style
import "./AboutMe.css";

//     Component
export default function AboutMe(props) {
  const changeSize = () => {
    if (document.getElementById("container") !== null) {
      props.setComponentHeight(
        document.getElementById("container").clientHeight
      );
    }
  };

  useEffect(() => {
    changeSize();
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <div className="aboutDiv" id="container">
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
          <a
            href="https://drive.google.com/file/d/1t4vg2MaSciSP-tAEMZvkBYmMPoNeY0OF/view?usp=sharing"
            className="aboutButton"
          >
            Download my CV
          </a>
        </Col>
      </Row>
    </div>
  );
}
