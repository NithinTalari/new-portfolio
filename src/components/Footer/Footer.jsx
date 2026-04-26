import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-text">
            © {currentYear} <span>{personalInfo.logo}</span>. All rights reserved.
          </p>

          <div className="footer-socials">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
                id="footer-github"
              >
                <FiGithub />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
                id="footer-linkedin"
              >
                <FiLinkedin />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
                id="footer-twitter"
              >
                <FiTwitter />
              </a>
            )}
            {socialLinks.email && (
              <a
                href={socialLinks.email}
                className="footer-social-link"
                aria-label="Email"
                id="footer-email"
              >
                <FiMail />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
