import React, { useState } from "react";
import {
  companyData,
  services,
  projects,
  team,
  type ProjectItem,
} from "./data";

type CategoryFilter = "Todos" | ProjectItem["category"];

export function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("Todos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories: CategoryFilter[] = [
    "Todos",
    "Automatización",
    "Energía",
    "Infraestructura",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-amber-500 focus:text-slate-950 focus:px-4 focus:py-2 focus:font-semibold focus:rounded"
      >
        Saltar al contenido principal
      </a>

      <div
        role="status"
        className="bg-amber-100 border-b border-amber-300 text-amber-950 text-xs sm:text-sm py-2 px-4 text-center"
      >
        <strong>Modo demostración:</strong> Esta plantilla utiliza datos de
        ejemplo y formularios simulados sin conexión a un servidor real.
      </div>

      <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-lg tracking-tight focus:outline-amber-400"
          >
            <span
              className="inline-block w-3 h-6 bg-amber-500 rounded-xs"
              aria-hidden="true"
            />
            <span>{companyData.name}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="menu-navegacion"
            className="md:hidden p-2 rounded text-slate-200 hover:bg-slate-800 focus:outline-2 focus:outline-amber-400"
          >
            <span className="sr-only">Abrir o cerrar menú de navegación</span>
            {mobileMenuOpen ? "Cerrar ✕" : "Menú ☰"}
          </button>

          <nav
            id="menu-navegacion"
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-6 text-sm font-medium"
          >
            <a
              href="#servicios"
              className="hover:text-amber-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="hover:text-amber-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#equipo"
              className="hover:text-amber-400 transition-colors"
            >
              Equipo
            </a>
            <a
              href="#contacto"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-4 py-2 rounded transition-colors"
            >
              Solicitar cotización
            </a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Navegación móvil"
            className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 border-t border-slate-700"
          >
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-400"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-400"
            >
              Proyectos
            </a>
            <a
              href="#equipo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-amber-400"
            >
              Equipo
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-amber-400 font-semibold"
            >
              Solicitar cotización
            </a>
          </nav>
        )}
      </header>

      <main id="contenido-principal" className="flex-1">
        <section className="bg-slate-900 text-white py-16 sm:py-24 border-b-4 border-amber-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-amber-400 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3">
                Soluciones Industriales Integrales
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {companyData.tagline}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                {companyData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded transition-colors"
                >
                  Ver proyectos ejecutados
                </a>
                <a
                  href="#servicios"
                  className="border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  Explorar catálogo técnico
                </a>
              </div>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-slate-800">
              {companyData.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-slate-400 text-xs sm:text-sm">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl sm:text-4xl font-extrabold text-amber-400 mt-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="servicios"
          className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Capacidades y Servicios
            </h2>
            <p className="text-slate-600 mt-2">
              Ejecución llave en mano bajo estrictos protocolos de calidad y
              seguridad industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs hover:border-amber-500 transition-colors"
              >
                <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded mb-3">
                  {service.spec}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="proyectos"
          className="py-16 sm:py-20 bg-slate-100 border-y border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Proyectos Destacados
                </h2>
                <p className="text-slate-600 mt-1">
                  Casos representativos de infraestructura y modernización.
                </p>
              </div>

              <div
                role="group"
                aria-label="Filtrar proyectos por categoría"
                className="flex flex-wrap gap-2"
              >
                {categories.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={active}
                      className={`px-3.5 py-1.5 rounded text-sm font-medium transition-colors ${
                        active
                          ? "bg-slate-900 text-white"
                          : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col"
                >
                  <div
                    role="img"
                    aria-label={project.imageAlt}
                    className="h-44 bg-slate-800 text-slate-300 flex items-center justify-center p-4 text-center text-xs font-mono"
                  >
                    [{project.imageAlt}]
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="font-semibold text-amber-700">
                          {project.category}
                        </span>
                        <span>
                          {project.location} · {project.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="equipo"
          className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Dirección Técnica
            </h2>
            <p className="text-slate-600 mt-1">
              Especialistas responsables de la supervisión e ingeniería de
              detalle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <article
                key={member.id}
                className="bg-white border border-slate-200 rounded-lg p-6"
              >
                <div
                  aria-hidden="true"
                  className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center mb-4"
                >
                  {member.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600">{member.specialty}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="py-16 sm:py-20 bg-slate-900 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Contacto y Cotizaciones
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              Complete el formulario demostrativo para simular la recepción de
              requerimientos técnicos.
            </p>

            {formSubmitted ? (
              <div
                role="alert"
                className="bg-emerald-950 border border-emerald-500 text-emerald-100 p-6 rounded-lg"
              >
                <h3 className="font-bold text-lg mb-1">
                  Solicitud simulada registrada correctamente
                </h3>
                <p className="text-sm mb-4">
                  Esta es una vista previa sin backend; ningún dato fue enviado
                  ni almacenado externamente.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded text-sm"
                >
                  Enviar otra consulta de prueba
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ej. Carlos Rivera"
                    className="w-full rounded bg-slate-900 border border-slate-600 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-amber-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Empresa o Planta *
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    placeholder="Ej. Manufacturas del Norte S.A."
                    className="w-full rounded bg-slate-900 border border-slate-600 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-amber-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="correo"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Correo electrónico corporativo *
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    placeholder="contacto@empresa.com"
                    className="w-full rounded bg-slate-900 border border-slate-600 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-amber-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="requerimiento"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Descripción técnica del proyecto *
                  </label>
                  <textarea
                    id="requerimiento"
                    name="requerimiento"
                    rows={4}
                    required
                    placeholder="Indique alcance estimado, ubicación de planta y tiempos objetivo..."
                    className="w-full rounded bg-slate-900 border border-slate-600 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-amber-400"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-400">
                    * Formulario demostrativo local (sin procesamiento ni
                    almacenamiento real).
                  </p>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded transition-colors"
                  >
                    Simular envío
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 {companyData.name}. Plantilla demostrativa para Web Templates
            Library.
          </p>
          <p>Contenido ficticio con fines académicos y de servicio social.</p>
        </div>
      </footer>
    </div>
  );
}
