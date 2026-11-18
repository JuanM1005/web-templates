import { useState } from "react";
import { Brand, Header } from "./Header";
import { ProductPreview } from "./ProductPreview";
import { Pricing } from "./Pricing";
import { Contact } from "./Contact";
import { benefits, features, questions } from "./data";

export function App() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <section id="inicio" className="frame hero" aria-labelledby="hero-title">
          <p className="hero-label">Gestión de proyectos <span>Producto ficticio</span></p>
          <div className="hero-layout">
            <h1 id="hero-title">El trabajo,<br /> en <em>orden.</em></h1>
            <div className="hero-intro">
              <p>Planea entregas, asigna tareas y sigue el avance de tu equipo desde un solo espacio.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#producto" className="button button-primary">Ver el tablero</a>
                <a href="#planes" className="button button-outline">Ver planes</a>
              </div>
            </div>
          </div>
        </section>

        <ProductPreview />

        <section className="frame section-space section-split" id="funciones" aria-labelledby="features-title">
          <div>
            <p className="section-label">Funciones</p>
            <h2 className="section-title" id="features-title">Del plan a la entrega.</h2>
          </div>
          <ul className="detail-list">
            {features.map(({ title, description }) => (
              <li key={title}><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ul>
        </section>

        <section className="benefits section-space" id="beneficios" aria-labelledby="benefits-title">
          <div className="frame">
            <p className="section-label">Beneficios</p>
            <h2 className="section-title" id="benefits-title">El equipo sabe qué sigue.</h2>
            <ul className="benefit-list">
              {benefits.map(({ title, description }) => (
                <li key={title}><h3>{title}</h3><p>{description}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <Pricing onSelectPlan={setSelectedPlan} />

        <section className="frame section-space section-split faq" id="preguntas" aria-labelledby="faq-title">
          <h2 className="section-title" id="faq-title">Preguntas frecuentes.</h2>
          <div className="faq-items">
            {questions.map(({ question, answer }) => (
              <details name="alinea-faq" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <Contact plan={selectedPlan} onPlanChange={setSelectedPlan} />
      </main>
      <footer className="frame footer">
        <Brand />
        <p>Plantilla de demostración para un producto ficticio.</p>
        <a href="#inicio">Volver al inicio</a>
      </footer>
    </>
  );
}
