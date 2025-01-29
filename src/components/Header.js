import React from "react";
import "../styles/header.css"; // Asegúrate de importar el archivo CSS

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <h1 className="logo">Mi Portafolio</h1>
        
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
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;

