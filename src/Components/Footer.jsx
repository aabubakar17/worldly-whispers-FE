import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a
            title="Linkedin Profile"
            href="https://www.linkedin.com/in/abubakar-abubakar-46a9141a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" />
          </a>
          <a
            title="Github Profile"
            href="https://github.com/aabubakar17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
        </div>
        <p className="footer-text">Connect with me on LinkedIn and GitHub</p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Abubakar Abdihakim Abubakar All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
