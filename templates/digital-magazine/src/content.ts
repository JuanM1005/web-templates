import city from "./assets/city.jpg";
import paper from "./assets/paper.jpg";
import radio from "./assets/radio.jpg";

export const categories = {
  tecnologia: { label: "Tecnología", description: "Herramientas, redes y otras formas de habitar lo digital." },
  diseno: { label: "Diseño", description: "Materiales, procesos y decisiones que dan forma a lo cotidiano." },
  cultura: { label: "Cultura", description: "Historias sobre lo que hacemos, guardamos y compartimos." },
} as const;

export type CategoryId = keyof typeof categories;

export const categoryIds: CategoryId[] = ["tecnologia", "diseno", "cultura"];

const authors = {
  ines: { name: "Inés Valcárcel" },
  teo: { name: "Teo Saldívar" },
  mara: { name: "Mara Solís" },
} as const;

interface ArticleImage {
  src: string;
  alt: string;
}

interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: CategoryId;
  author: keyof typeof authors;
  published: string;
  image?: ArticleImage;
  sections: ArticleSection[];
}

export const coverArticleSlug = "la-ciudad-en-modo-avion";

export const articles: Article[] = [
  {
    slug: coverArticleSlug,
    title: "La ciudad en modo avión",
    summary: "Una caminata sin conexión revela cuánto del paisaje urbano aprendimos a delegar a una pantalla.",
    category: "tecnologia",
    author: "ines",
    published: "2026-11-18",
    image: { src: city, alt: "Un paso peatonal de concreto se curva sobre una calle al anochecer." },
    sections: [
      {
        heading: "Perder la línea azul",
        paragraphs: [
          "Apagué los datos antes de llegar al puente. El mapa conservó mi última posición como si yo me hubiese quedado esperando en la esquina. Al otro lado del cruce, la acera se desdoblaba en una rampa y una escalera. Elegí la rampa porque desde abajo se veía una luz encendida. La decisión, tan pequeña, cambió la calle por la que volví a casa.",
          "Durante años hice ese trayecto con un punto azul por delante. Sabía dónde doblar, aunque casi nunca podía decir qué había en la esquina. A pie y sin indicaciones, los comercios cerrados me sirvieron de referencia. Aprendí a distinguir el ruido del puente del ruido de la avenida. Al llegar arriba, pude describir el camino que acababa de hacer.",
        ],
      },
      {
        heading: "Las señales que quedan",
        paragraphs: [
          "Una vecina me explicó que la calle se reconocía por el olor a pan después de las seis. Su indicación funcionaba a la hora en que yo estaba ahí y para la dirección en la que caminaba. Era una pista situada, como tantas que desaparecen cuando convertimos un trayecto en una secuencia de giros.",
          "Al día siguiente encendí el mapa otra vez. Guardé la ruta para una visita y le añadí dos notas: la rampa es más amable con las ruedas y, al caer la tarde, la luz bajo el puente ayuda a encontrar la entrada. Mi paseo terminó siendo una manera de mejorar el mapa que sí quiero seguir usando.",
        ],
      },
    ],
  },
  {
    slug: "la-tinta-deja-rastro",
    title: "La tinta deja rastro",
    summary: "En un taller de impresión, el color se decide entre pruebas, papel y un poco de paciencia.",
    category: "diseno",
    author: "teo",
    published: "2026-11-16",
    image: { src: paper, alt: "Papeles de prueba rojos y claros sobre una mesa de impresión." },
    sections: [
      {
        heading: "Una prueba sobre la mesa",
        paragraphs: [
          "En el taller, las pruebas se leen de pie y cerca de la ventana. El rojo que en la mesa parecía profundo se vuelve casi naranja cuando le da la luz de costado. Teo separó dos hojas de la misma tirada y las dejó junto a una libreta. La diferencia era pequeña, aunque cambiaba el peso visual de la composición.",
          "Cada hoja llevaba anotados el papel, la mezcla y el orden de las pasadas. Sin esos apuntes, repetir el resultado habría sido cuestión de suerte. Con ellos, el taller podía decidir qué variación valía la pena conservar.",
        ],
      },
      {
        heading: "Dejar sitio al papel",
        paragraphs: [
          "Para la segunda prueba, el equipo retiró una capa de tinta en lugar de añadir otra. El tono del papel empezó a verse entre las formas y la ilustración ganó aire. En la siguiente mesa había una pila de descartes. Algunas hojas terminarían como separadores y otras servirían para probar la presión antes de imprimir de nuevo.",
          "El archivo final incluyó una fotografía a la luz de la mañana y una muestra física. Juntas contaban mejor lo que el color debía hacer cuando alguien abriera el cuaderno. El trabajo de diseño continuaba un poco más allá de la entrega del archivo.",
        ],
      },
    ],
  },
  {
    slug: "radio-de-ventana",
    title: "Radio de ventana",
    summary: "Una emisora de barrio encuentra su voz en recados, canciones prestadas y conversaciones al aire.",
    category: "cultura",
    author: "mara",
    published: "2026-11-14",
    image: { src: radio, alt: "Un micrófono y una mesa de mezclas en un estudio iluminado por una lámpara cálida." },
    sections: [
      {
        heading: "La hora de abrir el micrófono",
        paragraphs: [
          "La primera emisión empezó a las seis y ocho, cuando llegó la persona que traía el cable que faltaba. Alguien leyó un recado sobre una llave perdida, sonó una canción enviada por una vecina y, al final, una niña contó por qué prefería el patio de su escuela a la plaza. El guion ocupaba media hoja.",
          "En los meses siguientes, la mesa del estudio se pobló de notas para el aire. Las personas que pasaban por la ventana dejaban mensajes doblados en dos. El equipo separaba los avisos breves de las historias que merecían sentarse a conversar.",
        ],
      },
      {
        heading: "Un archivo de voces cercanas",
        paragraphs: [
          "Antes de grabar, preguntaban a cada persona si quería que su voz quedara en el archivo. Algunas preferían leer el mensaje de otra manera o escuchar la grabación primero. Esa pausa terminó formando parte del programa, igual que bajar el volumen cuando alguien se alejaba del micrófono.",
          "Una tarde se cortó la transmisión y el equipo siguió conversando con la ventana abierta. Desde la calle se escuchaba lo suficiente para acercarse. El siguiente programa comenzó con quienes habían estado ahí, contando su versión de aquella emisión que solo oyó la cuadra.",
        ],
      },
    ],
  },
  {
    slug: "un-archivo-que-se-pueda-abrir",
    title: "Un archivo que se pueda abrir",
    summary: "La importancia de dejar nombres legibles y contexto junto a los archivos que queremos conservar.",
    category: "tecnologia",
    author: "ines",
    published: "2026-11-12",
    sections: [
      {
        heading: "El disco del cajón",
        paragraphs: [
          "El disco del taller contenía doce carpetas llamadas final. Sabíamos que allí estaban las grabaciones de un ciclo de lectura, pero solo dos personas podían identificar la fecha de cada sesión. Una de ellas reconoció el ruido de una persiana al comienzo de un audio y recordó que ese día había llovido. Esa pista ayudó a recuperar la secuencia.",
          "Empezamos a escribir la fecha y el nombre de la actividad en cada carpeta. En un documento breve dejamos constancia de quién podía compartir las grabaciones y qué permisos había dado cada participante.",
        ],
      },
      {
        heading: "El ensayo de recuperación",
        paragraphs: [
          "Pedimos a alguien ajeno al taller que encontrara la segunda lectura sin hacer preguntas. Localizó el archivo, aunque tardó en distinguir la grabación completa del fragmento para difusión. Cambiamos esos nombres y repetimos el ejercicio. La segunda vez encontró ambos a la primera.",
          "La prueba más provechosa fue copiar el archivo a otra computadora y abrirlo desde ahí. Así aparecieron enlaces rotos que en el equipo original funcionaban por casualidad. Dejamos instrucciones junto a los datos, donde alguien pueda leerlas incluso si el programa que usábamos desaparece.",
        ],
      },
    ],
  },
  {
    slug: "los-margenes-tambien-se-leen",
    title: "Los márgenes también se leen",
    summary: "Anotaciones al borde de la página y otras maneras de dejar espacio para quien lee.",
    category: "diseno",
    author: "teo",
    published: "2026-11-10",
    sections: [
      {
        heading: "La página anotada",
        paragraphs: [
          "De un cuaderno prestado recordaba el margen de la página doce. Allí alguien había copiado dos líneas del texto y dejado una pregunta junto al número de página. Volví al cuaderno para buscar la frase original y terminé leyendo la nota como una segunda entrada al capítulo.",
          "En un club de lectura observamos dónde escribía la gente. Algunas personas preferían los espacios exteriores, otras el borde de abajo. Cuando el texto llegaba casi hasta el corte, el comentario acababa en un papel suelto que pronto perdía su lugar.",
        ],
      },
      {
        heading: "Un lugar para volver",
        paragraphs: [
          "En la siguiente edición ensanchamos el margen exterior y ajustamos el ancho del renglón. Las personas encontraron dónde anotar, y las líneas más cortas también hicieron más fácil retomar la lectura después de una pausa. Conservamos una página de prueba con las marcas hechas durante el ejercicio.",
          "En pantalla, la misma decisión se traduce en columnas de lectura acotadas y notas cerca del párrafo al que pertenecen. Cada medio ofrece maneras distintas de reservar ese espacio. La pregunta que nos quedó fue cuánto sitio dejamos para las palabras que llegarán después.",
        ],
      },
    ],
  },
  {
    slug: "el-inventario-de-los-domingos",
    title: "El inventario de los domingos",
    summary: "Un mercado de objetos usados y las historias que cambian de manos con cada compra.",
    category: "cultura",
    author: "mara",
    published: "2026-11-08",
    sections: [
      {
        heading: "Objetos sobre la lona",
        paragraphs: [
          "Cada domingo, una vendedora coloca una pequeña lámpara de escritorio en la misma esquina de su lona. La enciende con una extensión para que se vea que todavía funciona. Entre los objetos que pasan más rápido por el puesto están las tazas y las herramientas. La lámpara lleva allí tres semanas.",
          "Un visitante pregunta por la pantalla verde. La vendedora cuenta que llegó en una mudanza con un cuaderno de cuentas y una caja de botones. Él vuelve un rato después con una bombilla nueva para comprobar si alumbra lo suficiente para su mesa.",
        ],
      },
      {
        heading: "Lo que sigue en uso",
        paragraphs: [
          "Pregunté durante un mes para qué usaría la gente lo que se llevaba. Un marco encontró sitio en una ventana, dos azulejos sirvieron de base para una cafetera y un perchero terminó en un taller de bicicletas. Cada respuesta añadía un capítulo que el antiguo dueño difícilmente habría previsto.",
          "El último domingo, el puesto tenía una extensión enrollada y un hueco en la esquina. La historia de la lámpara ya no dependía de quien la vendía. Iba a empezar de nuevo en un escritorio, a una altura calculada para leer cómodamente de noche.",
        ],
      },
    ],
  },
];

