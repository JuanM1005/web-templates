import { useState, type FormEvent } from "react";
import { sessions, speakers, type EventDay } from "./data";

export function App() {
  const [day, setDay] = useState<EventDay>("14 NOV");
  const [registered, setRegistered] = useState(false);
  const visibleSessions = sessions.filter((session) => session.day === day);

  function handleRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRegistered(true);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#100d24] text-white">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#f5ff61] focus:px-4 focus:py-2 focus:text-[#100d24]">Saltar al contenido</a>
      <div className="bg-[#f5ff61] px-4 py-2 text-center text-xs font-black tracking-wide text-[#100d24]">EVENTO DEMOSTRATIVO · Futura 26, ponentes, agenda y registro son ficticios.</div>
      <header className="relative z-30 border-b border-white/20 bg-[#100d24]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6"><a href="#inicio" className="text-2xl font-black tracking-[-.06em]">FUTURA<span className="text-[#ff694d]">/26</span></a><nav aria-label="Navegación del evento" className="hidden items-center gap-7 text-sm font-bold md:flex"><a href="#agenda">Agenda</a><a href="#ponentes">Ponentes</a><a href="#sede">Sede</a></nav><a href="#registro" className="rounded-full bg-[#ff694d] px-5 py-2.5 text-sm font-black text-[#100d24] transition hover:bg-[#f5ff61]">Reservar lugar</a></div>
      </header>

      <main id="contenido">
        <section id="inicio" className="event-grid relative border-b border-white/20">
          <div className="pointer-events-none absolute -right-14 top-18 h-62 w-62 rounded-full bg-[#9a7cff] opacity-85 blur-3xl"></div>
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-18 sm:px-6 lg:grid-cols-[1fr_380px]">
            <div className="relative z-10"><p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#5ee5c0]">14—15 Noviembre · Guadalajara</p><h1 className="max-w-5xl text-6xl leading-[.84] font-black tracking-[-.075em] uppercase sm:text-8xl lg:text-[9rem]">Ideas que<br/><span className="text-outline">mueven</span><br/>ciudades.</h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#ccc7e3]">Dos días para conectar diseño, tecnología y acción colectiva en torno a futuros urbanos más humanos.</p></div>
            <div aria-hidden="true" className="relative hidden h-110 lg:block"><div className="orb absolute left-5 top-5 h-64 w-64 rounded-[46%_54%_62%_38%] bg-[#ff694d]"></div><div className="orb absolute bottom-12 right-0 h-52 w-52 rounded-full bg-[#5ee5c0]" style={{animationDelay: "-2s"}}></div><div className="absolute left-4 top-60 rotate-[-8deg] border border-white bg-[#100d24] px-5 py-3 font-mono text-xs">2 DÍAS / 18 SESIONES / 1 CIUDAD</div></div>
          </div>
        </section>

        <section className="border-b border-white/20 bg-[#ff694d] text-[#100d24]"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#100d24]/25 px-4 sm:grid-cols-4 sm:px-6">{[["02", "días"], ["18", "sesiones"], ["12", "ponentes"], ["01", "sede central"]].map(([value, label]) => <div key={label} className="py-7 text-center"><strong className="block text-4xl font-black">{value}</strong><span className="text-xs font-bold uppercase tracking-wider">{label}</span></div>)}</div></section>

        <section id="agenda" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:py-26">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#5ee5c0]">Programa</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Arma tu recorrido.</h2></div><div role="group" aria-label="Seleccionar día" className="flex gap-2">{(["14 NOV", "15 NOV"] as EventDay[]).map((option) => <button key={option} type="button" onClick={() => setDay(option)} aria-pressed={day === option} className={`rounded-full border px-6 py-3 text-sm font-black ${day === option ? "border-[#f5ff61] bg-[#f5ff61] text-[#100d24]" : "border-white/40 hover:border-white"}`}>{option}</button>)}</div></div>
          <div className="border-t border-white/25">{visibleSessions.map((session) => <article key={session.id} className="grid gap-3 border-b border-white/25 py-6 transition hover:bg-white/5 sm:grid-cols-[110px_1fr_180px] sm:items-center sm:px-4"><time className="font-mono text-xl text-[#f5ff61]">{session.time}</time><div><p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#9a7cff]">{session.track}</p><h3 className="text-xl font-bold sm:text-2xl">{session.title}</h3></div><p className="text-sm font-semibold text-[#ccc7e3] sm:text-right">{session.speaker}</p></article>)}</div>
        </section>

        <section id="ponentes" className="border-y border-white/20 bg-[#1c1738]"><div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:py-24"><div className="mb-10"><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ff694d]">Voces invitadas</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Personas que abren preguntas.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{speakers.map((speaker) => <article key={speaker.name} className="border border-white/20 bg-[#100d24] p-5"><div className="mb-8 grid aspect-square place-items-center rounded-full text-6xl font-black text-[#100d24]" style={{backgroundColor: speaker.color}}>{speaker.initials}</div><h3 className="text-xl font-black">{speaker.name}</h3><p className="mt-1 text-sm text-[#aaa5c5]">{speaker.role}</p></article>)}</div></div></section>

        <section id="sede" className="mx-auto grid max-w-7xl gap-10 px-4 py-18 sm:px-6 lg:grid-cols-2 lg:py-24"><div><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#5ee5c0]">Sede ficticia</p><h2 className="text-4xl font-black tracking-tight sm:text-5xl">Centro Cultural Horizonte</h2><p className="mt-5 max-w-xl leading-relaxed text-[#aaa5c5]">Un punto de encuentro demostrativo en Guadalajara, con tres escenarios, área de talleres y espacios de conversación.</p></div><div className="event-grid grid min-h-70 place-items-center border border-white/20"><div className="text-center"><span className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#9a7cff] text-3xl text-[#100d24]">⌖</span><strong className="block">Guadalajara, Jalisco</strong><span className="text-sm text-[#aaa5c5]">Ubicación ilustrativa · no corresponde a un recinto real</span></div></div></section>

        <section id="registro" className="bg-[#f5ff61] text-[#100d24]"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-18 sm:px-6 lg:grid-cols-2 lg:py-24"><div><p className="mb-3 text-xs font-black uppercase tracking-[0.2em]">Registro de prueba</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Guarda tu lugar en la conversación.</h2><p className="mt-5 max-w-lg">El formulario demuestra el flujo de registro, pero no envía ni almacena datos.</p></div>{registered ? <div role="alert" className="self-start border-2 border-[#100d24] bg-white p-7"><h3 className="text-2xl font-black">Registro simulado correctamente.</h3><p className="mt-2">No se creó un boleto ni se enviaron datos.</p><button type="button" onClick={() => setRegistered(false)} className="mt-6 bg-[#100d24] px-5 py-3 text-sm font-black text-white">Probar de nuevo</button></div> : <form onSubmit={handleRegistration} className="grid gap-4 self-start"><label className="text-sm font-black" htmlFor="event-name">Nombre<input id="event-name" required className="mt-1.5 w-full border-2 border-[#100d24] bg-white px-3 py-3 font-normal" placeholder="Nombre completo" /></label><label className="text-sm font-black" htmlFor="event-email">Correo electrónico<input id="event-email" type="email" required className="mt-1.5 w-full border-2 border-[#100d24] bg-white px-3 py-3 font-normal" placeholder="nombre@dominio.com" /></label><button type="submit" className="justify-self-start bg-[#ff694d] px-6 py-3 font-black shadow-[5px_5px_0_#100d24] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Simular registro ↗</button></form>}</div></section>
      </main>
      <footer className="px-4 py-8 text-center text-xs text-[#817c9f]">© 2026 Futura 26 · Plantilla demostrativa de eventos para Web Templates Library.</footer>
    </div>
  );
}
