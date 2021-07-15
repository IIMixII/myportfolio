import { useState, useEffect } from "react";

//     Style
import "./Projects.css";

//     Components
import Title from "../Title/Title";
import Project from "../Project/Project";

//     Component
export default function Projects(props) {
  const [posts, setPosts] = useState(props.projects);

  const changeHeight = () => {
    props.setComponentHeight(document.getElementById("container").clientHeight);
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
    <div className="projectsStyle" id="container">
      <Title title="Github Projects" />
      {posts.map((proj) => {
        if (proj.name !== "Ianm22") {
          var output = (
            <Project
              image="image"
              key={proj.id}
              title={proj.name}
              description={proj.description}
              link={proj.html_url}
            />
          );
        }

        return output;
      })}
    </div>
  );
}
