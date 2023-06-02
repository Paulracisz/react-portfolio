import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../stylesheets/homepage.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let formUserName = document.getElementById("usernameinput").value;
    let formEmail = document.getElementById("emailinput").value;
    let formText = document.getElementById("textinput").value;

    const templateParams = {
      from_name: formUserName,
      from_email: formEmail,
      message: formText,
    };

    emailjs
      .send(
        "service_9cnan4m",
        "template_cau5y88",
        templateParams,
        "user_8H2okSIPMyJBrfkGMvZv4"
      )
      .then(
        (result) => {
          window.alert("Message Sent Successfully.");
          console.log(result.text);
        },
        (error) => {
          window.alert(
            "An error has occurred, please try again later. " + error.text
          );
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <form ref={form} id="contactformbox" onSubmit={sendEmail}>
      <label className="text">
        Name
        <br />
        <input type="text" id="usernameinput" name="from_name" />
      </label>
      <label className="email">
        Email
        <br />
        <input type="email" id="emailinput" name="from_email" />
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
