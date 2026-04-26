import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { personalInfo } from "../../data/portfolioData";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="navbar-inner">
        <a
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {personalInfo.logo}
        </a>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a className="navbar-link" onClick={() => handleNavClick("about")}>
            About
          </a>
          <a className="navbar-link" onClick={() => handleNavClick("education")}>
            Education
          </a>
          <a className="navbar-link" onClick={() => handleNavClick("experience")}>
            Experience
          </a>
          <a className="navbar-link" onClick={() => handleNavClick("projects")}>
            Projects
          </a>
          <a className="navbar-link" onClick={() => handleNavClick("achievements")}>
            Achievements
          </a>
          <a className="navbar-link" onClick={() => handleNavClick("photography")}>
            Interests
          </a>
          <a className="navbar-link" onClick={() => handleNavClick("contact")}>
            Contact
          </a>
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`mobile-overlay ${menuOpen ? "visible" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
