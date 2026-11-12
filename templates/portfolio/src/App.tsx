import React, { useState } from "react";
import {
  profileData,
  portfolioProjects,
  experienceList,
  type PortfolioProject,
} from "./data";

type AreaFilter = "Todos" | PortfolioProject["area"];

export function App() {
  const [selectedArea, setSelectedArea] = useState<AreaFilter>("Todos");
  const [messageSent, setMessageSent] = useState(false);

  const areas: AreaFilter[] = [
    "Todos",
    "Frontend",
    "Sistemas de Diseño",
    "Herramientas",
  ];

  const filteredProjects =
    selectedArea === "Todos"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.area === selectedArea);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <a
        href="#contenido-portafolio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-lime-400 focus:text-zinc-950 focus:px-4 focus:py-2 focus:rounded font-bold"
      >
        Saltar al contenido principal
      </a>

      <div
        role="status"
        className="bg-zinc-900 border-b border-zinc-800 text-zinc-300 text-xs sm:text-sm py-2 px-4 text-center"
      >
        <strong>Modo demostración:</strong> Portafolio con trayectoria ficticia
        y formulario de contacto simulado localmente.
      </div>

      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-bold text-lg tracking-tight text-white flex items-center gap-2"
          >
            <span
              className="w-2.5 h-2.5 rounded-full bg-lime-400"
              aria-hidden="true"
            />
            <span>{profileData.name}</span>
          </a>

          <nav
            aria-label="Navegación del portafolio"
            className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-zinc-300"
          >
            <a
              href="#proyectos"
              className="hover:text-lime-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#experiencia"
              className="hover:text-lime-400 transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#habilidades"
              className="hover:text-lime-400 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold px-3.5 py-1.5 rounded-md transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main
        id="contenido-portafolio"
        className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-20"
      >
        <section aria-label="Presentación personal">
          <p className="text-lime-400 font-mono text-xs sm:text-sm mb-3">
            {profileData.location}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight mb-5">
            {profileData.role}
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            {profileData.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Explorar casos de estudio
            </a>
            <a
              href="#contacto"
              className="border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Enviar mensaje demostrativo
            </a>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Proyectos Seleccionados
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Implementaciones enfocadas en arquitectura, rendimiento y
                accesibilidad.
              </p>
            </div>

            <div
              role="group"
              aria-label="Filtrar proyectos por área"
              className="flex flex-wrap gap-2"
            >
              {areas.map((area) => {
                const active = selectedArea === area;
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    aria-pressed={active}
                    className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-colors ${
                      active
                        ? "bg-lime-400 text-zinc-950"
                        : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    {area}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-lime-400/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                    <span className="text-lime-400">{project.area}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <p className="text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 p-3 rounded-lg mb-4">
                    <strong className="text-zinc-200">Resultado:</strong>{" "}
                    {project.outcome}
                  </p>
                </div>

                <ul
                  aria-label="Tecnologías utilizadas"
                  className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800"
                >
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono bg-zinc-800 text-zinc-200 px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Experiencia Profesional
          </h2>
          <div className="space-y-6">
            {experienceList.map((item) => (
              <article
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h3 className="text-lg font-bold text-white">
                    {item.role} ·{" "}
                    <span className="text-lime-400">{item.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-300">
                  {item.achievements.map((ach) => (
                    <li key={ach}>{ach}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Habilidades y Herramientas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {profileData.skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
              >
                <h3 className="text-sm font-mono uppercase tracking-wider text-lime-400 mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-200">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-lime-400"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="scroll-mt-20 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Contacto Directo
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            Formulario demostrativo para simular propuestas de colaboración o
            entrevistas técnicas.
          </p>

          {messageSent ? (
            <div
              role="alert"
              className="bg-zinc-950 border border-lime-400 p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold text-lime-400 mb-1">
                Mensaje simulado correctamente
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                Esta plantilla no utiliza servidor ni envía correos reales; los
                datos permanecen únicamente en tu sesión actual.
              </p>
              <button
                type="button"
                onClick={() => setMessageSent(false)}
                className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold px-4 py-2 rounded-md text-xs"
              >
                Redactar otro mensaje de prueba
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <label
                  htmlFor="remitente"
                  className="block text-xs font-mono uppercase text-zinc-300 mb-1"
                >
                  Nombre *
                </label>
                <input
                  id="remitente"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-lime-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email-remitente"
                  className="block text-xs font-mono uppercase text-zinc-300 mb-1"
                >
                  Correo electrónico *
                </label>
                <input
                  id="email-remitente"
                  type="email"
                  required
                  placeholder="nombre@dominio.com"
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-lime-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="mensaje-portafolio"
                  className="block text-xs font-mono uppercase text-zinc-300 mb-1"
                >
                  Mensaje o propuesta *
                </label>
                <textarea
                  id="mensaje-portafolio"
                  rows={4}
                  required
                  placeholder="Describe brevemente el proyecto o vacante..."
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-lime-400"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-zinc-400">
                  * Simulación en el cliente sin envío externo.
                </p>
                <button
                  type="submit"
                  className="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Simular envío de mensaje
                </button>
              </div>
            </form>
          )}
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
        <p>
          © 2026 {profileData.name} · Plantilla demostrativa para Web Templates
          Library.
        </p>
      </footer>
    </div>
  );
}
