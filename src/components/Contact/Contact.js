import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

//     Style
import "./Contact.css";

//     Component
export default function Contact(props) {
  const [outputMessage, setOutputMessage] = useState("");

  const changeSize = () => {
    if (document.getElementById("container") !== null) {
      props.setComponentHeight(
        document.getElementById("container").clientHeight
      );
    }
  };

  useEffect(() => {
    changeSize();
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  const onSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_5fh9i2e",
        "template_ybp7bmz",
        event.target,
        "user_wvF3OK6Z1Rp9K4I623Axu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOutputMessage("Message sent!");
        },
        (error) => {
          console.log(error.text);
          setOutputMessage(
            "An error has occurred, please try again in a few minutes."
          );
        }
      );

    event.target.reset();
  };

  const showOutputMessage = () => {
    if (outputMessage !== "") {
      return <p className="outputMessage">{outputMessage}</p>;
    } else {
      return null;
    }
  };

  return (
    <div id="container" className="contactDiv">
      <h2 className="titleStyle">Contact me</h2>
      <form onSubmit={onSubmit} className="formStyle">
        <div className="formDivStyle">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="inputStyle"
            required
          />
        </div>

        <div className="formDivStyle">
          <input
            placeholder="E-mail"
            name="email"
            className="inputStyle"
            required
          />
        </div>

        <div className="formDivStyle">
          <input
            placeholder="Subject"
            name="subject"
            className="inputStyle"
            required
          />
        </div>

        <div className="formDivStyle">
          <textarea
            placeholder="Message"
            name="message"
            className="textareaStyle"
            required
          />
        </div>

        <div style={{ paddingTop: "10px" }}>
          <input type="submit" value="Submit" className="formSubmit" />
        </div>
      </form>
      {showOutputMessage()}
    </div>
  );
}
