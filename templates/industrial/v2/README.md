# Plantilla Industrial / Corporativa

Sitio institucional demostrativo para una empresa de ingeniería industrial. Incluye presentación, mapa de soluciones, servicios, proyectos filtrables, capacidades, proveedores ficticios, preguntas frecuentes y formulario de contacto simulado.

Todos los datos de **Norte Ingeniería**, sus indicadores y proyectos son ficticios. El formulario no envía ni guarda información fuera del navegador.

## Ejecutar de forma independiente

Desde la raíz `web-templates`, la forma más sencilla es:

```bash
bun run dev:industrial-v2
```

Abre la dirección indicada en la terminal, normalmente `http://localhost:3000`. Debes dejar esa terminal ejecutándose mientras revisas el sitio.

Si el servidor ya estaba abierto antes de instalar o configurar la plantilla, detenlo con `Ctrl + C` y vuelve a ejecutar el comando para que Bun cargue `bunfig.toml` y procese Tailwind CSS.

También puede iniciarse directamente desde la carpeta de la plantilla:

```bash
cd templates/industrial/v2
bun install
bun run dev
```

Para generar la versión de producción:

```bash
bun run typecheck
bun run build
```

## Personalización

- Cambia el contenido de servicios, capacidades y casos en `src/data.ts`.
- Cambia el nombre, textos y estructura de secciones en `src/App.tsx`.
- Ajusta la paleta industrial y tipografía en las variables de `src/styles.css`.
- Sustituye los casos ficticios por información aprobada antes de publicar una versión real.

Para una futura adaptación corporativa consulta [GUIA-ADAPTACION-PRIVADA.md](./GUIA-ADAPTACION-PRIVADA.md). La marca, propuesta, métricas y textos principales ya están centralizados en `src/data.ts` para facilitar el cambio.

## Verificación prevista

- Navegación por anclas y salto directo al contenido.
- Filtros de proyectos operables con teclado y estado seleccionado expuesto.
- Formulario local con validación nativa y confirmación explícita de la simulación.
