//     Style
import "./Title.css";

//     Component
export default function Title(props) {
  return (
    <div>
      <h2 className="titleStyle">{props.title}</h2>
    </div>
  );
}
