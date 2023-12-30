export default function Contact() {
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
            <a href="mailto:oindilgolder303@gmail.com">oindilgolder303@gmail.com</a>
          </div>
          <div className="contact-form">
            <h4>Leave a message</h4>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="address">E-mail</label>
              <input type="email" id="address" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30"></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
