import React from "react";

function Projects() {
  const projects = [
    { name: "Proyecto 1", link: "#", image: "url_de_imagen_1" },
    { name: "Proyecto 2", link: "#", image: "url_de_imagen_2" },
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "20px" }}>
            <img src={project.image} alt={project.name} style={{ width: "100%" }} />
            <h3>{project.name}</h3>
            <a href={project.link}>Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
