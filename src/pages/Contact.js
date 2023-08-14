import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="heading">CONTACT</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <label>Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
        />
        <label>Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Enter message"
          rows={10}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
