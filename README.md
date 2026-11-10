# Web Templates Library

Repositorio de servicio social de Juan y Eriberto para preparar una biblioteca de cuatro plantillas web independientes. El proyecto está en **Etapa 1: convenciones y base técnica**. Todavía no contiene interfaces, código de plantillas ni dependencias de React.

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
│   ├── ecommerce/
│   ├── events/
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

Las carpetas de `templates/` solo contienen `.gitkeep` para que Git pueda conservarlas. `bun.lock` se generará con Bun cuando exista una instalación justificada de dependencias.

## Organización del trabajo

La propuesta inicial asigna industrial y eventos a Juan, con revisión de Eriberto; e-commerce y portafolio a Eriberto, con revisión de Juan. El trabajo usará tareas pequeñas, ramas cortas y solicitudes de revisión cruzada. `main` es la única rama permanente prevista. Esta distribución es una propuesta del plan, no una aprobación formal.

Consulta [arquitectura](./docs/architecture.md), [convenciones](./docs/conventions.md) y [hoja de ruta](./docs/roadmap.md) antes de iniciar la plantilla piloto.
