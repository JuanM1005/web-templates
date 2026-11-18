# Interlínea

Revista digital ficticia sobre tecnología, diseño y cultura. La primera edición incluye seis artículos completos, una portada editorial y tres imágenes originales de ejemplo.

## Desde la raíz del monorepositorio

```sh
bun install --frozen-lockfile
bun run dev:digital-magazine
bun run check:digital-magazine
bun run build:digital-magazine
```

La plantilla también se comprueba con `bun run check` y `bun run build` desde la raíz.

## Como proyecto independiente

Copia esta carpeta fuera del monorepositorio y ejecuta dentro de la copia:

```sh
bun install
bun run dev
bun run typecheck
bun run build
```

Abre la dirección que indica Bun, normalmente `http://localhost:3000`. Para publicar la revista, sirve el contenido de `dist/` con un alojamiento estático. Los enlaces como `#/articulo/la-ciudad-en-modo-avion` usan el fragmento de la URL, funcionan al recargar y prescinden de reglas de redirección.

## Personalización

- Edita `src/content.ts` para cambiar autores, categorías y artículos. Dale a cada artículo un `slug` único, una fecha `AAAA-MM-DD` y al menos una sección con texto. Ordena los artículos del más reciente al más antiguo y cambia `coverArticleSlug` para elegir la portada.
- Agrega imágenes en `src/assets/`, impórtalas desde `src/content.ts` y escribe un texto alternativo descriptivo. El diseño admite artículos con y sin imagen.
- Edita `src/App.tsx` y `src/Home.tsx` para actualizar el nombre o los datos visibles de la edición. Actualiza también el título y la descripción en `index.html`.
- Modifica los tokens `@theme` de `src/styles.css` para adaptar colores y tipografía. Las variables de `:root` controlan el ancho y los márgenes de la retícula.

La búsqueda trabaja sobre el contenido, los títulos, las categorías y los autores. Ignora mayúsculas y acentos. Los relacionados priorizan artículos de la misma categoría y excluyen el que se está leyendo. Los favoritos se guardan en `localStorage` bajo la clave `interlinea:favorites`. Si el navegador impide escribir allí, permanecen disponibles durante la visita. El indicador de lectura sigue el desplazamiento por el artículo y se reinicia al abrir otro.

## Versiones

Versiones estables verificadas el 18 de noviembre de 2026.

| Tecnología | Versión | Fuente oficial |
| --- | --- | --- |
| React y React DOM | 19.3.1 | [React](https://github.com/react/react/releases/tag/v19.3.1) |
| TypeScript | 7.0.2 en modo estricto | [TypeScript](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2) |
| Tailwind CSS | 4.3.5 | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5) |
| Bun | 1.4.4 estable. Validación local con 1.4.3. | [Bun](https://github.com/oven-sh/bun/releases/tag/bun-v1.4.4) |

`bun-plugin-tailwind` 0.1.2 integra Tailwind tanto en desarrollo como en el build según la [documentación de Bun](https://bun.com/docs/bundler/html-static#tailwind-css). Usa un navegador moderno compatible con [Tailwind CSS 4](https://tailwindcss.com/docs/compatibility).

## Imágenes de la edición

Se generaron con ImageGen integrado y se guardaron como JPEG locales.

- `src/assets/city.jpg` muestra una pasarela peatonal de concreto sobre una calle al anochecer. La indicación pidió encuadre horizontal, perspectiva arquitectónica, luces ámbar y grano de película de 35 mm.
- `src/assets/paper.jpg` muestra pruebas de impresión rojas y claras sobre una mesa de trabajo. La indicación pidió un plano macro horizontal, luz de costado y fibras de papel visibles.
- `src/assets/radio.jpg` muestra un estudio de radio de barrio a través de la ventana. La indicación pidió encuadre horizontal, micrófono y mesa de mezclas con luz cálida y grano analógico.
