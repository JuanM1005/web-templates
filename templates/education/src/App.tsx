import { useMemo, useState } from "react";

type Course = { title: string; teacher: string; category: string; level: string; duration: string; color: string; progress?: number };

const courses: Course[] = [
  { title: "Fundamentos de diseño digital", teacher: "Marina Solís", category: "Diseño", level: "Inicial", duration: "6 semanas", color: "#ff7657", progress: 64 },
  { title: "Datos para tomar decisiones", teacher: "Diego Luna", category: "Negocios", level: "Intermedio", duration: "4 semanas", color: "#ffc857", progress: 28 },
  { title: "Programación web accesible", teacher: "Andrea Téllez", category: "Tecnología", level: "Intermedio", duration: "8 semanas", color: "#7cc6a6" },
  { title: "Comunicación visual efectiva", teacher: "Nora Paz", category: "Diseño", level: "Inicial", duration: "3 semanas", color: "#a9a1ff" },
  { title: "Finanzas para proyectos", teacher: "Mateo Cruz", category: "Negocios", level: "Inicial", duration: "5 semanas", color: "#75b7e8" },
  { title: "Introducción a inteligencia artificial", teacher: "Lina Torres", category: "Tecnología", level: "Inicial", duration: "6 semanas", color: "#f195b2" },
];

