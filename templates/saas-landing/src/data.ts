export const navigation = [
  { label: "Producto", href: "#producto" },
  { label: "Funciones", href: "#funciones" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#preguntas" },
] as const;

export const columns = [
  { title: "Por hacer", tasks: ["Redactar textos de ayuda", "Preparar guía de entrega"] },
  { title: "En curso", tasks: ["Diseñar la página de inicio", "Revisar navegación móvil"] },
  { title: "Listo", tasks: ["Definir alcance del proyecto", "Mapear las secciones"] },
];

export const features = [
  { title: "Tableros de proyecto", description: "Organiza las tareas por estado y detecta de un vistazo qué necesita atención." },
  { title: "Prioridades y fechas", description: "Define qué va primero, quién se encarga y cuándo debe estar listo." },
  { title: "Contexto en cada tarea", description: "Reúne acuerdos, archivos y comentarios donde se hace el trabajo." },
];

export const benefits = [
  { title: "Empieza con prioridades claras", description: "El equipo puede consultar qué sigue y quién toma la próxima decisión." },
  { title: "Detecta bloqueos a tiempo", description: "La vista compartida facilita conversar sobre los retrasos antes de la entrega." },
  { title: "Dedica menos reuniones al seguimiento", description: "Consulta el estado del proyecto antes de pedir una actualización." },
];

type Plan = {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  { name: "Inicio", description: "Para organizar tus primeros proyectos.", monthly: 0, yearly: 0, features: ["Hasta 3 proyectos activos", "Tablero y fechas de entrega", "Hasta 5 integrantes"] },
  { name: "Equipo", description: "Para equipos que trabajan juntos a diario.", monthly: 189, yearly: 149, featured: true, features: ["Proyectos ilimitados", "Comentarios y archivos adjuntos", "Vistas de tablero y calendario"] },
  { name: "Organización", description: "Para coordinar el trabajo entre áreas.", monthly: 349, yearly: 279, features: ["Todo lo de Equipo", "Permisos por proyecto", "Vista global de proyectos"] },
];

export const questions = [
  { question: "¿Qué puedo explorar en la demostración?", answer: "Puedes recorrer un tablero de ejemplo, comparar planes y probar el formulario de contacto. El proyecto y los planes son ficticios." },
  { question: "¿Cómo se calcula el precio anual?", answer: "El selector muestra el equivalente mensual en pesos mexicanos. Cada plan de pago también indica el total anual por persona." },
  { question: "¿Para qué tipo de equipos está pensado Alinea?", answer: "La propuesta está pensada para equipos que necesitan organizar entregas, compartir prioridades y consultar el avance de varios proyectos." },
  { question: "¿Qué pasa al enviar el formulario?", answer: "La página valida los campos y muestra una confirmación local. Los datos se quedan en el navegador durante la interacción." },
];
