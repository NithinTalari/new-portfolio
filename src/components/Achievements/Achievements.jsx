import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAward,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";
import { achievementsData } from "../../data/portfolioData";
import "./Achievements.css";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const items =
    activeTab === "certificates"
      ? achievementsData.certificates
      : achievementsData.workshops;

  const switchTab = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setCurrent(0);
      setDirection(1);
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const item = items[current];

  return (
    <section className="achievements-section section" id="achievements">
      <div className="container">
        <motion.div
          className="achievements-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="section-subtitle">ACHIEVEMENTS</p>
          <h2 className="achievements-heading">
            Certificates & <span>Workshops</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className="achievements-tabs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <button
            className={`achievements-tab ${
              activeTab === "certificates" ? "active" : ""
            }`}
            onClick={() => switchTab("certificates")}
            id="achievements-tab-certificates"
          >
            <FiAward />
            <span>Certificates</span>
          </button>
          <button
            className={`achievements-tab ${
              activeTab === "workshops" ? "active" : ""
            }`}
            onClick={() => switchTab("workshops")}
            id="achievements-tab-workshops"
          >
            <FiUsers />
            <span>Workshops</span>
          </button>
        </motion.div>

        {/* Card Slider */}
        <div className="achievements-slider">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              className="achievement-card"
              key={`${activeTab}-${current}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Icon Side */}
              <div className="achievement-icon-wrapper">
                <a
                  className="achievement-preview"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title}`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="achievement-preview-image"
                    />
                  ) : (
                    <div className="achievement-icon-bg">
                      {activeTab === "certificates" ? (
                        <FiAward className="achievement-icon" />
                      ) : (
                        <FiUsers className="achievement-icon" />
                      )}
                    </div>
                  )}
                </a>
                <div className="achievement-meta">
                  <FiCalendar className="achievement-meta-icon" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Details Side */}
              <div className="achievement-details">
                <div className="achievement-title-row">
                  <h3 className="achievement-title">{item.title}</h3>
                  <span className="achievement-year">{item.date}</span>
                </div>

                <p className="achievement-issuer">
                  {activeTab === "certificates"
                    ? `Issued by ${item.issuer}`
                    : `Organized by ${item.organizer}`}
                </p>

                <p className="achievement-description">{item.description}</p>

                <div className="achievement-tags">
                  {item.tags.map((tag, i) => (
                    <span className="achievement-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

                {item.credentialUrl && (
                  <div className="achievement-links">
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                      aria-label={`${item.title} Credential`}
                    >
                      <FiExternalLink /> View Credential
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="achievements-nav">
            <button
              className="achievements-nav-btn"
              onClick={goPrev}
              aria-label="Previous achievement"
              id="achievements-prev-btn"
            >
              <FiArrowLeft />
              <span>Prev</span>
            </button>

            <div className="achievements-dots">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`achievements-dot ${
                    index === current ? "active" : ""
                  }`}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  aria-label={`Go to ${activeTab === "certificates" ? "certificate" : "workshop"} ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="achievements-nav-btn"
              onClick={goNext}
              aria-label="Next achievement"
              id="achievements-next-btn"
            >
              <span>Next</span>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
