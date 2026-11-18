import { useState, type FormEvent } from "react";
import { plans } from "./data";

export function Contact({ plan, onPlanChange }: { plan: string; onPlanChange: (plan: string) => void }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    onPlanChange("");
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="contact section-space" aria-labelledby="contact-title">
      <div className="frame contact-layout">
        <div>
          <h2 className="section-title" id="contact-title">Hablemos de tu equipo.</h2>
          <p id="contact-note">Prueba el formulario con datos ficticios. El envío se simula en esta página.</p>
        </div>
        <form className="contact-form" aria-describedby="contact-note" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
          <label>Nombre <input name="name" autoComplete="off" required maxLength={100} /></label>
          <label>Correo electrónico <input name="email" type="email" autoComplete="off" required maxLength={254} /></label>
          <label>Plan de interés
            <select name="plan" value={plan} onChange={(event) => onPlanChange(event.currentTarget.value)}>
              <option value="">Sin preferencia</option>
              {plans.map(({ name }) => <option key={name}>{name}</option>)}
            </select>
          </label>
          <label>Mensaje <textarea name="message" rows={4} required maxLength={1500} /></label>
          <div className="form-actions">
            <button className="button button-primary" type="submit">Simular envío</button>
            <p role="status">{submitted ? "Envío simulado. No se enviaron tus datos." : ""}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
