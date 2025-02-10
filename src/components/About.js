import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        {/* Imagen a un lado */}
        <div className="about-image">
          <img src="/images/perfil.png" alt="Tu Foto" />
        </div>

        {/* Descripción al otro lado */}
        <div className="about-text">
          <h2 className="animated-text">Sobre Mí</h2>
          <p>
          Soy <strong>Sharon López</strong>, Full Stack Developer con experiencia en desarrollo web y Community Management. Me especializo en  tecnologías como JavaScript, TypeScript, NestJS, React, Next.js y Docker.
          Me destaco por mi capacidad de resolver problemas, escribir código limpio y estructurado, y trabajar en equipo para lograr objetivos con eficiencia.
          </p>
          <div className="tech-carousel">
          <div className="tech-track">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
            
            {/* Segunda tanda de imágenes para que el loop sea infinito */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
