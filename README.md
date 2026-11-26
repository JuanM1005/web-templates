# Web Templates Library

Repositorio de servicio social de Juan y Eriberto para construir, documentar y revisar una biblioteca de plantillas web independientes y reutilizables.

## Estado actual (`develop`)

El repositorio ha evolucionado más allá de las cuatro plantillas iniciales del MVP y actualmente cuenta con **15 plantillas funcionales** dentro del directorio `templates/`, además de variantes aisladas (`v2`) que permiten convivir propuestas alternativas sin sobrescribir las implementaciones base.

Todas las plantillas cuentan con:

- Diseño responsivo adaptado a móvil, tableta y escritorio.
- HTML semántico y controles accesibles para navegación por teclado.
- Datos demostrativos aislados y avisos explícitos en funciones simuladas sin backend.
- Configuración autónoma para desarrollo, verificación de tipos y compilación de producción.

## Tecnologías utilizadas

- **React 19** para la construcción de interfaces.
- **TypeScript** con modo estricto (`tsc --noEmit`) para seguridad de tipos.
- **Tailwind CSS v4** para estilos y tokens visuales personalizables.
- **Bun** como entorno de ejecución, gestor de dependencias y empaquetador.
- **Git y GitHub** para control de versiones en ramas cortas y revisión cruzada.

## Estructura del repositorio

```text
web-templates/
├── templates/
│   ├── industrial/                  # Plantilla piloto industrial / corporativa
│   │   └── v2/                      # Variante alternativa aislada
│   ├── ecommerce/                   # Catálogo de productos y carrito simulado
│   │   └── v2/                      # Variante alternativa aislada
│   ├── events/                      # Conferencias, ponentes y agenda por día
│   │   └── v2/                      # Variante alternativa aislada
│   ├── portfolio/                   # Portafolio profesional y casos de estudio
│   ├── saas-landing/                # Landing demostrativa para SaaS (Alinea)
│   ├── real-estate/                 # Catálogo inmobiliario con filtros y comparador
│   ├── operations-dashboard/        # Panel operativo con métricas y actividad
│   ├── digital-magazine/            # Revista digital editorial con favoritos
│   ├── professional-association/    # Portal institucional, autenticación y cuenta
│   ├── industrial-supplier/         # Proveedor de equipamiento y servicios técnicos
│   ├── bakery/                      # Panadería artesanal y escaparate móvil
│   ├── pizzeria/                    # Pizzería con personalizador y carrito accesible
│   ├── service-business/            # Negocio local de servicios y reservaciones
│   ├── services-portal/             # Portal de servicios digitales
│   ├── health-portal/               # Portal informativo y citas de salud
│   ├── education/                   # Plataforma de cursos y catálogo educativo
│   ├── community/                   # Comunidad social y publicaciones
│   ├── gallery/                     # Galería visual y exhibición de obras
│   └── music/                       # Plataforma musical y reproducción demostrativa
├── docs/
│   ├── architecture.md              # Principios de arquitectura e independencia
│   ├── conventions.md               # Convenciones de código, ramas y accesibilidad
│   └── roadmap.md                   # Hoja de ruta y evolución del proyecto
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md     # Plantilla estándar para revisiones
├── .gitignore
├── bun.lock
├── package.json
├── PLANIFICACION.md
└── README.md
```

## Catálogo de plantillas

