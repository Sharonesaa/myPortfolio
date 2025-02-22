import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
      <footer className="footer">
        <div className="footer-logo">
          <img src="/images/SharonLopez.png" alt="Logo" />
        </div>
        <div className="footer-text">
          <a href="https://github.com/sharonesaa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sharonesaa" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sharon@example.com">Correo</a>
        </div>
      </footer>
  );
}

export default Contact;
