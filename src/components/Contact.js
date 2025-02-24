import React from "react";
import "../styles/contact.css";

function Contact() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("oriannaesaa07@gmail.com")
      .then(() => alert("Correo copiado al portapapeles 📋"))
      .catch(err => console.error("Error al copiar: ", err));
  };

  return (
      <footer id="footer">
        <div className="footer-logo">
          <img src="/images/SharonLopez.png" alt="Logo" />
        </div>
        <div className="footer-text">
          <a href="https://github.com/sharonesaa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sharonlopez07" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); copyToClipboard(); }} className="copy-email">
            Correo
          </a>

        </div>
      </footer>
  );
}

export default Contact;