| Plantilla                    | Ruta                                 |  Variantes  | Descripción breve                                                                 |
| :--------------------------- | :----------------------------------- | :---------: | :-------------------------------------------------------------------------------- |
| **Industrial / Corporativa** | `templates/industrial`               | Base + `v2` | Sitio institucional de ingeniería, servicios, filtro de proyectos y cotizaciones. |
| **E-commerce / Catálogo**    | `templates/ecommerce`                | Base + `v2` | Tienda con búsqueda, filtros por categoría, ficha técnica y bolsa simulada.       |
| **Eventos / Conferencias**   | `templates/events`                   | Base + `v2` | Cumbre tecnológica con ponentes, agenda filtrable por día y registro de pases.    |
| **Portafolio Profesional**   | `templates/portfolio`                |    Base     | Perfil profesional, proyectos filtrables, trayectoria y contacto simulado.        |
| **SaaS Landing (Alinea)**    | `templates/saas-landing`             |    Base     | Página de producto SaaS con vista previa, planes de precios y contacto.           |
| **Bienes Raíces**            | `templates/real-estate`              |    Base     | Catálogo de propiedades con filtros avanzados, detalle y comparador.              |
| **Dashboard Operativo**      | `templates/operations-dashboard`     |    Base     | Tablero de monitoreo con métricas, registro de actividad y preferencias.          |
| **Revista Digital**          | `templates/digital-magazine`         |    Base     | Publicación editorial con lectura de artículos y gestión de favoritos.            |
| **Asociación Profesional**   | `templates/professional-association` |    Base     | Portal institucional con flujos de autenticación, perfil y administración.        |
| **Proveedor Industrial**     | `templates/industrial-supplier`      |    Base     | Catálogo de maquinaria y servicios industriales con modal accesible.              |
| **Panadería Artesanal**      | `templates/bakery`                   |    Base     | Escaparate de panadería con menú móvil, productos y ubicación.                    |
| **Pizzería**                 | `templates/pizzeria`                 |    Base     | Menú interactivo con personalizador de pizzas y carrito accesible.                |
| **Servicios Locales**        | `templates/service-business`         |    Base     | Sitio de servicios con agenda seleccionable y formulario de reservación.          |
| **Portal de Servicios**      | `templates/services-portal`          |    Base     | Directorio y solicitud de servicios digitales.                                    |
| **Portal de Salud**          | `templates/health-portal`            |    Base     | Portal médico informativo y gestión demostrativa de consultas.                    |
| **Plataforma Educativa**     | `templates/education`                |    Base     | Catálogo de cursos, temarios y vista de aprendizaje.                              |
| **Comunidad Social**         | `templates/community`                |    Base     | Espacio de interacción comunitaria, temas y publicaciones.                        |
| **Galería Visual**           | `templates/gallery`                  |    Base     | Exhibición curada de piezas visuales y colecciones.                               |
| **Plataforma Musical**       | `templates/music`                    |    Base     | Catálogo de lanzamientos, listas y reproductor demostrativo.                      |

## Ejecución, verificación y compilación

### Desde la raíz del repositorio

Puedes iniciar el servidor de desarrollo, verificar tipos o compilar las variantes principales directamente desde la raíz `web-templates/`:

```bash
# Vista previa en desarrollo (http://localhost:3000)
bun run dev:industrial-v2
bun run dev:ecommerce-v2
bun run dev:events-v2
bun run dev:portfolio
bun run dev:saas-landing

# Verificación de tipos y compilación individual
bun run check:industrial-v2
bun run build:industrial-v2

# Verificación y compilación en lote
bun run check:v2
bun run build:v2
```

### Ejecución autónoma por plantilla

Cada carpeta dentro de `templates/` funciona de manera independiente. Para ejecutar cualquiera de las 15 plantillas:

```bash
cd templates/<nombre-de-la-plantilla>
bun install
bun run dev
```

Para validar el tipado estricto y generar el empaquetado de producción en `dist/`:

```bash
bun run typecheck
bun run build
```

## Organización y flujo de trabajo

1. **Ramas de trabajo:** Todo cambio se desarrolla en ramas cortas (`feat/`, `fix/`, `docs/`, `chore/`) creadas a partir de `develop`.
2. **Integración:** Los cambios se integran primero a `develop` mediante Pull Requests con verificación de tipos y compilación aprobadas. La rama `main` se reserva para consolidaciones estables revisadas por el equipo.
3. **Revisión cruzada:** Las entregas de Juan son revisadas por Eriberto y viceversa, siguiendo los criterios definidos en `PLANIFICACION.md` y `.github/PULL_REQUEST_TEMPLATE.md`.

## Documentación del proyecto

- [`PLANIFICACION.md`](./PLANIFICACION.md) — Alcance, distribución inicial, criterios de aceptación y entregables.
- [`docs/architecture.md`](./docs/architecture.md) — Principios de arquitectura y aislamiento entre plantillas.
- [`docs/conventions.md`](./docs/conventions.md) — Estándares de código, estilos, accesibilidad y control de versiones.
- [`docs/roadmap.md`](./docs/roadmap.md) — Hoja de ruta y siguientes etapas de evolución.
