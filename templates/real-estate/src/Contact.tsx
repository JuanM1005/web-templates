import { useState, type FormEvent } from "react";
import { properties } from "./data";

export function Contact({ interest }: { interest: string }) {
  const [submitted, setSubmitted] = useState(false);
  const initialProperty = properties.some(({ id }) => id === interest) ? interest : "";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <section className="inner-page contact-layout" aria-labelledby="contact-title">
      <div className="page-heading">
        <p className="eyebrow">Contacto de demostración</p>
        <h1 id="contact-title">Consulta por una propiedad</h1>
        <p id="contact-notice">Usa datos ficticios para probar el formulario. El envío se simula en este navegador.</p>
      </div>
      <form className="contact-form" aria-describedby="contact-notice" onSubmit={submit} onChange={() => setSubmitted(false)}>
        <label>Nombre
          <input name="name" autoComplete="off" required maxLength={100} />
        </label>
        <label>Correo electrónico
          <input name="email" type="email" autoComplete="off" required maxLength={254} />
        </label>
        <label>Propiedad de interés
          <select name="property" defaultValue={initialProperty}>
            <option value="">Consulta general</option>
            {properties.map(({ id, name }) => <option value={id} key={id}>{name}</option>)}
          </select>
        </label>
        <label>Mensaje
          <textarea rows={4} name="message" required maxLength={1500} />
        </label>
        <button className="button button-primary" type="submit">Simular envío</button>
        <p className="form-status" role="status">{submitted ? "Consulta simulada. No se enviaron tus datos." : ""}</p>
      </form>
    </section>
  );
}
