import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

//     Style
import profileImg from "../../images/profile_image.jpg";
import "./Banner.css";

//     Component
function Banner(props) {
  const [userHelpHeight, setUserHelpHeight] = useState(35);
  const [userHelpVisibility, setUserHelpColor] = useState("white");
  const [imageBorderRadius, setImageBorderRadius] = useState("5%");
  const [imageBorderColor, setImageBorderColor] = useState("#121420ab");

  useEffect(() => {
    setUserHelpHeight(props.initialState ? 35 : 0);
    setUserHelpColor(props.initialState ? "white" : "transparent");
    setImageBorderColor(props.initialState ? "#121420ab" : "#2f008eab");
    setImageBorderRadius(props.initialState ? "50%" : "30%");
  }, [props.initialState]);

  return (
    <div className="bannerDiv" onClick={() => props.changeComponent("Home")}>
      <div>
        <Image
          className="bannerProfileImg"
          src={profileImg}
          style={{
            borderRadius: imageBorderRadius,
            borderColor: imageBorderColor,
          }}
        />
        <h1 className="bannerTitle">
          <strong>Paul Antonio Almasi</strong>
        </h1>
      </div>

      <h3
        className="bannerSubtitle"
        style={{
          height: userHelpHeight,
          color: userHelpVisibility,
        }}
      >
        Click a section...
      </h3>
    </div>
  );
}

export default Banner;
