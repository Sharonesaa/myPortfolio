import React from "react";
import "../styles/header.css"; // Asegúrate de importar el archivo CSS

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        {/* Enlaces de navegación */}
        <nav>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        
        {/* Iconos de redes sociales */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="Linkedin" className="icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className="icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

