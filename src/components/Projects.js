import React from "react";
import "../styles/projects.css"

function Projects() {
  const projects = [
    { 
      name: "VotingSystem", 
      link: "https://proyecto-modulo5.vercel.app/", 
      image: "/images/votingsystem.png",
      description: "La plataforma de gestión de campañas electorales permite a los usuarios organizar y administrar procesos electorales de manera eficiente. Los usuarios pueden registrarse, crear y gestionar campañas, postularse como candidatos, realizar votaciones e integrar autenticación con Google."
    },
    { 
      name: "FisioFulness", 
      link: "https://fisiomfulness.vercel.app/", 
      image: "/images/fisiofulness.png",
      description: "FisioFulness es una plataforma diseñada para optimizar la gestión de citas médicas entre pacientes y profesionales de la salud. Ofrece una interfaz intuitiva que facilita a los usuarios agendar, gestionar y visualizar sus citas de manera rápida y eficiente. La plataforma está orientada a brindar una experiencia fluida tanto para pacientes como para profesionales, promoviendo una atención personalizada y oportuna."
    },
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
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



