import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import send from "../assets/send.svg";
import Success from "./Success";
import Error from "./Error";

const Contact = (prop) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_xjeefuk",
        "template_gp8g6vt",
        {
          from_name: form.name,
          to_name: prop.owner_name,
          from_email: form.email,
          to_email: prop.owner_email,
          message: form.message,
        },
        "6bwc7JEUTgSgUzO0d"
      )
      .then(
        () => {
          setLoading(false);
          <Success msg="Thank you. I will get back to you as soon as possible." />;

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert(error);
          <Error msg="Ahh, something went wrong. Please try again." />;
        }
      );
  };

  return (
    <div className="send-button-frame-wrapper mt-5 pt-3">
      <div className="send-button-frame">
        <p className="sectionSubText">Get in touch.</p>
        <b className="contact">Contact</b>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="d-flex flex-column"
        >
          <label className="your-name-input">
            <span className="name">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="your-name-wrapper your-name"
            />
          </label>
          <label className="your-name-input">
            <span className="name">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="your-name-wrapper your-name"
            />
          </label>
          <label className="your-name-input">
            <span className="name">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="your-name-wrapper your-name"
            />
          </label>

          <div className="frame7">
            <button type="submit" className="send-button">
              <div className="frame-parent">
                <img className="frame-icon1" alt="" src={send} />
                <div className="send">{loading ? "Sending..." : "Send"}</div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
