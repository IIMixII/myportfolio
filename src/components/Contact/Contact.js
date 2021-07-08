import { useState } from "react";

//     Components
import Title from "../Title/Title";

//     Style
import "./Contact.css";

//     Component
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Submit");
  };

  return (
    <div>
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
