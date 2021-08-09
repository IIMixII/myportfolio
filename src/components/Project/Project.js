import React from "react";
import { OverlayTrigger, Image, Tooltip } from "react-bootstrap";

//     Style
import "./Project.css";

//     Component
export default function Project(props) {
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
            <Image src={props.image} className="projectImage" />
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
