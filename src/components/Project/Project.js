import React from "react";
import { OverlayTrigger, Image, Tooltip } from "react-bootstrap";

//     Style
import "./Project.css";

//     Component
export default function Project(props) {
  const imageExists = (image_url) => {
    var http = new XMLHttpRequest();
    http.open("HEAD", image_url, false);
    http.send();
    return http.status !== 404;
  };

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip
          style={{ transition: "opacity 0.5s linear", paddingLeft: "10px" }}
        >
          <strong>{props.description}</strong>
        </Tooltip>
      }
      transition={null}
    >
      {({ ...triggerHandler }) => (
        <div className="projectStyle" {...triggerHandler}>
          <div className="projectDivImage">
            {imageExists(props.image) ? (
              <Image src={props.image} className="projectImage" />
            ) : (
              <span className="noImageText">
                <strong>
                  No preview available for this project. Click to see the code.
                </strong>
              </span>
            )}
          </div>

          <a
            href={props.link}
            className="projectButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
        </div>
      )}
    </OverlayTrigger>
  );
}
