import { motion } from "framer-motion";
import { FiAperture, FiCamera } from "react-icons/fi";
import { photographyData } from "../../data/portfolioData";
import "./Photography.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const photoItem = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Photography = () => {
  return (
    <section className="photography-section section" id="photography">
      <div className="container">
        <motion.div
          className="photography-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="section-subtitle">
            <FiCamera className="subtitle-icon" />
            {photographyData.subtitle}
          </p>
          <h2 className="photography-heading">{photographyData.heading}</h2>
          <p className="photography-description">
            {photographyData.description}
          </p>
          <p className="photography-note">{photographyData.note}</p>
        </motion.div>

        <motion.div
          className="photography-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {photographyData.photos.map((photo) => (
            <motion.article
              className="photography-card"
              key={photo.id}
              variants={photoItem}
            >
              <div className="photography-image-wrapper">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="photography-image"
                  loading="lazy"
                />
              </div>
              <div className="photography-card-body">
                <div className="photography-card-meta">
                  <span className="photography-category-badge">
                    {photo.category}
                  </span>
                  <span className="photography-camera-info">
                    <FiAperture />
                    {photo.settings}
                  </span>
                </div>
                <h3 className="photography-title">{photo.title}</h3>
                <p className="photography-card-description">{photo.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Photography;
