# Arquitectura inicial

## Monorepositorio

El `package.json` raíz declara workspaces para `templates/*` y `templates/*/v2`. La raíz coordina el repositorio; no contiene una aplicación. Las carpetas principales alojan las versiones base y las subcarpetas `v2` alojan propuestas alternativas sin sobrescribir el trabajo de otro integrante.

La estructura se mantiene deliberadamente pequeña. No existen todavía `packages/`, `catalog/`, scripts de compilación ni configuraciones por plantilla. Se añadirán únicamente ante un requisito concreto.

## Independencia de las plantillas

Cada plantilla futura deberá poder instalarse, ejecutarse, compilarse y documentarse por separado. No importará archivos de otra plantilla. Sus dependencias responderán a sus propias necesidades y su identidad visual será distinta. El repositorio compartirá convenciones de calidad y colaboración, no una interfaz común impuesta.

## Reutilización

Los componentes pertenecerán inicialmente a la plantilla que los necesita. Un recurso se extraerá a un paquete común solo cuando al menos dos plantillas tengan una necesidad real y la extracción simplifique su mantenimiento. La similitud superficial no basta para justificar una dependencia compartida.

## Decisiones iniciales

- Bun Workspaces organiza las versiones base mediante `templates/*` y las alternativas mediante `templates/*/v2`.
- Las cuatro plantillas usan React, TypeScript y Tailwind CSS; sus versiones concretas están registradas en sus respectivos `package.json` y en `bun.lock`.
- Bun se utiliza como runtime, servidor local y bundler para las cuatro plantillas.
- No se añade Vite, Next.js, backend, autenticación, base de datos, catálogo público ni generador.
- Las versiones `v2` de industrial, e-commerce y eventos pueden revisarse en paralelo con las implementaciones base antes de decidir qué elementos integrar.

El [plan de proyecto](../PLANIFICACION.md) conserva sus decisiones pendientes y su estado de borrador. Esta estructura no registra una aprobación que aún no existe.
