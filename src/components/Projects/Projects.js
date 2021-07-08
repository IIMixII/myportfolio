import { useState, useEffect } from "react";

//     Style
import "./Projects.css";

//     Components
import Title from "../Title/Title";
import Project from "../Project/Project";

//     Component
export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.github.com/users/Ianm22/repos");
      const data = await response.json();

      setPosts(data);
    })();
  });

  return (
    <div className="projectsStyle">
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
