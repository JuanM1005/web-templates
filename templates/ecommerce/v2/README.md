# Plantilla E-commerce / Catálogo

Tienda editorial demostrativa en su segunda versión. Incluye catálogo, búsqueda, filtros por categoría y precio, ordenamiento, favoritos, vista rápida y una bolsa lateral con cantidades y subtotal. No procesa pagos ni almacena pedidos.

## Vista previa

Desde la raíz `web-templates`:

```bash
bun run dev:ecommerce-v2
```

Abre la dirección mostrada en la terminal y deja el servidor ejecutándose. Para validar o compilar:

```bash
bun run check:ecommerce-v2
bun run build:ecommerce-v2
```

Los productos se modifican en `src/data.ts`; la estructura y los textos editoriales están en `src/App.tsx`; la identidad visual está en `src/styles.css`.
