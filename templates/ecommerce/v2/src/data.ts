export type ProductCategory = "Mesa" | "Iluminación" | "Textiles";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  material: string;
  description: string;
  dimensions: string;
  stock: number;
  color: string;
  accent: string;
  label?: string;
}

export const products: Product[] = [
  { id: "cuenco", name: "Cuenco Origen", category: "Mesa", price: 680, material: "Barro bruñido", description: "Pieza de mesa de perfil bajo, terminada a mano y pensada para servir o acompañar objetos cotidianos.", dimensions: "Ø 24 × 7 cm", stock: 4, color: "#c66748", accent: "#efd4c7", label: "Edición corta" },
  { id: "lampara", name: "Lámpara Alba", category: "Iluminación", price: 2490, material: "Acero y papel", description: "Luz ambiental de sobremesa con pantalla difusora y base metálica de geometría contenida.", dimensions: "32 × 18 × 18 cm", stock: 7, color: "#d6a92a", accent: "#f1e2a7", label: "Nuevo" },
  { id: "manta", name: "Manta Sierra", category: "Textiles", price: 1350, material: "Algodón tejido", description: "Textil ligero de trama visible para sofá o pie de cama, con tacto suave y bordes contrastantes.", dimensions: "130 × 180 cm", stock: 9, color: "#526b61", accent: "#cbd8d0" },
  { id: "jarra", name: "Jarra Umbral", category: "Mesa", price: 920, material: "Cerámica esmaltada", description: "Jarra de silueta amplia con esmalte satinado, adecuada para agua, flores o como pieza central.", dimensions: "1.2 L · 22 cm", stock: 5, color: "#446a82", accent: "#ccdde6" },
  { id: "aplique", name: "Aplique Nube", category: "Iluminación", price: 1780, material: "Vidrio opalino", description: "Aplique compacto que proyecta una iluminación suave y uniforme en recibidores o dormitorios.", dimensions: "Ø 21 × 12 cm", stock: 3, color: "#6b5a76", accent: "#ded2e3" },
  { id: "cojin", name: "Cojín Trama", category: "Textiles", price: 740, material: "Lino lavado", description: "Cojín de lino con textura irregular, cierre oculto y relleno removible para uso cotidiano.", dimensions: "50 × 50 cm", stock: 12, color: "#b14f3e", accent: "#eccdc6" },
];

export const categories: Array<"Todos" | ProductCategory> = ["Todos", "Mesa", "Iluminación", "Textiles"];
