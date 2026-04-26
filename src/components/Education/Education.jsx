import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { educationData } from "../../data/portfolioData";
import "./Education.css";

const Education = () => {
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
    <section className="education-section section" id="education">
      <div className="container">
        <div className="education-layout">
          <motion.div
            className="education-stack"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {educationData.items.map((item, index) => (
              <motion.article className="education-card" key={index} variants={fadeUp}>
                <div className="education-card-grid">
                  <div className="education-rail">
                    <div className="education-badge">
                      <FiBookOpen />
                    </div>
                    <div className="education-date-badge">
                      <FiCalendar />
                      <span>{item.date}</span>
                    </div>
                    <div className="education-cgpa-panel">
                      <span className="education-cgpa-label">CGPA</span>
                      <strong className="education-cgpa-value">{item.cgpa}</strong>
                    </div>
                  </div>

                  <div className="education-main">
                    <div className="education-campus-chip">
                      <FiMapPin />
                      <span>{item.campus}</span>
                    </div>

                    <h3 className="education-degree">{item.degree}</h3>
                    <p className="education-institution">{item.institution}</p>

                    <div className="education-meta">
                      <span>
                        <FiMapPin />
                        Chittoor, Andhra Pradesh
                      </span>
                      <span>
                        <FiAward />
                        CGPA: {item.cgpa}
                      </span>
                    </div>

                    <p className="education-description">{item.description}</p>

                    <div className="education-tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span className="education-tag" key={tagIndex}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="education-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p className="section-subtitle" variants={fadeUp}>
              {educationData.subtitle}
            </motion.p>
            <motion.h2 className="education-heading" variants={fadeUp}>
              {educationData.heading}
            </motion.h2>
            <motion.p className="education-intro" variants={fadeUp}>
              {educationData.intro}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
