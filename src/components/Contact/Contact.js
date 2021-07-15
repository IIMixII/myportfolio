import { useState, useEffect } from "react";

//     Components
import Title from "../Title/Title";

//     Style
import "./Contact.css";

//     Component
export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const changeHeight = () => {
    props.setComponentHeight(document.getElementById("container").clientHeight);
  };

  useEffect(() => {
    changeHeight();
    window.addEventListener("resize", changeHeight);

    // This is to correct the 'skills' component size for the first time
    setTimeout(() => {
      changeHeight();
    }, 150);

    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  });

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Submit");
  };

  return (
    <div id="container">
      <Title title="Contact me" />
      <form onSubmit={onSubmit} className="formStyle">
        <div className="formDivStyle">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="inputStyle"
            /* onFocus={() => {this.onFocus()}} */
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </div>

        <div className="formDivStyle">
          <input
            placeholder="E-mail"
            name="email"
            className="inputStyle"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>

        <div className="formDivStyle">
          <textarea
            placeholder="Subject"
            name="subject"
            className="textareaStyle"
            onChange={(event) => {
              setSubject(event.target.value);
            }}
            value={subject}
          />
        </div>

        <div style={{ paddingTop: "10px" }}>
          <input type="submit" className="inputStyle" />
        </div>
      </form>
    </div>
  );
}
