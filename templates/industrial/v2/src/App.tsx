import { useState, type FormEvent } from "react";
import {
  capabilities,
  faqs,
  fictionalPartners,
  metrics,
  projects,
  services,
  siteConfig,
  solutionFamilies,
  type ProjectCategory,
} from "./data";

type ProjectFilter = "Todos" | ProjectCategory;

const filters: ProjectFilter[] = ["Todos", "Manufactura", "Energía", "Infraestructura"];

export function App() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("Todos");
  const [sent, setSent] = useState(false);
  const visibleProjects = selectedFilter === "Todos"
    ? projects
    : projects.filter((project) => project.category === selectedFilter);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 bg-orange-500 px-4 py-2 font-bold text-white">
        Saltar al contenido
      </a>
      <p role="status" className="bg-slate-950 px-4 py-2 text-center text-xs font-medium text-stone-200">
        {siteConfig.disclaimer}
      </p>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-stone-100/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-5 px-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-2 font-black tracking-tight text-slate-950">
            <span aria-hidden="true" className="grid h-7 w-7 place-items-center bg-orange-600 text-sm text-white">{siteConfig.initial}</span>
            {siteConfig.brand} <span className="font-medium text-slate-500">{siteConfig.descriptor}</span>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-5 text-sm font-semibold lg:flex">
            <a className="hover:text-orange-700" href="#soluciones">Soluciones</a>
            <a className="hover:text-orange-700" href="#servicios">Servicios</a>
            <a className="hover:text-orange-700" href="#proyectos">Proyectos</a>
            <a className="hover:text-orange-700" href="#nosotros">Nosotros</a>
          </nav>
          <a href="#contacto" className="bg-slate-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-orange-700 sm:px-4 sm:text-sm">
            Hablemos de su proyecto <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="grid-pattern bg-slate-900 text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-18 sm:px-6 lg:grid-cols-12 lg:items-end lg:py-28">
            <div className="lg:col-span-8">
              <p className="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-orange-400"><span className="h-px w-8 bg-orange-400" /> {siteConfig.eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-balance sm:text-6xl lg:text-7xl">
                {siteConfig.hero}
              </h1>
            </div>
            <div className="border-l border-slate-600 pl-5 lg:col-span-4">
              <p className="mb-6 leading-relaxed text-slate-300">{siteConfig.summary}</p>
              <a href="#servicios" className="inline-flex items-center gap-3 border-b-2 border-orange-500 pb-2 text-sm font-bold hover:text-orange-300">Conocer nuestras capacidades <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section id="soluciones" className="border-y border-slate-300 bg-white py-18 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-700">MAPA DE SOLUCIONES</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Una estructura lista para explicar una oferta amplia.</h2>
              </div>
              <p className="max-w-lg text-slate-600">Las categorías son ficticias y muestran cómo organizar servicios, equipos y especialidades sin convertir la navegación en un menú difícil de consultar.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {solutionFamilies.map((solution) => (
                <article key={solution.code} className="border border-slate-300 bg-stone-100 p-6 transition hover:border-orange-600 sm:p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-orange-700">{solution.code}</span>
                    <span aria-hidden="true" className="text-xl">↗</span>
                  </div>
                  <h3 className="text-2xl font-black">{solution.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{solution.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Alcance de ${solution.title}`}>
                    {solution.scope.map((item) => <li key={item} className="border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold">{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Indicadores demostrativos" className="border-b border-slate-300 bg-stone-200">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-300 px-4 sm:grid-cols-4 sm:px-6">
            {metrics.map(([value, label]) => <div key={label} className="py-6 text-center sm:py-8"><strong className="block text-2xl font-black sm:text-3xl">{value}</strong><span className="text-xs font-semibold text-slate-600">{label}</span></div>)}
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:py-24">
          <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:items-end">
            <div><p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-700">LO QUE HACEMOS</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl">De la decisión técnica a la operación.</h2></div>
            <p className="max-w-lg text-slate-600">Acompañamos cada fase con una visión concreta: resolver lo necesario, documentarlo bien y dejar un proceso listo para operar.</p>
          </div>
          <div className="grid gap-px bg-slate-300 md:grid-cols-3">
            {services.map((service) => <article key={service.number} className="bg-stone-100 p-6 sm:p-8"><p className="mb-12 text-sm font-bold text-orange-700">{service.number}</p><h3 className="mb-3 text-xl font-black">{service.title}</h3><p className="text-sm leading-relaxed text-slate-600">{service.description}</p></article>)}
          </div>
        </section>

        <section id="proyectos" className="bg-slate-950 py-18 text-white lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-400">TRABAJO RECIENTE</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl">Proyectos con contexto.</h2></div><div role="group" aria-label="Filtrar proyectos" className="flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} type="button" aria-pressed={selectedFilter === filter} onClick={() => setSelectedFilter(filter)} className={`border px-3 py-1.5 text-xs font-bold transition ${selectedFilter === filter ? "border-orange-500 bg-orange-600 text-white" : "border-slate-600 text-slate-300 hover:border-slate-300"}`}>{filter}</button>)}</div></div>
            <div className="grid gap-4 lg:grid-cols-3">{visibleProjects.map((project, index) => <article key={project.id} className="group min-h-80 border border-slate-700 bg-slate-900 p-6 transition hover:border-orange-500 sm:p-7"><div className="mb-16 flex justify-between text-xs font-bold"><span className="text-orange-400">{project.category}</span><span className="text-slate-400">0{index + 1}</span></div><p className="mb-2 text-xs text-slate-400">{project.location}</p><h3 className="mb-4 text-2xl font-black">{project.title}</h3><p className="mb-6 text-sm leading-relaxed text-slate-300">{project.description}</p><p className="border-t border-slate-700 pt-4 text-xs font-medium text-slate-400">{project.tag}</p></article>)}</div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto grid max-w-6xl gap-12 px-4 py-18 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div><p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-700">NUESTRO MÉTODO</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl">{siteConfig.methodTitle}</h2><p className="mt-6 max-w-xl leading-relaxed text-slate-600">{siteConfig.methodDescription}</p></div>
          <ul className="border-t border-slate-300">{capabilities.map((capability, index) => <li key={capability} className="flex items-center gap-5 border-b border-slate-300 py-5"><span className="font-mono text-sm text-orange-700">0{index + 1}</span><span className="font-bold">{capability}</span></li>)}</ul>
        </section>

        <section aria-label="Proveedores ficticios" className="border-y border-slate-300 bg-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <p className="mb-6 text-center text-xs font-bold tracking-[0.18em] text-slate-600">ECOSISTEMA DEMOSTRATIVO · NOMBRES FICTICIOS</p>
            <ul className="grid grid-cols-2 gap-px bg-slate-300 sm:grid-cols-5">
              {fictionalPartners.map((partner) => <li key={partner} className="grid min-h-24 place-items-center bg-stone-100 font-black tracking-widest text-slate-500">{partner}</li>)}
            </ul>
          </div>
        </section>

        <section id="preguntas" className="mx-auto grid max-w-6xl gap-10 px-4 py-18 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-700">PREGUNTAS FRECUENTES</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Información útil antes del primer contacto.</h2>
          </div>
          <div className="border-t border-slate-300">
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-slate-300 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  {item.question}<span aria-hidden="true" className="text-orange-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="bg-orange-600 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-18 sm:px-6 lg:grid-cols-2 lg:py-24"><div><p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-100">CONTACTO</p><h2 className="text-3xl font-black tracking-tight sm:text-5xl">{siteConfig.contactTitle}</h2><p className="mt-5 max-w-md leading-relaxed text-orange-50">{siteConfig.contactDescription}</p></div>{sent ? <div role="alert" className="self-start border border-orange-300 bg-orange-700 p-7"><h3 className="text-xl font-black">Solicitud registrada en modo demostración.</h3><p className="mt-2 text-sm text-orange-100">No se envió ningún correo ni se almacenaron datos.</p><button type="button" onClick={() => setSent(false)} className="mt-6 border border-white px-4 py-2 text-sm font-bold hover:bg-white hover:text-orange-700">Enviar otra simulación</button></div> : <form onSubmit={handleSubmit} className="grid gap-4 self-start"><label className="text-sm font-bold" htmlFor="name">Nombre<input required id="name" name="name" className="mt-1.5 w-full border border-orange-300 bg-white px-3 py-2.5 text-slate-900" placeholder="Nombre y empresa" /></label><label className="text-sm font-bold" htmlFor="email">Correo electrónico<input required type="email" id="email" name="email" className="mt-1.5 w-full border border-orange-300 bg-white px-3 py-2.5 text-slate-900" placeholder="nombre@empresa.com" /></label><label className="text-sm font-bold" htmlFor="message">¿Qué necesita resolver?<textarea required id="message" name="message" rows={4} className="mt-1.5 w-full border border-orange-300 bg-white px-3 py-2.5 text-slate-900" placeholder="Describa brevemente su proyecto" /></label><button type="submit" className="justify-self-start bg-slate-950 px-5 py-3 text-sm font-bold hover:bg-slate-800">Simular solicitud <span aria-hidden="true">↗</span></button></form>}</div>
        </section>
      </main>
      <footer className="bg-slate-950 px-4 py-7 text-center text-xs text-slate-400">© 2026 {siteConfig.brand} {siteConfig.descriptor} · Plantilla industrial/corporativa para Web Templates Library.</footer>
    </div>
  );
}
