import { useState, useEffect } from "react";

//     Style
import "./Projects.css";

//     Components
import Project from "../Project/Project";

//     Component
export default function Projects(props) {
  const [posts, setPosts] = useState(props.projects);

  const changeSize = () => {
    if (document.getElementById("container") !== null) {
      props.setComponentHeight(
        document.getElementById("container").clientHeight
      );
    }
  };

  useEffect(() => {
    if (posts.length === 0) {
      (async () => {
        const response = await fetch(
          "https://api.github.com/users/Ianm22/repos"
        );
        const data = await response.json();

        setPosts(data);
        props.setProjects(data);
      })();
    }

    changeSize();
    window.addEventListener("resize", changeSize);

    // This is to correct the 'projects' component size for the first time
    setTimeout(() => {
      changeSize();
    }, 500);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <div className="projectsStyle" id="container">
      <h2 className="titleStyle">Github projects</h2>
      {posts.map((proj) => {
        if (proj.name !== "Ianm22") {
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
