# Hoja de ruta

La secuencia inicial procede de [PLANIFICACION.md](../PLANIFICACION.md). El desarrollo activo se consolida en la rama `develop` a la espera de revisión cruzada para integrar hacia `main`.

| Etapa                                | Entregable previsto                                                | Estado                                                                   |
| ------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 0. Confirmación del alcance          | Plan revisado y aprobado                                           | Borrador base en uso; pendiente de cierre formal en `main`               |
| 1. Convenciones y base técnica       | Monorepositorio instalable y documentación inicial                 | Completado (`package.json`, `bun.lock` y estructura en `docs/`)          |
| 2. Plantilla piloto                  | Industrial completa y revisada                                     | Completado e integrado en `develop` (base + variante `v2`)               |
| 3. Expansión del catálogo            | E-commerce, eventos, portafolio y nuevas plantillas independientes | Completado en `develop` (**15 plantillas funcionales** y variantes `v2`) |
| 4. Pulido responsive y documentación | Optimización móvil, builds de Tailwind y `README.md` actualizado   | Completado en `develop` (`PR #20`–`#26`)                                 |
| 5. Integración final en `main`       | Consolidación estable y entrega final                              | Pendiente de revisión cruzada y merge hacia `main`                       |

## Hitos integrados en `develop`

- **Catálogo base y variantes `v2`:** Implementación independiente de las plantillas principales (`industrial`, `ecommerce`, `events`, `portfolio`) y sus variantes aisladas (`v2`), más 11 plantillas verticales adicionales (`saas-landing`, `real-estate`, `operations-dashboard`, `digital-magazine`, `professional-association`, `industrial-supplier`, `bakery`, `pizzeria`, `service-business`, `services-portal`, `health-portal`, `education`, `community`, `gallery` y `music`).
- **Compilación y estilos (`PR #21`):** Procesamiento corregido de Tailwind CSS en las plantillas canónicas.
- **Optimización responsive y accesibilidad (`PR #20`, `#22`–`#25`):** Navegación móvil, puntos de quiebre adaptables, controles táctiles y cierre de modales/carritos con `Escape` en `bakery`, `industrial-supplier`, `professional-association`, `pizzeria` y `service-business`.
- **Documentación raíz (`PR #26`):** `README.md` de `develop` actualizado con la estructura real y los comandos de Bun para todo el catálogo.

## Próximas actividades

1. Completar la revisión cruzada del estado consolidado en `develop` entre Juan y Eriberto.
2. Evaluar si se alinean detalles técnicos menores (como unificar `professional-association` con el esquema de Bun/Build usado en el resto de plantillas) o si se cierra el alcance actual.
3. Realizar el Pull Request de consolidación de `develop` hacia `main` tras la aprobación del equipo.
4. Actualizar la documentación raíz en `main` una vez completada la integración final.
