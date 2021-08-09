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
            Hi, I consider myself a <strong>professional</strong> person with{" "}
            <strong>logical thinking </strong>and motivated of{" "}
            <strong>continuous learning</strong>.
            <br />
            Adaptable to all organization and with fluent communication and
            <string>skill improvements</string>.
          </p>
        </Col>
        <Col className="aboutCol">
          <a
            href="https://drive.google.com/file/d/1t4vg2MaSciSP-tAEMZvkBYmMPoNeY0OF/view?usp=sharing"
            className="aboutButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my CV
          </a>
          <a
            href="https://github.com/Ianm22"
            className="aboutButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/paul-antonio-almasi/"
            className="aboutButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </Col>
      </Row>
    </div>
  );
}
