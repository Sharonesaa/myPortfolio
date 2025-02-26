import React from "react";
import "../styles/projects.css"

function Projects() {
  const projects = [
    { 
      name: "VotingSystem", 
      link: "https://proyecto-modulo5.vercel.app/", 
      image: "/images/votingsystem.png",
      description: "Esta plataforma facilita la gestión integral de campañas electorales, permitiendo a los usuarios registrarse, postularse, crear y administrar campañas, y participar en votaciones con autenticación segura mediante Google. Mi contribución incluyó el diseño y desarrollo de funcionalidades clave, asegurando una experiencia eficiente y escalable. Utilizamos tecnologías como Next.js, React, Node.js, NestJS y PostgreSQL, combinadas con Tailwind CSS y SweetAlert2, para ofrecer una solución robusta y segura para la gestión de procesos electorales."
    },
    { 
      name: "FisioFulness", 
      link: "https://fisiomfulness.vercel.app/", 
      image: "/images/fisiofulness.png",
      description:"Plataforma diseñada para optimizar la gestión de citas médicas, permitiendo a pacientes y profesionales coordinar sus horarios de manera eficiente. Como parte del equipo de desarrollo, me enfoqué en la implementación del módulo de calendario, asegurando una sincronización fluida de las citas con funciones como asignación de horarios, reprogramación y notificaciones. Además, trabajé en la autenticación segura mediante el manejo de cookies y tokens (access y refresh tokens), mejorando la seguridad y experiencia del usuario al mantener sesiones activas de forma eficiente."
    },
  ];

  return (
    <section id="projects">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-overlay">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">Ver Proyecto</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;



