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
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input id="submit" type="submit" value="Send" />
    </form>
  );
};
