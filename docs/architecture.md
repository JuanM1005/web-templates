# Arquitectura inicial

## Monorepositorio

El `package.json` raíz declara `workspaces: ["templates/*"]` y `private: true`. La raíz coordina el repositorio; no contiene una aplicación ni dependencias compartidas. Las cuatro carpetas de `templates/` son espacios reservados. Cada una se convertirá en un workspace cuando tenga su propio `package.json` durante su etapa de desarrollo.

La estructura se mantiene deliberadamente pequeña. No existen todavía `packages/`, `catalog/`, scripts de compilación ni configuraciones por plantilla. Se añadirán únicamente ante un requisito concreto.

## Independencia de las plantillas

Cada plantilla futura deberá poder instalarse, ejecutarse, compilarse y documentarse por separado. No importará archivos de otra plantilla. Sus dependencias responderán a sus propias necesidades y su identidad visual será distinta. El repositorio compartirá convenciones de calidad y colaboración, no una interfaz común impuesta.

## Reutilización

Los componentes pertenecerán inicialmente a la plantilla que los necesita. Un recurso se extraerá a un paquete común solo cuando al menos dos plantillas tengan una necesidad real y la extracción simplifique su mantenimiento. La similitud superficial no basta para justificar una dependencia compartida.

## Decisiones iniciales

- Bun Workspaces organiza las futuras plantillas mediante `templates/*`.
- React, TypeScript y Tailwind CSS son la propuesta técnica del plan; aún no están instalados.
- Bun se evaluará como runtime y bundler al iniciar el piloto industrial.
- No se añade Vite, Next.js, backend, autenticación, base de datos, catálogo público ni generador.
- La plantilla industrial será el piloto para validar el proceso antes de desarrollar las otras tres.

El [plan de proyecto](../PLANIFICACION.md) conserva sus decisiones pendientes y su estado de borrador. Esta estructura no registra una aprobación que aún no existe.
