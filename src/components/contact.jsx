import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../stylesheets/homepage.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9cnan4m', 'template_cau5y88', form.current, 'user_8H2okSIPMyJBrfkGMvZv4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} id="contactformbox"onSubmit={sendEmail}>
      <label className="text">Name
      <br/>
      <input type="text" name="user_name" />
      </label>
      <label className="email">Email
      <br/>
      <input type="email" name="user_email" />
      </label>
      <label className="message">Message
      <br/>
      <textarea name="message" />
      </label>
      <label className="submit">Submit
      <br/>
      <input className="submit" type="submit" value="Send" />
      </label>
    </form>
  );
};
