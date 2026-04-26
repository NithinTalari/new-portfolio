import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiCode,
  FiGitPullRequest,
  FiLayers,
} from "react-icons/fi";
import { experienceData } from "../../data/portfolioData";
import "./Experience.css";

const Experience = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <div className="experience-layout">
          <motion.div
            className="experience-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p className="section-subtitle" variants={fadeUp}>
              {experienceData.subtitle}
            </motion.p>
            <motion.h2 className="experience-heading" variants={fadeUp}>
              {experienceData.heading}
            </motion.h2>
            <motion.p className="experience-intro" variants={fadeUp}>
              {experienceData.intro}
            </motion.p>
          </motion.div>

          <motion.div
            className="experience-stack"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {experienceData.items.map((item, index) => (
              <motion.article className="experience-card" key={index} variants={fadeUp}>
                <div className="experience-card-shell">
                  <div className="experience-card-top">
                    <div className="experience-brand">
                      <div className="experience-brand-mark" aria-hidden="true">
                        <FiBriefcase />
                      </div>
                      <div className="experience-brand-copy">
                        <span className="experience-brand-name">NRKS</span>
                        <span className="experience-brand-subtitle">Skill Development Pvt. Ltd.</span>
                      </div>
                    </div>

                    <div className="experience-chip">
                      <FiArrowUpRight />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="experience-panel-grid">
                    <div className="experience-main">
                      <div className="experience-title-row">
                        <div>
                          <h3 className="experience-role">{item.role}</h3>
                          <p className="experience-company">{item.company}</p>
                        </div>
                        <div className="experience-date-badge">
                          <FiCalendar />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <div className="experience-meta">
                        <span>
                          <FiMapPin />
                          {item.location}
                        </span>
                        <span>
                          <FiBriefcase />
                          Internship
                        </span>
                      </div>

                      <p className="experience-summary">{item.summary}</p>

                      <div className="experience-highlights">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <div className="experience-highlight" key={highlightIndex}>
                            <FiCheckCircle />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="experience-tags">
                        {item.tags.map((tag, tagIndex) => (
                          <span className="experience-tag" key={tagIndex}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <aside className="experience-side-panel">
                      <p className="experience-side-label">Focus Areas</p>
                      <div className="experience-focus-list">
                        <div className="experience-focus-item">
                          <FiLayers />
                          <span>Reusable UI architecture</span>
                        </div>
                        <div className="experience-focus-item">
                          <FiCode />
                          <span>React.js component development</span>
                        </div>
                        <div className="experience-focus-item">
                          <FiGitPullRequest />
                          <span>Agile collaboration and code reviews</span>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