export function App() {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const visible = useMemo(() => courses.filter((course) => (category === "Todos" || course.category === category) && course.title.toLowerCase().includes(query.toLowerCase())), [category, query]);

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#18243d]">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Saltar al contenido</a>
      <div className="bg-[#18243d] px-4 py-2 text-center text-xs font-bold text-white">PLATAFORMA DEMOSTRATIVA · Cursos, docentes y progreso son ficticios.</div>
      <header className="border-b border-[#18243d]/15 bg-[#f7f3ea]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#inicio" className="flex items-center gap-3 text-xl font-black"><span className="grid h-10 w-10 rotate-[-5deg] place-items-center rounded-xl bg-[#ff7657] text-white">A</span>Aula Clara</a>
          <nav aria-label="Navegación principal" className="hidden gap-7 text-sm font-bold md:flex"><a href="#cursos">Cursos</a><a href="#ruta">Mi ruta</a><a href="#agenda">Agenda</a></nav>
          <button type="button" onClick={() => setNotice("Inicio de sesión simulado: esta plantilla no crea cuentas.")} className="rounded-full border border-[#18243d] px-5 py-2.5 text-sm font-bold hover:bg-[#18243d] hover:text-white">Entrar</button>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="paper-grid border-b border-[#18243d]/15">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <div><p className="mb-4 text-sm font-black uppercase tracking-[.2em] text-[#d64f32]">Aprender también es construir</p><h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-7xl">Cursos claros para avanzar con intención.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#536078]">Una base adaptable para academias, capacitación empresarial, escuelas y bibliotecas de contenido.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#cursos" className="rounded-full bg-[#18243d] px-6 py-3 font-bold text-white">Explorar cursos ↓</a><a href="#ruta" className="rounded-full border border-[#18243d] px-6 py-3 font-bold">Ver mi avance</a></div></div>
            <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-[#18243d]/20 bg-white p-6 shadow-[12px_12px_0_#ff7657]"><div className="mb-8 flex items-center justify-between"><span className="rounded-full bg-[#f2efe8] px-3 py-1 text-xs font-bold">PRÓXIMA CLASE</span><span className="text-2xl">↗</span></div><p className="text-sm text-[#68748a]">Hoy · 18:00</p><h2 className="mt-2 text-3xl font-black">Diseño de interfaces inclusivas</h2><p className="mt-3 text-[#68748a]">Sesión 4 de 8 · Aula virtual</p><div className="mt-8 h-3 overflow-hidden rounded-full bg-[#e8e3d8]"><div className="h-full w-[64%] rounded-full bg-[#ff7657]"></div></div><div className="mt-2 flex justify-between text-xs font-bold"><span>Progreso</span><span>64%</span></div></div>
          </div>
        </section>

        <section id="cursos" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-black uppercase tracking-[.2em] text-[#d64f32]">Catálogo</p><h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Encuentra tu siguiente habilidad.</h2></div><label className="w-full max-w-sm text-sm font-bold">Buscar curso<input value={query} onChange={(event) => setQuery(event.target.value)} className="mt-2 w-full rounded-full border border-[#18243d]/25 bg-white px-5 py-3 font-normal" placeholder="Ej. diseño, datos..."/></label></div>
          <div role="group" aria-label="Filtrar por categoría" className="mb-8 flex flex-wrap gap-2">{["Todos", "Diseño", "Tecnología", "Negocios"].map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2 text-sm font-bold ${category === item ? "bg-[#ff7657] text-white" : "border border-[#18243d]/20 bg-white"}`}>{item}</button>)}</div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visible.map((course, index) => <article key={course.title} className="group overflow-hidden rounded-3xl border border-[#18243d]/15 bg-white"><div className="flex aspect-[16/9] items-end p-5" style={{backgroundColor: course.color}}><span className="text-7xl font-black text-white/60">0{index + 1}</span></div><div className="p-5"><div className="flex justify-between text-xs font-bold uppercase tracking-wide text-[#68748a]"><span>{course.category}</span><span>{course.level}</span></div><h3 className="mt-3 text-2xl font-black leading-tight">{course.title}</h3><p className="mt-3 text-sm text-[#68748a]">{course.teacher} · {course.duration}</p><button type="button" onClick={() => setNotice(`Vista previa simulada: ${course.title}`)} className="mt-6 font-black underline decoration-[#ff7657] decoration-2 underline-offset-4">Ver programa →</button></div></article>)}</div>
          {visible.length === 0 && <p className="rounded-2xl bg-white p-8 text-center">No encontramos cursos con esa búsqueda.</p>}
        </section>

        <section id="ruta" className="bg-[#18243d] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24"><div><p className="text-sm font-black uppercase tracking-[.2em] text-[#ffc857]">Mi ruta</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Aprende sin perder el rumbo.</h2><p className="mt-5 max-w-lg leading-7 text-white/70">Panel listo para adaptar a progreso real, certificados, evaluaciones o capacitación por equipos.</p></div><div className="grid gap-4">{courses.slice(0, 2).map((course) => <div key={course.title} className="rounded-2xl bg-white/10 p-5"><div className="flex justify-between gap-4"><strong>{course.title}</strong><span>{course.progress}%</span></div><div className="mt-4 h-2 rounded-full bg-white/15"><div className="h-full rounded-full bg-[#ffc857]" style={{width: `${course.progress}%`}}></div></div></div>)}</div></div></section>

        <section id="agenda" className="mx-auto max-w-7xl px-5 py-16"><div className="grid gap-6 md:grid-cols-3">{[["MAR 12", "Taller en vivo", "Prototipos que se entienden"], ["JUE 14", "Sesión abierta", "Preguntas sobre tecnología"], ["SÁB 16", "Comunidad", "Círculo de proyectos"]].map(([date, type, title]) => <article key={date} className="rounded-2xl border border-[#18243d]/15 bg-white p-5"><span className="text-sm font-black text-[#d64f32]">{date}</span><p className="mt-5 text-xs font-bold uppercase text-[#68748a]">{type}</p><h3 className="mt-1 text-xl font-black">{title}</h3></article>)}</div></section>
      </main>
      {notice && <div role="status" className="fixed bottom-5 left-1/2 z-50 w-[min(90%,520px)] -translate-x-1/2 rounded-2xl bg-[#18243d] px-5 py-4 text-sm text-white shadow-xl"><div className="flex items-center justify-between gap-4"><span>{notice}</span><button type="button" onClick={() => setNotice("")} className="font-black">Cerrar</button></div></div>}
      <footer className="border-t border-[#18243d]/15 px-5 py-8 text-center text-xs text-[#68748a]">© 2026 Aula Clara · Plantilla educativa demostrativa.</footer>
    </div>
  );
}
