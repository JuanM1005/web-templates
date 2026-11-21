export interface Product {
  id: string;
  name: string;
  category: "Iluminación" | "Mobiliario" | "Accesorios" | "Escritorio";
  price: number;
  stock: "En existencia" | "Últimas piezas";
  shortDesc: string;
  details: string;
  dimensions: string;
  materials: string;
  imageAlt: string;
}

export const storeInfo = {
  name: "Kanso Estudio",
  tagline: "Objetos funcionales y mobiliario para espacios de trabajo serenos",
  currency: "MXN",
};

export const products: Product[] = [
  {
    id: "prod-lampara-arco",
    name: "Lámpara de Escritorio Nori",
    category: "Iluminación",
    price: 1850,
    stock: "En existencia",
    shortDesc:
      "Luz cálida regulable con brazo articulado de aluminio anodizado.",
    details:
      "Diseñada para largas jornadas de lectura o programación sin fatiga visual. Incluye regulador táctil de 3 niveles de intensidad.",
    dimensions: "42 × 18 × 45 cm",
    materials: "Aluminio reciclado y difusor de policarbonato mate",
    imageAlt:
      "Lámpara minimalista de aluminio negro sobre escritorio de madera",
  },
  {
    id: "prod-silla-ergo",
    name: "Silla Operativa Sori",
    category: "Mobiliario",
    price: 6400,
    stock: "En existencia",
    shortDesc: "Soporte lumbar adaptable y malla transpirable de alta tensión.",
    details:
      "Estructura ergonómica con ajuste de altura, profundidad de asiento y reposabrazos 3D para adaptarse a distintas posturas.",
    dimensions: "65 × 65 × 102 cm",
    materials: "Polímero técnico, malla tejida y base de acero",
    imageAlt: "Silla ergonómica de oficina en tono gris piedra",
  },
  {
    id: "prod-soporte-roble",
    name: "Elevador de Monitor en Roble",
    category: "Escritorio",
    price: 1290,
    stock: "Últimas piezas",
    shortDesc:
      "Plataforma sólida para elevar la pantalla y organizar el teclado.",
    details:
      "Mejora la postura cervical elevando el monitor 10 cm e incorpora una bandeja inferior para guardar periféricos.",
    dimensions: "54 × 23 × 10 cm",
    materials: "Madera de roble certificada con acabado de cera natural",
    imageAlt: "Base elevadora de madera de roble para monitor de computadora",
  },
  {
    id: "prod-organizador-fieltro",
    name: "Bandeja Modular de Fieltro",
    category: "Accesorios",
    price: 580,
    stock: "En existencia",
    shortDesc: "Compartimentos suaves para cables, plumas y dispositivos.",
    details:
      "Absorbe el ruido al colocar objetos metálicos o llaves y mantiene la superficie de trabajo libre de rayaduras.",
    dimensions: "28 × 16 × 4 cm",
    materials: "Fieltro prensado de lana merino de 4 mm",
    imageAlt: "Bandeja organizadora de fieltro gris con compartimentos",
  },
  {
    id: "prod-mesa-auxiliar",
    name: "Mesa Auxiliar Tetsu",
    category: "Mobiliario",
    price: 3200,
    stock: "Últimas piezas",
    shortDesc: "Superficie compacta en acero plegado para lectura o café.",
    details:
      "Su geometría en voladizo permite acercarla a sillones o camas ocupando el mínimo espacio en el piso.",
    dimensions: "40 × 35 × 55 cm",
    materials:
      "Lámina de acero al carbón con pintura electrostática texturizada",
    imageAlt: "Mesa lateral compacta de acero color verde bosque",
  },
  {
    id: "prod-tapete-escritorio",
    name: "Tapete de Escritorio Lino & Corcho",
    category: "Escritorio",
    price: 790,
    stock: "En existencia",
    shortDesc: "Superficie cálida y antideslizante para teclado y ratón.",
    details:
      "Combina una cara superior de lino natural de deslizamiento preciso con una base de corcho portugués biodegradable.",
    dimensions: "80 × 40 × 0.4 cm",
    materials: "Lino orgánico impermeabilizado y corcho natural",
    imageAlt:
      "Tapete rectangular para escritorio con textura de lino y base de corcho",
  },
];
