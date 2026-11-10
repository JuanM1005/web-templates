# Convenciones de trabajo

Estas pautas preparan el desarrollo. No implican que las plantillas o sus herramientas ya estén implementadas.

## Archivos y carpetas

- Usar nombres de archivos, variables, tipos y componentes en inglés, con nombres claros y consistentes.
- Mantener el código y los recursos propios dentro de cada plantilla. No importar archivos de otra plantilla.
- Documentar cada plantilla cerca de su código cuando comience su desarrollo. La documentación para el equipo se redacta en español.
- Añadir carpetas, paquetes y configuraciones solo cuando tengan una función concreta.

## TypeScript y React

- Configurar TypeScript en modo estricto cuando exista código. Evitar `any` y declarar tipos para datos y propiedades de componentes.
- Crear componentes con una responsabilidad clara y separar datos de presentación cuando simplifique el código.
- Utilizar HTML semántico, gestionar los estados de interacción de manera explícita y evitar lógica extensa dentro del JSX.
- No introducir gestores de estado o bibliotecas de componentes sin una necesidad demostrable.

## Tailwind CSS

- Verificar la forma de instalación y configuración recomendada para la versión estable elegida antes de incorporarla.
- Definir tokens y criterios visuales dentro de cada plantilla. Evitar que las cuatro identidades dependan de un tema único.
- Usar utilidades y CSS propio con un criterio consistente; no añadir herramientas de estilos por costumbre.

## Política de versiones y compatibilidad

Antes de implementar código, instalar una dependencia o configurar una herramienta:

1. Consultar la documentación oficial actualizada y el registro oficial de versiones del proyecto.
2. Verificar la versión estable más reciente disponible; no asumirla por conocimiento previo.
3. Comprobar la compatibilidad con Bun, React, TypeScript, Tailwind CSS y los navegadores definidos para el proyecto.
4. Evitar APIs deprecadas y versiones alpha, beta, canary o release candidate. Una excepción requiere justificación y autorización.
5. Utilizar las convenciones recomendadas para las versiones seleccionadas.
6. Registrar en la documentación de la plantilla las versiones usadas, la fecha de verificación, las fuentes oficiales y cualquier decisión de compatibilidad.

No hay versiones de React, TypeScript o Tailwind CSS seleccionadas ni instaladas en esta etapa. La propuesta del plan menciona Tailwind CSS v4; se confirmará su versión estable compatible al iniciar el piloto.

## Git y colaboración

- `main` será la única rama permanente prevista.
- Crear ramas cortas con prefijos `feat/`, `fix/`, `docs/` o `chore/`.
- Escribir commits con Conventional Commits, por ejemplo `docs: document workspace structure` o `feat(industrial): add navigation`.
- Cada cambio debe tener una tarea, responsable, criterio de aceptación y solicitud de revisión. La otra persona revisa antes de integrar.
- No incluir secretos, archivos generados o dependencias instaladas en los cambios propuestos.

## Accesibilidad y calidad

- Usar estructura semántica y navegación por teclado; incluir etiquetas, textos alternativos y estados de foco visibles.
- Revisar contraste, adaptación a móvil, tableta y escritorio, enlaces y estados de formularios.
- Marcar claramente el contenido ficticio y las funciones simuladas.
- Ejecutar únicamente verificaciones que tengan una implementación real. Documentar qué se comprobó y qué quedó pendiente; no declarar pruebas exitosas sin ejecutarlas.
