import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { contactData } from "../../data/portfolioData";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder: Replace with actual form submission logic
    // Options: EmailJS, Formspree, or your own backend API
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <motion.div
            className="contact-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p className="section-subtitle" variants={fadeUp}>
              {contactData.subtitle}
            </motion.p>
            <motion.h2 className="contact-heading" variants={fadeUp}>
              {contactData.heading}
            </motion.h2>
            <motion.p className="contact-description" variants={fadeUp}>
              {contactData.description}
            </motion.p>
            <motion.a
              href={`mailto:${contactData.email}`}
              className="contact-email"
              variants={fadeUp}
            >
              <FiMail /> {contactData.email}
            </motion.a>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            id="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={loading}
              id="contact-submit-btn"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="form-status success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-status error">
                ✕ Something went wrong. Please try again or email directly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
