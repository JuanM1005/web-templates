# Convenciones de trabajo

Estas pautas rigen el desarrollo, revisión y mantenimiento de las plantillas en el repositorio.

## Archivos y carpetas

- Usar nombres de archivos, variables, tipos y componentes en inglés, con nombres claros y consistentes.
- Mantener el código, los estilos y los recursos propios dentro de cada plantilla (`templates/<nombre>/`). No importar archivos de otra plantilla.
- Documentar cada plantilla en su propio `README.md` con comandos de ejecución y notas de personalización. La documentación para el equipo se redacta en español.

## TypeScript y React

- Mantener TypeScript en modo estricto (`"strict": true` en `tsconfig.json`), evitar `any` y declarar tipos explícitos para datos y propiedades de componentes.
- Crear componentes con responsabilidades claras y separar los datos demostrativos (por ejemplo, en `src/data.ts` o `src/content.ts`) de la capa de presentación cuando simplifique el mantenimiento.
- Utilizar HTML semántico, gestionar los estados de interacción de manera explícita y evitar lógica extensa dentro del JSX.

## Tailwind CSS y estilos

- Mantener los tokens visuales y variables CSS (`:root`) dentro de cada plantilla para preservar su identidad visual independiente.
- Evitar que las distintas plantillas dependan de un tema global compartido.
- Usar utilidades de Tailwind CSS v4 y reglas CSS propias de forma consistente, respetando preferencias como `prefers-reduced-motion` cuando aplique.

## Política de versiones y compatibilidad

Antes de actualizar dependencias o incorporar una herramienta nueva:

1. Consultar la documentación oficial actualizada y el registro oficial de versiones del paquete.
2. Verificar la versión estable más reciente compatible con Bun, React 19, TypeScript y Tailwind CSS v4.
3. Evitar APIs deprecadas y versiones `alpha`, `beta`, `canary` o `release candidate` sin justificación.
4. Registrar los cambios de versiones en `package.json` y actualizar `bun.lock`.

## Git y colaboración

- `main` representa la rama estable del proyecto y `develop` actúa como rama de integración activa del equipo.
- Crear ramas cortas desde `develop` con prefijos `feat/`, `fix/`, `docs/`, `style/` o `chore/`.
- Escribir commits siguiendo Conventional Commits, por ejemplo: `feat(bakery): add mobile menu` o `docs(roadmap): update milestones`.
- Cada cambio se propone mediante Pull Request usando la plantilla `.github/PULL_REQUEST_TEMPLATE.md` para revisión cruzada entre Juan y Eriberto antes de fusionar.
- No incluir secretos, variables privadas ni archivos temporales en los commits.

## Accesibilidad y calidad

- Usar estructura semántica, enlaces de salto (`skip-link`) y navegación completa por teclado (incluyendo cierre de modales o paneles con `Escape` y estados de foco visibles).
- Verificar contraste de color y diseño adaptable en móvil (360 px / 390 px), tableta y escritorio.
- Marcar de forma explícita y visible el contenido ficticio y las funciones simuladas sin backend.
- Ejecutar la verificación de tipos (`typecheck`) y compilación (`build`) antes de abrir o fusionar cada Pull Request.
