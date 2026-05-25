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
        <button
          type="button"
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {personalInfo.logo}
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("about")}>
            About
          </button>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("education")}>
            Education
          </button>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("experience")}>
            Experience
          </button>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("projects")}>
            Projects
          </button>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("achievements")}>
            Achievements
          </button>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("photography")}>
            Interests
          </button>
          <button type="button" className="navbar-link" onClick={() => handleNavClick("contact")}>
            Contact
          </button>
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
