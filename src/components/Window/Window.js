//     Style
import "./Window.css";

export default function Window(props) {
  const divComponentStyle = () => {
    return {
      transition: props.componentTransition,
      opacity: props.componentOpacity,
    };
  };

  return (
    <div className="windowDivStyle">
      <div style={divComponentStyle()}>{props.actualComponent}</div>
    </div>
  );
}
