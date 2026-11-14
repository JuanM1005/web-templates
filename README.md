# Web Templates Library

Repositorio de servicio social de Juan y Eriberto para construir una biblioteca de cuatro plantillas web independientes. Las implementaciones principales pueden convivir con propuestas alternativas dentro de subcarpetas versionadas como `v2`, evitando sobrescribir el trabajo de cada integrante.

## Objetivo

Crear, documentar y revisar cuatro plantillas reutilizables: industrial/corporativa, comercio electrónico/catálogo, eventos/conferencias y portafolio profesional. La plantilla industrial será el piloto; las demás se desarrollarán después de revisarlo. El alcance y los criterios de entrega están en [PLANIFICACION.md](./PLANIFICACION.md), que sigue siendo un borrador con decisiones pendientes.

## Tecnologías previstas

- React para las interfaces.
- TypeScript para el código de las plantillas.
- Tailwind CSS v4 o la versión estable más reciente compatible para los estilos.
- Bun para gestionar dependencias y workspaces; también para ejecución y compilación cuando se implemente cada plantilla.
- Git y GitHub para colaboración y revisión.

Las versiones concretas se verificarán en la documentación oficial y se registrarán antes de instalarlas. Por ahora no hay dependencias ni comandos de desarrollo o compilación.

## Estructura

```text
web-templates/
├── templates/
│   ├── industrial/
│   │   └── v2/
│   ├── ecommerce/
│   │   └── v2/
│   ├── events/
│   │   └── v2/
│   └── portfolio/
├── docs/
│   ├── architecture.md
│   ├── conventions.md
│   └── roadmap.md
├── .github/PULL_REQUEST_TEMPLATE.md
├── .gitignore
├── package.json
├── PLANIFICACION.md
└── README.md
```

Las carpetas principales quedan disponibles para las versiones base revisadas por el equipo. Las propuestas alternativas industrial, e-commerce y eventos viven en sus respectivas carpetas `v2`, con código, instrucciones e identidad visual independientes.

## Vista previa rápida

Desde la raíz `web-templates`, ejecuta:

```bash
bun run dev:industrial-v2
```

Después abre la dirección que aparece en la terminal, normalmente [http://localhost:3000](http://localhost:3000). El enlace solo funciona mientras el comando siga ejecutándose. Para detener el servidor usa `Ctrl + C`.

También puedes comprobar y compilar la plantilla desde la raíz:

```bash
bun run check:industrial-v2
bun run build:industrial-v2
```

Los comandos equivalentes para las demás plantillas son:

```bash
bun run dev:ecommerce-v2
bun run dev:events-v2
bun run dev:portfolio
```

Para revisar o compilar las cuatro de una vez:

```bash
bun run check:v2
bun run build:v2
```

## Organización del trabajo

La propuesta inicial asigna industrial y eventos a Juan, con revisión de Eriberto; e-commerce y portafolio a Eriberto, con revisión de Juan. El trabajo usará tareas pequeñas, ramas cortas y solicitudes de revisión cruzada. `main` es la única rama permanente prevista. Esta distribución es una propuesta del plan, no una aprobación formal.

Consulta [arquitectura](./docs/architecture.md), [convenciones](./docs/conventions.md) y [hoja de ruta](./docs/roadmap.md) para conocer el avance y los siguientes pasos.
