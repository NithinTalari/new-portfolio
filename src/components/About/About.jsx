import { motion } from "framer-motion";
import { aboutData, skillsData } from "../../data/portfolioData";
import "./About.css";

const About = () => {
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
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p className="section-subtitle" variants={fadeUp}>
              {aboutData.subtitle}
            </motion.p>
            <motion.h2 className="about-heading" variants={fadeUp}>
              {aboutData.heading}
            </motion.h2>
            <div className="about-bio">
              {aboutData.bio.map((paragraph, index) => (
                <motion.p key={index} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={index}
                variants={fadeUp}
              >
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
