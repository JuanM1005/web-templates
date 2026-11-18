# Umbral

Portal inmobiliario de demostración con casas, departamentos y lofts de arquitectura contemporánea. Los inmuebles, zonas, precios y superficies son ficticios y no incluyen direcciones privadas ni datos de propietarios.

## Desde la raíz del monorepositorio

```sh
bun install --frozen-lockfile
bun run dev:real-estate
bun run check:real-estate
bun run build:real-estate
```

Umbral también forma parte de `bun run check` y `bun run build`.

## Como proyecto independiente

Copia esta carpeta fuera del monorepositorio y ejecuta dentro de la copia:

```sh
bun install
bun run dev
bun run typecheck
bun run build
```

Abre la dirección que imprime Bun, normalmente `http://localhost:3000/`. El build genera `dist/`, que puedes servir en cualquier alojamiento estático. Las fichas como `#/propiedad/casa-del-patio` usan el fragmento de la URL, así que se pueden compartir y recargar sin reglas de redirección.

## Funciones locales

- La búsqueda compara palabras de la ciudad o zona sin distinguir mayúsculas ni acentos. El catálogo combina tipo, precio máximo y todas las características seleccionadas.
- Los precios son de venta y se muestran en pesos mexicanos. El orden editorial sigue el orden de los datos. También puedes ordenar por precio o superficie.
- Los favoritos se guardan en `localStorage` con la clave `umbral:favorites`. Si no está disponible, funcionan en memoria durante la visita.
- El comparador admite hasta tres propiedades, conserva el orden de selección y se reinicia al recargar. En pantallas pequeñas, la tabla se desplaza horizontalmente.
- La ficha puede preseleccionar una propiedad en el formulario. La validación es local, el envío se simula y el formulario no transmite ni guarda los datos ingresados.

## Personalización

- Edita `src/data.ts` para cambiar propiedades, características y nombres de zonas. Cada inmueble requiere un identificador único, precio numérico en MXN y al menos una fotografía con texto alternativo. Marca con `featured` los inmuebles que quieras mostrar en la portada. El primero de ellos aporta la imagen principal.
- Ajusta las opciones de presupuesto en `src/Catalog.tsx` y los criterios de búsqueda u orden en `src/filtering.ts`.
- Cambia la portada en `src/Home.tsx`, los metadatos en `index.html` y los colores, tipografías, márgenes y radios en `src/styles.css`.

## Imágenes

Los JPEG de `src/assets/` se generaron con ImageGen integrado para esta plantilla. El encargo fue crear pares de fotografías de arquitectura mexicana contemporánea, con luz natural, encuadres horizontales y sin personas, letreros, marcas ni inmuebles reconocibles. Se exportó cada escena como un JPEG local. El portal no usa fotos de terceros ni carga imágenes desde servicios externos.

| Archivos | Escenas solicitadas |
| --- | --- |
| `patio-1.jpg`, `patio-2.jpg` | Casa caliza en L con olivo y sala de roble abierta al patio |
| `ladera-1.jpg`, `ladera-2.jpg` | Casa de madera y concreto en pendiente, escalera interior con ventana al bosque |
| `lucerna-1.jpg`, `lucerna-2.jpg` | Sala con biblioteca y marcos verdes, cocina de nogal con suelo de terrazo |
| `olmo-1.jpg`, `olmo-2.jpg` | Terraza con macetas de barro y vista a azoteas, sala con tapicería verde oliva |
| `arcilla-1.jpg`, `arcilla-2.jpg` | Loft de ladrillo y vigas vistas, cocina con azulejos rojizos |

Si sustituyes las imágenes, usa recursos propios o con licencia para el destino previsto y registra su origen.

## Versiones

Versiones estables verificadas el 18 de noviembre de 2026.

| Tecnología | Versión | Fuente oficial |
| --- | --- | --- |
| React y React DOM | 19.3.1 | [React](https://github.com/react/react/releases/tag/v19.3.1) |
| TypeScript | 7.0.2 en modo estricto | [TypeScript](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2) |
| Tailwind CSS | 4.3.5 | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5) |
| Bun | 1.4.4 estable. Validación local con 1.4.3. | [Bun](https://github.com/oven-sh/bun/releases/tag/bun-v1.4.4) |

`bun-plugin-tailwind` 0.1.2 integra Tailwind en desarrollo y producción según la [documentación de Bun](https://bun.com/docs/bundler/html-static#tailwind-css). Usa un navegador moderno compatible con [Tailwind CSS 4](https://tailwindcss.com/docs/compatibility).
