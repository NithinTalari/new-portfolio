import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { contactData } from "../../data/portfolioData";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_eeub5kr";
const EMAILJS_TEMPLATE_ID = "template_2ergdoh";
const EMAILJS_PUBLIC_KEY = "tIW1EqLw-461GOC7u";

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
    setStatus(null);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Missing EmailJS configuration.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          message: formData.message.trim(),
          to_email: contactData.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.message === "Missing EmailJS configuration."
            ? "Email service is not configured yet. Please check the EmailJS setup."
            : "Something went wrong. Please try again or email me directly.",
      });
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
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="talarinithin12@gmail.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
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
                rows="6"
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

            {status?.type === "success" && (
              <div className="form-status success">{status.message}</div>
            )}
            {status?.type === "error" && (
              <div className="form-status error">{status.message}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
