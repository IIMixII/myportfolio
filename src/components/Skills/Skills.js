import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

//     Style
import "./Skills.css";

//     Components
import Skill from "../Skill/Skill";

//     Backend
import python_img from "../../images/python_logo.png";
import javascript_img from "../../images/javascript_logo.png";
import java_img from "../../images/java_logo.png";
import sql_img from "../../images/sql_logo.png";

//     Frontend
import html_img from "../../images/html_logo.png";
import css_img from "../../images/css_logo.png";
import react_img from "../../images/react_logo.png";
import gtk_img from "../../images/gtk_logo.png";

//     Tools
import git_img from "../../images/git_logo.png";
import docker_img from "../../images/docker_logo.png";
import dockerCompose_img from "../../images/dockerCompose_logo.png";
import linux_img from "../../images/linux_logo.png";

//     Component
export default function Skills(props) {
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

    // This is to correct the 'skills' component size for the first time
    setTimeout(() => {
      changeSize();
    }, 300);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <div id="container">
      <Row className="skillsRow">
        <Col className="skillsCol">
          <h2 className="titleStyle">Backend</h2>
          <Skill img={python_img} name={"Python"} score={3} keys={1} />
          <Skill img={java_img} name={"Java"} score={3} keys={2} />
          <Skill img={sql_img} name={"SQL"} score={3} keys={3} />
          <Skill img={javascript_img} name={"JavaScript"} score={2} keys={4} />
        </Col>

        <Col className="skillsCol">
          <h2 className="titleStyle">Frontend</h2>
          <Skill img={html_img} name={"HTML5"} score={3} keys={5} />
          <Skill img={css_img} name={"CSS3"} score={3} keys={6} />
          <Skill img={react_img} name={"React"} score={2} keys={7} />
          <Skill img={gtk_img} name={"GTK+"} score={2} keys={8} />
        </Col>

        <Col className="skillsCol">
          <h2 className="titleStyle">Tools</h2>
          <Skill img={linux_img} name={"Linux"} score={4} keys={9} />
          <Skill img={docker_img} name={"Docker"} score={3} keys={10} />
          <Skill
            img={dockerCompose_img}
            name={"Docker compose"}
            score={3}
            keys={11}
          />
          <Skill img={git_img} name={"Git"} score={2} keys={13} />
        </Col>
      </Row>
    </div>
  );
}
