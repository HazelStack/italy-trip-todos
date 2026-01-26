import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="contact-page"
      style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}
    >
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Fill out the form below!</p>

      {isSubmitted && (
        <p style={{ color: "green", marginBottom: "1rem" }}>
          Thanks for reaching out! I’ll get back to you soon 😊
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows="5"
          />
        </label>

        <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
