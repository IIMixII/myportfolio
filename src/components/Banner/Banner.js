import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";

//     Style
import profileImg from "../../images/profile_image.jpg";
import "./Banner.css";

//     Component
function Banner(props) {
  const [userHelpHeight, setUserHelpHeight] = useState(35);
  const [userHelpVisibility, setUserHelpColor] = useState("white");
  const [userHelpBorderRadius, setUserHelpBorderRadius] = useState("5%");

  useEffect(() => {
    if (props.initialState) {
      setUserHelpHeight(35);
      setUserHelpColor("white");
      setUserHelpBorderRadius("50%");
    } else {
      setUserHelpHeight(0);
      setUserHelpColor("transparent");
      setUserHelpBorderRadius("30%");
    }
  }, [props.initialState]);

  return (
    <div className="bannerDiv" onClick={() => props.changeComponent("Home")}>
      <Image
        className="bannerProfileImg"
        src={profileImg}
        style={{ borderRadius: userHelpBorderRadius }}
      />
      <h1 className="bannerTitle">Paul Antonio Almasi</h1>

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
