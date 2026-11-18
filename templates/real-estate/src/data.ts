import patioFront from "./assets/patio-1.jpg";
import patioInside from "./assets/patio-2.jpg";
import laderaFront from "./assets/ladera-1.jpg";
import laderaInside from "./assets/ladera-2.jpg";
import lucernaLiving from "./assets/lucerna-1.jpg";
import lucernaKitchen from "./assets/lucerna-2.jpg";
import olmoTerrace from "./assets/olmo-1.jpg";
import olmoLiving from "./assets/olmo-2.jpg";
import arcillaLiving from "./assets/arcilla-1.jpg";
import arcillaKitchen from "./assets/arcilla-2.jpg";

export const propertyTypes = ["Casa", "Departamento", "Loft"] as const;
export type PropertyType = typeof propertyTypes[number];

export const features = ["Jardín", "Terraza", "Estacionamiento", "Estudio"] as const;
export type Feature = typeof features[number];

export interface PropertyPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  district: string;
  city: string;
  price: number;
  bedrooms: number;
  baths: number;
  area: number;
  features: Feature[];
  description: string;
  photos: [PropertyPhoto, ...PropertyPhoto[]];
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: "casa-del-patio",
    name: "Casa del Patio",
    type: "Casa",
    district: "Barrio de los Sauces",
    city: "Valle de Bruma",
    price: 6450000,
    bedrooms: 3,
    baths: 2,
    area: 216,
    features: ["Jardín", "Terraza", "Estacionamiento"],
    description: "Dos alas de piedra caliza rodean un patio arbolado. La sala y el comedor se abren al jardín con puertas corredizas. Las recámaras quedan al otro lado del patio para darles luz y privacidad.",
    photos: [
      { src: patioFront, alt: "Residencia baja de piedra caliza alrededor de un patio con un olivo.", caption: "Patio de acceso" },
      { src: patioInside, alt: "Sala de tonos neutros con carpintería de roble y ventanas hacia el patio.", caption: "Estancia principal" },
    ],
    featured: true,
  },
  {
    id: "departamento-lucerna",
    name: "Departamento Lucerna",
    type: "Departamento",
    district: "Distrito del Fresno",
    city: "Valle de Bruma",
    price: 3950000,
    bedrooms: 2,
    baths: 2,
    area: 97,
    features: ["Estudio", "Estacionamiento"],
    description: "Un rincón de lectura orientado al norte recibe luz constante. La cocina, con carpintería de nogal, se integra con la estancia. Una segunda recámara puede funcionar como espacio de trabajo independiente.",
    photos: [
      { src: lucernaLiving, alt: "Sala de estar con libreros de madera y marcos verdes en las ventanas.", caption: "Sala y biblioteca" },
      { src: lucernaKitchen, alt: "Cocina de nogal iluminada por el sol sobre un piso de terrazo.", caption: "Cocina" },
    ],
    featured: true,
  },
  {
    id: "casa-ladera",
    name: "Casa Ladera",
    type: "Casa",
    district: "Bosques de Umbría",
    city: "Valle de Bruma",
    price: 7900000,
    bedrooms: 4,
    baths: 3,
    area: 262,
    features: ["Jardín", "Estacionamiento", "Estudio"],
    description: "Una casa de dos plantas sigue la pendiente del terreno. Los volúmenes de madera y concreto dejan espacio para un jardín de helechos. El estudio mira hacia las copas de los árboles.",
    photos: [
      { src: laderaFront, alt: "Casa de concreto y madera oscura en una pendiente cubierta de vegetación.", caption: "Fachada hacia el jardín" },
      { src: laderaInside, alt: "Escalera de concreto y madera junto a una ventana con vista a los árboles.", caption: "Escalera interior" },
    ],
  },
  {
    id: "terraza-del-olmo",
    name: "Terraza del Olmo",
    type: "Departamento",
    district: "Paseo del Níspero",
    city: "Puerto Jacaranda",
    price: 3180000,
    bedrooms: 2,
    baths: 1,
    area: 82,
    features: ["Terraza", "Estacionamiento"],
    description: "La estancia se prolonga en una terraza desde la que se ven las azoteas del barrio. Las jardineras de barro y los muros claros acompañan una distribución compacta, atravesada por luz natural.",
    photos: [
      { src: olmoTerrace, alt: "Terraza con baranda verde, jardineras de barro y vista a las azoteas.", caption: "Terraza" },
      { src: olmoLiving, alt: "Sala luminosa con muros claros y un asiento verde oliva.", caption: "Sala" },
    ],
  },
  {
    id: "loft-arcilla",
    name: "Loft Arcilla",
    type: "Loft",
    district: "Antiguos Talleres",
    city: "Puerto Jacaranda",
    price: 2480000,
    bedrooms: 1,
    baths: 1,
    area: 64,
    features: ["Estudio"],
    description: "Un antiguo taller se convierte en vivienda de una sola planta. El ladrillo, las vigas y las ventanas altas conservan la escala del espacio original. La planta abierta permite combinar sala y estudio.",
    photos: [
      { src: arcillaLiving, alt: "Loft de ladrillo con grandes ventanales y vigas de madera visibles.", caption: "Estancia de doble altura" },
      { src: arcillaKitchen, alt: "Cocina con azulejos rojizos y mesa de madera.", caption: "Cocina y comedor" },
    ],
  },
];

export const formatPrice = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
}).format;

export function propertyLocation(property: Property) {
  return `${property.district}, ${property.city}`;
}

export function propertyLink(id: string) {
  return `#/propiedad/${id}`;
}
