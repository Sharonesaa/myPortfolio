import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu email" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
