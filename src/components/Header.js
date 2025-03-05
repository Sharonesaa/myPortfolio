import React, { useState } from "react";
import "../styles/header.css"; // Asegúrate de importar el archivo CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        {/* Botón de menú en móviles */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Enlaces de navegación */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
        </nav>

        {/* Iconos de redes sociales */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sharonlopez07" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="Linkedin" className="icon" />
          </a>
          <a href="https://github.com/sharonesaa" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className="icon" />
          </a>
          <a href="https://wa.me/5491170158212" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

