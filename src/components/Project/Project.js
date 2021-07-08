import React from "react";
import { OverlayTrigger, Image, Tooltip } from "react-bootstrap";

//     Style
import "./Project.css";

//     Component
export default function Project(props) {
  return (
    <div>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip style={{ transition: "opacity 0.5s linear" }}>
            <strong>{props.description}</strong>
          </Tooltip>
        }
        transition={null}
      >
        {({ ...triggerHandler }) => (
          <a href={props.link}>
            <div className="projectStyle" {...triggerHandler}>
              <div
                style={{
                  height: "12em",
                  backgroundColor: "#2a2c39",
                  margin: "15px 15px 0px 15px",
                }}
              >
                <p>{props.image}</p>
              </div>
              <div
                style={{
                  height: "2em",
                  backgroundColor: "#2a2c39",
                  margin: "10px 15px 15px 15px",
                }}
              >
                <p>{props.title}</p>
              </div>
            </div>
          </a>
        )}
      </OverlayTrigger>
    </div>
  );
}
