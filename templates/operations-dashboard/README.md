# Pulso

Dashboard administrativo de demostración para consultar operaciones de recepción, almacén y despacho. Incluye resumen, gráficas, explorador de actividad y bandeja de notificaciones.

## Desde el monorepositorio

Ejecuta desde la raíz:

```sh
bun install --frozen-lockfile
bun run dev:operations-dashboard
```

Usa la dirección que imprime Bun, normalmente `http://localhost:3000/`. Los scripts `bun run check:operations-dashboard` y `bun run build:operations-dashboard` comprueban los tipos y generan la salida de producción. También se ejecutan con `bun run check` y `bun run build` en la raíz.

## Instalación independiente

Copia esta carpeta fuera del monorepositorio. Desde la copia ejecuta:

```sh
bun install
bun run dev
```

Para verificar y compilar:

```sh
bun run typecheck
bun run build
```

Sirve el contenido de `dist/` con un servidor estático. Las vistas usan los fragmentos `#resumen`, `#actividad` y `#notificaciones`.

## Datos y simulaciones

Los 533 registros son ficticios y se generan de forma determinista para los 90 días que terminan el 18 de noviembre de 2026. El selector de 7, 30 o 90 días toma ese corte como referencia y cuenta ambos extremos del intervalo.

- **Operaciones** cuenta los registros del periodo. **Unidades completadas** suma las unidades de los registros finalizados. **Finalización** indica el porcentaje de registros completados. **Incidencias** cuenta los que requieren revisión.
- Las columnas agrupan por día, por bloques de cinco días o por bloques de quince días según el periodo. La distribución por área usa los mismos registros. Los valores se muestran también como texto.
- La tabla de resumen muestra las cuatro operaciones más recientes. En Actividad puedes buscar por ID, tarea o área, combinar filtros, ordenar por fecha o unidades y recorrer los resultados en páginas de ocho registros.
- Las cuatro notificaciones corresponden a las incidencias más recientes del conjunto completo. El estado de lectura se conserva durante la visita.
- El tema y el periodo se guardan en `localStorage` con la clave `pulso.preferences`. Si el navegador bloquea el almacenamiento, ambas preferencias funcionan en memoria.
- La carga inicial y el botón **Actualizar** simulan una espera de 320 ms. Abre la página con `?demo=error#resumen` para probar el error inicial. **Reintentar** carga los datos locales. Una búsqueda sin coincidencias activa el estado vacío y permite limpiar los filtros.

## Personalización

| Archivo | Qué cambiar |
| --- | --- |
| `src/types.ts` | Tipos de operación, áreas, estados y preferencias |
| `src/data/operations.ts` | Fecha de corte, tareas ficticias, unidades y avisos |
| `src/features/metrics.ts` | Cálculos de indicadores y agrupaciones temporales |
| `src/features/` | Vistas de resumen, actividad y notificaciones |
| `src/components/AppShell.tsx` | Navegación, barra lateral y cabecera |
| `src/hooks/` | Persistencia y simulación de carga |
| `src/styles.css` | Tokens de ambos temas, tipografía y diseño responsive |

Las gráficas se construyen con HTML y CSS y exponen sus conteos a lectores de pantalla. La fuente IBM Plex Mono se sirve localmente bajo SIL Open Font License 1.1. El build incluye la licencia en `dist/OFL.txt`. [IBM Plex](https://github.com/IBM/plex)

## Versiones

Verificadas el 18 de noviembre de 2026. El entorno local de validación usa Bun 1.4.3.

| Herramienta | Estable consultada | Fuente |
| --- | --- | --- |
| React y React DOM | 19.3.1 | [React](https://github.com/react/react/releases/tag/v19.3.1) |
| TypeScript | 7.0.2 con modo estricto | [TypeScript](https://github.com/microsoft/TypeScript/releases/tag/v7.0.2) |
| Tailwind CSS | 4.3.5 | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5) |
| Bun | 1.4.4 | [Bun](https://github.com/oven-sh/bun/releases/tag/bun-v1.4.4) |

Bun gestiona el workspace, el desarrollo y el build. La integración de Tailwind utiliza `bun-plugin-tailwind` 0.1.2. [Documentación de Bun](https://bun.com/docs/bundler/html-static#tailwind-css)
