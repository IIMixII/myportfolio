import { OverlayTrigger, Image, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

//     Style
import "./Skill.css";

//     Component
export default function Skill(props) {
  const createScore = () => {
    let i = 0;
    let iconArray = [];

    while (i < props.score) {
      iconArray.push(
        <FontAwesomeIcon icon={fasFaStar} key={props.keys * 10 + i} />
      );
      i++;
    }

    while (i < 5) {
      iconArray.push(
        <FontAwesomeIcon icon={farFaStar} key={props.keys * 10 + i} />
      );
      i++;
    }

    return iconArray;
  };

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip style={{ transition: "opacity 0.5s linear" }}>
          <strong>{props.name}</strong>
          <br />
          {createScore()}
        </Tooltip>
      }
      transition={null}
    >
      {({ ...triggerHandler }) => (
        <Image
          className="skillImage"
          src={props.img}
          {...triggerHandler}
          fluid
        />
      )}
    </OverlayTrigger>
  );
}
