import React, { useState } from "react";
import { eventInfo, speakers, agenda, type SessionItem } from "./data";

type DayFilter = SessionItem["day"];

export function App() {
  const [selectedDay, setSelectedDay] = useState<DayFilter>("Día 1 · 14 Nov");
  const [registered, setRegistered] = useState(false);
  const [ticketType, setTicketType] = useState("Presencial General");

  const days: DayFilter[] = ["Día 1 · 14 Nov", "Día 2 · 15 Nov"];
  const filteredSessions = agenda.filter((item) => item.day === selectedDay);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-indigo-950 text-slate-100">
      <a
        href="#contenido-evento"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-fuchsia-500 focus:text-white focus:px-4 focus:py-2 focus:rounded font-bold"
      >
        Saltar al contenido principal
      </a>

      <div
        role="status"
        className="bg-fuchsia-950 border-b border-fuchsia-700 text-fuchsia-200 text-xs sm:text-sm py-2 px-4 text-center"
      >
        <strong>Modo demostración:</strong> Registro y disponibilidad de boletos
        simulados en el navegador (sin backend ni cobros reales).
      </div>

      <header className="sticky top-0 z-40 bg-indigo-950/90 backdrop-blur border-b border-indigo-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-extrabold text-xl tracking-tight text-white"
          >
            <span className="text-fuchsia-400">Nexo</span>Tech{" "}
            <span className="text-xs font-mono text-cyan-300">2026</span>
          </a>
          <nav
            aria-label="Navegación del evento"
            className="flex items-center gap-4 sm:gap-6 text-sm font-medium"
          >
            <a
              href="#ponentes"
              className="hover:text-fuchsia-400 transition-colors"
            >
              Ponentes
            </a>
            <a
              href="#agenda"
              className="hover:text-fuchsia-400 transition-colors"
            >
              Agenda
            </a>
            <a
              href="#registro"
              className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Reservar lugar
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido-evento" className="flex-1">
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto text-center">
          <p className="inline-block bg-indigo-900 border border-indigo-700 text-cyan-300 text-xs sm:text-sm font-mono px-4 py-1.5 rounded-full mb-6">
            {eventInfo.dates} · {eventInfo.venue}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
            {eventInfo.subtitle}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#registro"
              className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
            >
              Obtener pase demostrativo
            </a>
            <a
              href="#agenda"
              className="bg-indigo-900 hover:bg-indigo-800 border border-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Consultar horarios
            </a>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {eventInfo.highlights.map((item) => (
              <div
                key={item.label}
                className="bg-indigo-900/60 border border-indigo-800 rounded-2xl p-5"
              >
                <dt className="text-xs uppercase tracking-wider text-indigo-300">
                  {item.label}
                </dt>
                <dd className="text-3xl font-black text-cyan-300 mt-1">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="ponentes"
          className="py-16 bg-indigo-900/40 border-y border-indigo-800"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Ponentes Confirmados
            </h2>
            <p className="text-indigo-200 text-sm mb-10">
              Especialistas que compartirán casos reales de arquitectura e
              interfaz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {speakers.map((speaker) => (
                <article
                  key={speaker.id}
                  className="bg-indigo-900 border border-indigo-700 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div
                      aria-hidden="true"
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-white font-black text-lg flex items-center justify-center mb-4"
                    >
                      {speaker.name.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 mt-1">
                      {speaker.role} · {speaker.organization}
                    </p>
                    <p className="text-sm text-indigo-100 mt-4">
                      “{speaker.topic}”
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="agenda" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Agenda del Evento
              </h2>
              <p className="text-indigo-200 text-sm mt-1">
                Selecciona el día para explorar las charlas y talleres.
              </p>
            </div>

            <div
              role="group"
              aria-label="Selector de día de la agenda"
              className="flex gap-2"
            >
              {days.map((day) => {
                const active = selectedDay === day;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    aria-pressed={active}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      active
                        ? "bg-fuchsia-600 text-white"
                        : "bg-indigo-900 text-indigo-200 border border-indigo-700 hover:bg-indigo-800"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <article
                key={session.id}
                className="bg-indigo-900/70 border border-indigo-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300 mb-1">
                    <span>{session.time}</span>
                    <span>·</span>
                    <span>{session.stage}</span>
                    <span className="bg-indigo-800 text-indigo-100 px-2.5 py-0.5 rounded-full">
                      {session.track}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {session.title}
                  </h3>
                  <p className="text-sm text-indigo-200 mt-1">
                    Ponente: {session.speaker}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="registro"
          className="py-16 bg-indigo-900/50 border-t border-indigo-800"
        >
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Registro de Asistentes
            </h2>
            <p className="text-indigo-200 text-sm mb-6">
              Formulario demostrativo para simular la emisión de un gafete de
              acceso.
            </p>

            {registered ? (
              <div
                role="alert"
                className="bg-indigo-900 border-2 border-cyan-400 rounded-2xl p-6 text-center"
              >
                <p className="text-xs font-mono uppercase text-cyan-300 mb-1">
                  Pase Demostrativo Generado
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  Modalidad: {ticketType}
                </h3>
                <p className="text-sm text-indigo-200 mb-6">
                  Esta confirmación es una simulación local sin envío de correos
                  ni cobros reales.
                </p>
                <button
                  type="button"
                  onClick={() => setRegistered(false)}
                  className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold px-5 py-2 rounded-full text-sm"
                >
                  Simular otro registro
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleRegister}
                className="space-y-4 bg-indigo-900 border border-indigo-700 p-6 rounded-2xl"
              >
                <div>
                  <label
                    htmlFor="asistente-nombre"
                    className="block text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="asistente-nombre"
                    type="text"
                    required
                    placeholder="Ej. Andrea Gómez"
                    className="w-full rounded-lg bg-indigo-950 border border-indigo-700 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-fuchsia-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="asistente-correo"
                    className="block text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="asistente-correo"
                    type="email"
                    required
                    placeholder="andrea@ejemplo.org"
                    className="w-full rounded-lg bg-indigo-950 border border-indigo-700 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-fuchsia-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipo-pase"
                    className="block text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1"
                  >
                    Tipo de acceso *
                  </label>
                  <select
                    id="tipo-pase"
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                    className="w-full rounded-lg bg-indigo-950 border border-indigo-700 px-3 py-2 text-sm text-white focus:outline-2 focus:outline-fuchsia-400"
                  >
                    <option value="Presencial General">
                      Presencial General (Demo sin costo)
                    </option>
                    <option value="Estudiante / Servicio Social">
                      Estudiante / Servicio Social
                    </option>
                    <option value="Streaming Online">Streaming Online</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 rounded-full transition-colors mt-2"
                >
                  Confirmar registro simulado
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-indigo-950 border-t border-indigo-900 py-8 text-center text-xs text-indigo-300">
        <p>
          © 2026 {eventInfo.name} · Plantilla demostrativa para Web Templates
          Library.
        </p>
      </footer>
    </div>
  );
}
