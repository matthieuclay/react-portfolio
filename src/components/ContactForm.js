import { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
init(process.env.REACT_APP_EMAILJS_ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_vhum8l9",
        "template_b5o7zlj",
        form.current,
        process.env.REACT_APP_EMAILJS_ID
      )
      .then(
        (result) => {
          form.current.reset();
          formMessage.innerHTML = "<p className='success'>Message sent!</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMessage.innerHTML =
            "<p className='error'>An error has occurred, please try again.</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contact us</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Name</label>
        <input type="text" id="name" name="name" required autoComplete="off" />
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="off"
        />
        <label>Message</label>
        <textarea id="message" name="message" required />
        <input type="submit" value="Send" className="button hover" />
      </form>

      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
