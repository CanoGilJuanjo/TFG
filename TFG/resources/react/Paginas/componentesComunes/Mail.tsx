import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ya1sj1', 'template_42m8ppc', form.current, {
        publicKey: 'oCt0CQBlW7L6A3Vh4',
      }).then(
        (repuesta) => {
          console.log(repuesta);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};