import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to connect with me on LinkedIn and GitHub:</p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/abubakar-abubakar-46a9141a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/aabubakar17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
