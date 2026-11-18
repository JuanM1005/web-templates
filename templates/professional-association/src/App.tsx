import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router";
import { accountSections, adminRows, affiliationSteps, functionsList, quickLinks } from "@/data";

const Brand = ({ inverse = false }: { inverse?: boolean }) => (
  <Link className={`brand${inverse ? " brand--inverse" : ""}`} to="/" aria-label="Ir al inicio">
    <span className="brand__mark" aria-hidden="true">I</span>
    <span><strong>IDENTIDAD INSTITUCIONAL</strong><small>COLEGIO · CONSEJO · ASOCIACIÓN</small></span>
  </Link>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

const PublicHeader = () => {
  const [open, setOpen] = useState(false);
  return <header className="public-header">
    <Brand />
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="public-navigation" onClick={() => setOpen(!open)}><span className="sr-only">Abrir menú</span><i /><i /></button>
    <nav id="public-navigation" className={open ? "public-nav public-nav--open" : "public-nav"} aria-label="Navegación principal">
      <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a><a href="#afiliacion" onClick={() => setOpen(false)}>Afiliación</a><a href="#academia" onClick={() => setOpen(false)}>Academia</a><a href="#novedades" onClick={() => setOpen(false)}>Novedades</a>
    </nav>
    <div className="header-actions"><button className="text-action" type="button">Verificar credencial</button><Link className="button button--primary button--compact" to="/acceso">Acceder</Link></div>
  </header>;
};

const PhotoPlaceholder = () => <figure className="photo-placeholder" role="img" aria-label="Espacio reservado para una fotografía institucional autorizada"><div><span>ACTIVO PENDIENTE</span><strong>Fotografía institucional</strong><small>Reemplace este espacio con una imagen autorizada, sin alterar su proporción.</small></div></figure>;

const PublicPortal = () => <>
  <a className="skip-link" href="#contenido-publico">Saltar al contenido</a>
  <div className="demo-banner">PLANTILLA DEMOSTRATIVA · Contenido pendiente de validación institucional.</div>
  <PublicHeader />
  <main id="contenido-publico">
    <section className="public-hero">
      <PhotoPlaceholder />
      <div className="public-hero__shade" aria-hidden="true" />
      <div className="public-hero__copy"><p className="eyebrow eyebrow--light">COMUNIDAD PROFESIONAL</p><h1>Una institución para ejercer, participar y construir en común.</h1><p>Base editorial para presentar el propósito de un colegio o asociación profesional con claridad, confianza y una navegación predecible.</p><div className="action-row"><a className="button button--light" href="#afiliacion">Conocer afiliación <Arrow /></a><a className="button button--outline-light" href="#nosotros">Explorar la institución</a></div></div>
    </section>

    <section className="quick-access" aria-label="Accesos rápidos">{quickLinks.map(([number,title,text]) => <a href={number === "02" ? "#afiliacion" : number === "03" ? "#academia" : "#nosotros"} key={number}><span>{number}</span><div><strong>{title}</strong><small>{text}</small></div><Arrow /></a>)}</section>

    <section className="editorial-section about" id="nosotros">
      <div className="section-index">01 / NOSOTROS</div>
      <div className="about__title"><p className="eyebrow">PROPÓSITO INSTITUCIONAL</p><h2>Un espacio común para la vida profesional.</h2></div>
      <div className="about__body"><p className="lead">Esta composición está preparada para explicar quién es la institución, a quién representa y cómo participa en su entorno profesional.</p><p>El contenido definitivo debe provenir de fuentes institucionales autorizadas. Mientras tanto, los módulos indican con claridad qué información sigue pendiente.</p><a className="editorial-link" href="#funciones">Conocer sus funciones <Arrow /></a></div>
      <div className="institution-note"><span>INFORMACIÓN PENDIENTE</span><p>Historia, alcance territorial, órganos de gobierno y fundamentos institucionales.</p></div>
    </section>

    <section className="functions editorial-section" id="funciones"><div className="section-heading"><p className="eyebrow">FUNCIONES Y OBJETIVOS</p><h2>Estructura para comunicar sin sobreprometer.</h2><p>Los textos describen el propósito del módulo, no beneficios oficiales.</p></div><div className="function-list">{functionsList.map(([title,text],index) => <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="affiliation editorial-section" id="afiliacion"><div className="affiliation__intro"><p className="eyebrow eyebrow--light">RUTA DE AFILIACIÓN</p><h2>Un proceso legible, paso a paso.</h2><p>La secuencia puede conectarse después a requisitos, documentos y reglas aprobadas.</p><Link className="button button--light" to="/acceso">Iniciar ejemplo de registro <Arrow /></Link></div><ol>{affiliationSteps.map(([number,title,text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

    <section className="academy editorial-section" id="academia"><div className="academy__visual"><span>ACADEMIA</span><div className="academy__letter">A</div><small>Espacio visual configurable</small></div><div className="academy__copy"><p className="eyebrow">FORMACIÓN Y CONOCIMIENTO</p><h2>Contenidos profesionales con contexto institucional.</h2><p>Área preparada para programas, actividades, biblioteca o agenda académica. No se muestran fechas ni convocatorias hasta contar con información oficial.</p><div className="notice notice--info"><strong>Estado del contenido</strong><span>Contenido pendiente de publicación oficial.</span></div><a className="editorial-link" href="#novedades">Consultar contenidos <Arrow /></a></div></section>

    <section className="news editorial-section" id="novedades"><div className="section-heading"><p className="eyebrow">NOVEDADES</p><h2>Información institucional, sin ruido.</h2><p>Las tarjetas pueden usarse para comunicados, agenda o recursos.</p></div><div className="news-grid">{["Comunicado institucional","Actividad académica","Recurso profesional"].map((title,index) => <article key={title}><div className="news-placeholder"><span>0{index+1}</span></div><small>CONTENIDO PENDIENTE</small><h3>{title}</h3><p>Información en proceso de validación institucional.</p><a href="#novedades">Ver estructura <Arrow /></a></article>)}</div></section>

    <section className="closing"><p className="eyebrow eyebrow--light">SIGUIENTE PASO</p><h2>Una base preparada para crecer con la institución.</h2><p>Personalice la identidad y publique únicamente contenido autorizado.</p><div className="action-row"><a className="button button--light" href="#afiliacion">Explorar afiliación</a><Link className="button button--outline-light" to="/cuenta">Ver ejemplo de Mi Cuenta</Link></div></section>
  </main>
  <PublicFooter />
</>;

const PublicFooter = () => <footer className="public-footer"><div><Brand inverse /><p>Plantilla genérica para instituciones profesionales. No representa a una organización real.</p></div><div><strong>Institución</strong><a href="#nosotros">Nosotros</a><a href="#afiliacion">Afiliación</a><a href="#academia">Academia</a></div><div><strong>Plantilla</strong><Link to="/acceso">Autenticación</Link><Link to="/cuenta">Mi Cuenta</Link><Link to="/administracion">Administración</Link></div><small>© 2026 · Caso demostrativo · Personalice antes de publicar.</small></footer>;

const AuthPage = () => {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <main className="auth-layout"><aside><Brand inverse /><div><p className="eyebrow eyebrow--light">ACCESO INSTITUCIONAL</p><h1>Su espacio profesional, en un entorno claro y confiable.</h1><p>Esta vista ejemplifica acceso, registro, recuperación y verificación con una estructura común.</p></div><small>Todos los datos y flujos son demostrativos.</small></aside><section><Link className="back-link" to="/">← Volver al portal</Link><form className="auth-form" onSubmit={submit}><p className="eyebrow">MI CUENTA</p><h2>Iniciar sesión</h2><p>Ingrese datos ficticios para explorar la plantilla.</p><label>Correo electrónico<input className="field-control" required type="email" aria-describedby="email-help" placeholder="nombre@ejemplo.com" /></label><small id="email-help">Utilice una dirección válida.</small><label>Contraseña<input className="field-control" required minLength={8} type="password" placeholder="Mínimo 8 caracteres" /></label><div className="form-between"><label className="check"><input type="checkbox" /> Recordar sesión</label><button className="link-button" type="button">Recuperar contraseña</button></div><button className="button button--primary button--full" type="submit">Simular acceso</button>{sent && <div className="notice notice--success" role="status"><strong>Ejemplo completado</strong><span>No se enviaron ni almacenaron datos.</span></div>}<p className="auth-switch">¿Aún no tiene una cuenta? <button className="link-button" type="button">Ver registro</button></p><div className="state-strip"><span className="semantic-badge semantic-badge--info">Información</span><span className="semantic-badge semantic-badge--warning">Pendiente</span><span className="semantic-badge semantic-badge--error">Error</span></div></form></section></main>;
};

const PrivateHeader = ({ title }: { title: string }) => <header className="private-header"><Brand /><strong>{title}</strong><div><Link to="/">Portal público</Link><button type="button" aria-label="Abrir menú de usuario">Cuenta de ejemplo</button></div></header>;

const AccountPage = () => {
  const [active, setActive] = useState(accountSections[0]);
  return <><PrivateHeader title="MI CUENTA" /><main className="account-layout"><aside><p className="eyebrow">ESPACIO PERSONAL</p><nav aria-label="Secciones de Mi Cuenta">{accountSections.map((item,index) => <button className={active === item ? "active" : ""} type="button" onClick={() => setActive(item)} key={item}><span>0{index+1}</span>{item}</button>)}</nav><Link className="editorial-link" to="/">Cerrar vista de ejemplo</Link></aside><section className="account-content"><div className="operational-heading"><div><p className="eyebrow">SECCIÓN ACTIVA</p><h1>{active}</h1></div><span className="semantic-badge semantic-badge--warning">Información pendiente</span></div><div className="surface-panel"><h2>Información principal</h2><p>Este panel muestra la estructura reutilizable para formularios, documentos, historiales, avisos y acciones de la sección seleccionada.</p><div className="form-grid"><label>Campo de ejemplo<input className="field-control" placeholder="Dato ficticio" /></label><label>Clasificación<select className="field-control" defaultValue=""><option value="" disabled>Seleccione una opción</option><option>Opción demostrativa</option></select></label></div><label>Descripción<textarea className="field-control" rows={4} placeholder="Información en proceso de validación institucional." /></label><div className="panel-actions"><button className="button button--secondary" type="button">Cancelar</button><button className="button button--primary" type="button">Guardar ejemplo</button></div></div><div className="account-grid"><div className="surface-panel"><h2>Documentos</h2><div className="empty-state"><strong>Sin documentos disponibles</strong><p>Los archivos autorizados aparecerán en esta sección.</p><button className="button button--secondary" type="button">Agregar ejemplo</button></div></div><div className="surface-panel"><h2>Historial</h2><ul className="timeline"><li><span /><div><strong>Estado de demostración</strong><small>Dato de ejemplo para la plantilla</small></div></li><li><span /><div><strong>Registro inicial</strong><small>Información sin valor oficial</small></div></li></ul></div></div></section></main></>;
};

const ConfirmDialog = ({ onClose }: { onClose: () => void }) => {
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { closeButton.current?.focus(); const key = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; window.addEventListener("keydown",key); return () => window.removeEventListener("keydown",key); },[onClose]);
  return <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="dialog" role="alertdialog" aria-modal="true" aria-labelledby="dialog-title"><p className="eyebrow">CONFIRMACIÓN</p><h2 id="dialog-title">¿Confirmar acción demostrativa?</h2><p>Las acciones sensibles deben explicar sus consecuencias antes de continuar.</p><div><button ref={closeButton} className="button button--secondary" type="button" onClick={onClose}>Cancelar</button><button className="button button--danger" type="button" onClick={onClose}>Confirmar ejemplo</button></div></section></div>;
};

const AdminPage = () => {
  const [selected, setSelected] = useState(adminRows[0]);
  const [dialog, setDialog] = useState(false);
  return <><PrivateHeader title="ADMINISTRACIÓN" /><main className="admin-shell"><aside className="admin-nav"><p className="eyebrow">MÓDULOS</p>{["Admisiones","Tesorería","Privacidad y ARCO","Usuarios y roles"].map((item,index) => <button className={index === 0 ? "active" : ""} type="button" key={item}>{item}</button>)}</aside><section className="admin-main"><div className="operational-heading"><div><p className="eyebrow">BANDEJA OPERATIVA</p><h1>Admisiones</h1></div><span className="semantic-badge semantic-badge--info">3 resultados de ejemplo</span></div><div className="admin-tools"><label className="search-control"><span className="sr-only">Buscar registros</span><input className="field-control" placeholder="Buscar por folio o asunto" /></label><button className="button button--secondary" type="button">Filtros</button><button className="button button--primary" type="button">Nueva acción</button></div><div className="tray-layout"><div className="tray" aria-label="Registros de ejemplo">{adminRows.map((row) => <button type="button" className={selected.folio === row.folio ? "active" : ""} key={row.folio} onClick={() => setSelected(row)}><span><strong>{row.subject}</strong><small>{row.folio} · {row.type}</small></span><span className={`semantic-badge ${row.status === "Atendido" ? "semantic-badge--success" : "semantic-badge--warning"}`}>{row.status}</span><small>{row.date}</small></button>)}</div><article className="detail-panel"><div className="detail-panel__heading"><div><p className="eyebrow">DETALLE SELECCIONADO</p><h2>{selected.subject}</h2><small>{selected.folio}</small></div><span className="semantic-badge semantic-badge--warning">{selected.status}</span></div><dl><div><dt>Tipo</dt><dd>{selected.type}</dd></div><div><dt>Fecha</dt><dd>{selected.date}</dd></div><div><dt>Responsable</dt><dd>Dato ficticio</dd></div><div><dt>Resolución</dt><dd>Información pendiente</dd></div></dl><div className="notice notice--info"><strong>Vista demostrativa</strong><span>No contiene solicitudes, documentos ni datos personales reales.</span></div><h3>Historial</h3><ul className="timeline"><li><span /><div><strong>Revisión pendiente</strong><small>Evento ficticio para mostrar el componente.</small></div></li><li><span /><div><strong>Registro recibido</strong><small>Dato de ejemplo para la plantilla.</small></div></li></ul><div className="panel-actions"><button className="button button--secondary" type="button">Solicitar información</button><button className="button button--primary" type="button" onClick={() => setDialog(true)}>Resolver ejemplo</button></div></article></div></section></main>{dialog && <ConfirmDialog onClose={() => setDialog(false)} />}</>;
};

export const App = () => <Routes><Route path="/" element={<PublicPortal />} /><Route path="/acceso" element={<AuthPage />} /><Route path="/cuenta" element={<AccountPage />} /><Route path="/administracion" element={<AdminPage />} /></Routes>;
