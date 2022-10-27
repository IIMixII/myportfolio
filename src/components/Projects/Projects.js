import { useEffect } from "react";

//     Style
import "./Projects.css";

//     Components
import Project from "../Project/Project";

//     Component
export default function Projects(props) {
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
    <div className="projectsStyle" id="container">
      <h2 className="titleStyle">Github projects</h2>
      {props.projects.map((proj) => {
        if (proj.name !== "IIMixII") {
          var output = (
            <Project
              image={
                "https://raw.githubusercontent.com/" +
                proj.full_name +
                "/main/preview.png"
              }
              key={proj.id}
              title={proj.name}
              description={proj.description}
              link={proj.html_url}
              className="projectsProjectDiv"
            />
          );
        }

        return output;
      })}
    </div>
  );
}
