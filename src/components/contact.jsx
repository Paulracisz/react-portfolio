// libraries
import React, { useRef } from "react";
import emailjs from "emailjs-com";

// stylesheets
import "../stylesheets/homepage.css";

export const ContactUs = () => {
  const form = useRef();
  const formUserName = document.getElementById("usernameinput");
  const formEmail = document.getElementById("emailinput");
  const formText = document.getElementById("textinput");
  const sendEmail = (e) => {
    e.preventDefault();
    formUserName.value = "";
    formEmail.value = "";
    formText.value = "";
    emailjs
      .sendForm(
        "service_9cnan4m",
        "template_cau5y88",
        form.current,
        "user_8H2okSIPMyJBrfkGMvZv4"
      )
      .then(
        (result) => {
          window.alert("Message Sent Successfully.");
          console.log(result.text);
        },
        (error) => {
          window.alert(
            "An error has occured, please try again later." + error.text
          );
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} id="contactformbox" onSubmit={sendEmail}>
      <label className="text">
        Name
        <br />
        <input type="text" id="usernameinput" name="user_name" />
      </label>
      <label className="email">
        Email
        <br />
        <input type="email" id="emailinput" name="user_email" />
      </label>
      <label className="message">
        Message
        <br />
        <textarea id="textinput" name="message" />
      </label>
      <label className="submit">
        Submit
        <br />
        <input className="submit" type="submit" value="Send" />
      </label>
    </form>
  );
};

// hello
