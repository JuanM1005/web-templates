# Alinea

Landing page en español para un SaaS ficticio de gestión de proyectos. Incluye un tablero de ejemplo, precios en MXN con facturación mensual y anual, preguntas frecuentes y un formulario que simula el envío en el navegador.

## Desde la raíz del monorepositorio

```sh
bun install --frozen-lockfile
bun run dev:saas-landing
bun run check:saas-landing
bun run build:saas-landing
```

Alinea también se ejecuta con las comprobaciones generales `bun run check` y `bun run build`.

## Como proyecto independiente

Copia esta carpeta fuera del monorepositorio y ejecuta desde la copia:

```sh
bun install
bun run dev
bun run typecheck
bun run build
```

Abre la dirección que imprime Bun, normalmente `http://localhost:3000/`. El build genera `dist/`, lista para alojarse en un servidor estático.

## Personalización

- Edita `src/data.ts` para cambiar las tareas de ejemplo, los enlaces, las funciones, los beneficios, los planes y las preguntas.
- Edita `src/App.tsx` para adaptar el mensaje inicial y ordenar las secciones. `src/Header.tsx` contiene la marca y la navegación.
- Cambia la paleta, la tipografía de sistema y los espaciados en los bloques `@theme` y `:root` de `src/styles.css`. El tablero se construye en HTML en `src/ProductPreview.tsx`.
- Actualiza el título y la descripción pública en `index.html`.

Los precios son ilustrativos. La vista anual muestra el equivalente mensual y el total anual por persona. Los enlaces de cada plan solo preseleccionan una opción en el formulario. La validación y la confirmación del formulario son locales y el envío simulado restablece los campos.

## Versiones

Versiones estables verificadas el 18 de noviembre de 2026.

| Tecnología | Versión | Fuente |
| --- | --- | --- |
| React y React DOM | 19.3.1 | [React](https://github.com/react/react/releases/tag/v19.3.1) |
| TypeScript | 7.0.2, con modo estricto | [TypeScript](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2) |
| Tailwind CSS | 4.3.5 | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5) |
| Bun | 1.4.4 recomendada. Verificación local con 1.4.3. | [Bun](https://github.com/oven-sh/bun/releases/tag/bun-v1.4.4) |

Bun gestiona la instalación, sirve el HTML en desarrollo y compila la salida estática. Se usa `bun-plugin-tailwind` 0.1.2 en ambos modos, siguiendo la [integración de Tailwind documentada por Bun](https://bun.com/docs/bundler/html-static#tailwind-css). Usa un navegador moderno compatible con [Tailwind CSS 4](https://tailwindcss.com/docs/compatibility).
