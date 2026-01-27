import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "" // honeypot field
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS with your public key from .env
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  const handleChange = (e) => {
    setIsSubmitted(false);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🛑 Honeypot check to block bots
    if (formData.company) return;

    setIsSending(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          company: ""
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Have questions or feedback? Fill out the form below!
      </p>

      {isSubmitted && (
        <p className="success-message">
          Thanks for reaching out! I’ll get back to you soon 😊
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Honeypot field (hidden from users) */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <label className="contact-label">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>

        <label className="contact-label">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </label>

        <label className="contact-label">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows="5"
          />
        </label>

        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
