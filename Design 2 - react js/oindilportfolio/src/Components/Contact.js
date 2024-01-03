import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_szp9aoz",
        "template_triafjj",
        form.current,
        "2DXOF4EeoI9NGudMi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact" id="contact">
        <p>
          <span>Contact</span>
        </p>
        <div className="contact-container">
          <div className="contact-label">
            <h3>Contact</h3>
            <div className="mobile-no">
              <p>Mobile No.:</p>
              <a href="tel:+917908775680">+917908775680</a>
            </div>
            <a href="mailto:oindilgolder303@gmail.com">
              oindilgolder303@gmail.com
            </a>
          </div>
          
          <div className="contact-form">
            <h4>Leave a message</h4>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input className="design-input" type="text" name="user_name" />
              <label>Email</label>
              <input className="design-input" type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