const dateFormat = new Intl.DateTimeFormat("es-MX", {
  dateStyle: "long",
  timeZone: "UTC",
});

export function authorName(article: Article) {
  return authors[article.author].name;
}

export function publishedDate(article: Article) {
  return dateFormat.format(new Date(article.published));
}

export function readingMinutes(article: Article) {
  const words = article.sections.flatMap(({ paragraphs }) => paragraphs).join(" ").split(/\s+/u).length;
  return Math.max(1, Math.ceil(words / 200));
}

function normalizeSearch(text: string) {
  return text.toLocaleLowerCase("es-MX").normalize("NFD").replace(/\p{M}/gu, "");
}

export function searchArticles(query: string) {
  const terms = normalizeSearch(query).trim().split(/\s+/u);
  return articles.filter((article) => {
    const text = normalizeSearch([
      article.title,
      article.summary,
      authorName(article),
      categories[article.category].label,
      ...article.sections.flatMap(({ heading, paragraphs }) => [heading, ...paragraphs]),
    ].join(" "));
    return terms.every((term) => text.includes(term));
  });
}

export function relatedArticles(article: Article) {
  const otherArticles = articles.filter(({ slug }) => slug !== article.slug);
  return [
    ...otherArticles.filter(({ category }) => category === article.category),
    ...otherArticles.filter(({ category }) => category !== article.category),
  ].slice(0, 2);
}
