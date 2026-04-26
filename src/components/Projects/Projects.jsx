import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiImage, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { projectsData } from "../../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projectsData.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const project = projectsData[current];

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="section-subtitle">SELECTED WORK</p>
          <h2 className="projects-heading">
            Recent <span>Projects</span>
          </h2>
        </motion.div>

        <div className="projects-slider">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              className="project-card"
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="project-image-wrapper">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="project-image-placeholder">
                    <FiImage style={{ fontSize: "2rem", marginRight: "8px", opacity: 0.4 }} />
                  </div>
                )}
              </div>

              <div className="project-details">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} Live Site`}
                    >
                      <FiExternalLink /> Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="projects-nav">
            <button
              className="projects-nav-btn"
              onClick={goPrev}
              aria-label="Previous project"
              id="projects-prev-btn"
            >
              <FiArrowLeft />
              <span>Prev</span>
            </button>

            <div className="projects-dots">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  className={`projects-dot ${index === current ? "active" : ""}`}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="projects-nav-btn"
              onClick={goNext}
              aria-label="Next project"
              id="projects-next-btn"
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

export default Projects;
