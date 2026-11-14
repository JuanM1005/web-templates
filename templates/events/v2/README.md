# Plantilla de Eventos / Conferencias

Sitio demostrativo para una conferencia ficticia con presentación, agenda filtrable por día, ponentes, sede y registro simulado. No crea boletos ni almacena información.

## Vista previa

Desde la raíz `web-templates`:

```bash
bun run dev:events-v2
```

Para verificar o compilar:

```bash
bun run check:events-v2
bun run build:events-v2
```

La agenda y los ponentes están en `src/data.ts`; la estructura e interacciones en `src/App.tsx`; la identidad visual en `src/styles.css`.
