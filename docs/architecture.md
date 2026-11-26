# Arquitectura del repositorio

## Monorepositorio

El `package.json` raíz declara workspaces para `templates/*` y `templates/*/v2`. La raíz coordina los scripts globales del repositorio (`dev`, `check` y `build`); no contiene una aplicación propia. Las carpetas principales alojan las implementaciones canónicas y las subcarpetas `v2` alojan propuestas alternativas aisladas sin sobrescribir el trabajo de cada integrante.

## Independencia de las plantillas

Cada plantilla dentro de `templates/` puede instalarse, ejecutarse, verificarse y compilarse por separado. No importa archivos ni componentes de otra plantilla. Sus dependencias, tokens visuales y conjuntos de datos responden a las necesidades propias de cada dominio. El repositorio comparte convenciones de calidad y colaboración, no un sistema de diseño único impuesto.

## Reutilización

Los componentes y hojas de estilo pertenecen a la plantilla que los necesita. Un recurso se extraerá a un paquete compartido solo cuando exista una necesidad transversal comprobada y la extracción simplifique el mantenimiento del monorepositorio.

## Decisiones consolidadas en `develop`

- **Gestión de workspaces:** Bun Workspaces organiza las plantillas base en `templates/*` y las variantes aisladas en `templates/*/v2` con bloqueo de dependencias unificado en `bun.lock`.
- **Catálogo activo:** El repositorio cuenta con **15 plantillas funcionales** (`industrial` + `v2`, `ecommerce` + `v2`, `events` + `v2`, `portfolio`, `saas-landing`, `real-estate`, `operations-dashboard`, `digital-magazine`, `professional-association`, `industrial-supplier`, `bakery`, `pizzeria`, `service-business`, `services-portal`, `health-portal`, `education`, `community`, `gallery` y `music`).
- **Stack técnico:** Las plantillas están construidas con React 19, TypeScript en modo estricto y Tailwind CSS v4.
- **Empaquetado y desarrollo local:** La mayoría de las plantillas utilizan Bun como runtime, servidor de desarrollo y bundler mediante `build.mjs` y `bunfig.toml` (con excepción de `professional-association`, que emplea configuración con Vite).
- **Alcance frontend:** Ninguna plantilla incluye backend, autenticación real, base de datos ni pasarelas de pago; todas las interacciones dinámicas están claramente señaladas como simulaciones locales.
- **Flujo de integración:** `develop` actúa como rama de integración donde convergen las nuevas plantillas, variantes `v2` y mejoras responsive antes de su revisión cruzada y consolidación en `main`.
