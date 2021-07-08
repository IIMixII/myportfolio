import { Image } from "react-bootstrap";

//     Style
import img_banner from "../../images/banner.jpg";

//     Component
function Banner() {
  return (
    <div>
      <Image src={img_banner} fluid />
    </div>
  );
}

export default Banner;
