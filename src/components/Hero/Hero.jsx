import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {personalInfo.role}
          </motion.p>

          <motion.h1
            className="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {personalInfo.headline}{" "}
            <span className="accent-text">{personalInfo.headlineAccent}</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a href="#projects" className="btn btn-primary" id="hero-view-work-btn">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline" id="hero-contact-btn">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-container">
            {personalInfo.profileImage ? (
              <img
                src={personalInfo.profileImage}
                alt="Developer"
                loading="eager"
              />
            ) : (
              <div className="hero-image-placeholder">
                <FiUser />
                {/* Replace profileImage in portfolioData.js with your image path */}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
