# Plan de proyecto: Web Templates Library

**Estado:** Borrador para revisión  
**Versión:** 0.1  
**Equipo:** Juan y Eriberto  
**Proyecto:** Servicio social  

## 1. Propósito del documento

Este documento define el alcance, la forma de trabajo y los criterios de entrega de **Web Templates Library** antes de crear el monorepositorio y comenzar el desarrollo.

Debe revisarse con la persona responsable del servicio social. Las decisiones pendientes se registrarán aquí para que ambos integrantes trabajen con el mismo objetivo y evitar cambios de dirección durante la implementación.

## 2. Resumen del proyecto

Web Templates Library será una colección inicial de cuatro plantillas web reutilizables. Cada plantilla tendrá una identidad visual y un propósito distintos, pero todas respetarán criterios comunes de calidad, accesibilidad, adaptabilidad a dispositivos y documentación.

La primera versión será un **MVP de cuatro plantillas**, no una plataforma comercial ni un generador automático de proyectos. La prioridad será entregar plantillas completas, demostrables y fáciles de adaptar.

## 3. Objetivos

### Objetivo general

Diseñar, desarrollar y documentar una colección de plantillas web que pueda reutilizarse como punto de partida para futuros proyectos.

### Objetivos específicos

- Construir cuatro plantillas con propósitos y estilos visuales diferentes.
- Mantener cada plantilla instalable, ejecutable y compilable de forma independiente.
- Establecer convenciones comunes de estructura, código, accesibilidad y documentación.
- Permitir la personalización mediante variables, tokens de diseño y contenido de ejemplo claramente identificado.
- Trabajar de forma colaborativa mediante control de versiones, revisión cruzada y tareas con responsables definidos.
- Documentar las decisiones técnicas y el modo de uso de cada plantilla.

## 4. Alcance del MVP

### Plantillas incluidas

1. **Industrial / corporativa**  
   Sitio institucional con presentación, servicios, proyectos, equipo y contacto. Será la plantilla piloto.

2. **E-commerce / catálogo**  
   Catálogo demostrativo con categorías, tarjetas de producto, filtros y vista de detalle. No incluirá pagos reales en el MVP.

3. **Eventos / conferencias**  
   Sitio con información del evento, agenda, ponentes, fechas y formulario de registro demostrativo.

4. **Portafolio profesional**  
   Presentación personal con perfil, proyectos, experiencia, habilidades y contacto.

### Incluido

- Diseño responsivo para móvil, tableta y escritorio.
- Componentes y secciones propios de cada plantilla.
- Navegación funcional dentro de cada demostración.
- Contenido ficticio o con licencia adecuada.
- Estados básicos de interacción y formularios demostrativos.
- Instrucciones de instalación, ejecución, compilación y personalización.
- Revisión básica de accesibilidad y calidad.

### Fuera del alcance inicial

- Backend, autenticación, bases de datos o panel de administración.
- Procesamiento real de pagos, pedidos o registros.
- Un CMS común para las cuatro plantillas.
- Un generador automático de proyectos.
- Un catálogo público avanzado de plantillas.
- Una biblioteca extensa de componentes compartidos.
- Publicación en producción, salvo que el responsable la solicite.

Las funciones simuladas deberán identificarse claramente en la interfaz y la documentación.

## 5. Principios de arquitectura

1. **Independencia:** ninguna plantilla dependerá directamente de otra.
2. **Ejecución autónoma:** cada plantilla tendrá sus propias instrucciones y podrá instalarse, ejecutarse y compilarse por separado.
3. **Reutilización con evidencia:** solo se extraerá un recurso compartido cuando exista una necesidad real en al menos dos plantillas.
4. **Identidad propia:** compartir herramientas o convenciones no debe hacer que las plantillas parezcan variaciones de un mismo diseño.
5. **Crecimiento gradual:** el catálogo visual, los paquetes compartidos y la automatización se añadirán después del MVP, si aportan valor comprobable.
6. **Documentación cercana al código:** cada plantilla explicará su propósito, estructura, uso y posibilidades de personalización.

## 6. Propuesta técnica inicial

La propuesta técnica deberá confirmarse antes de crear el monorepositorio.

| Área | Propuesta | Criterio |
| --- | --- | --- |
| Interfaces | React | Componentes y composición de vistas |
| Lenguaje | TypeScript | Tipado y mantenimiento |
| Estilos | Tailwind CSS v4 | Diseño responsivo y personalización |
| Herramientas | Bun | Dependencias, scripts, ejecución y workspaces |
| Versionamiento | Git y GitHub | Colaboración y revisión |
| Diseño | Figma o equivalente | Wireframes y decisiones visuales |

No se incorporará Next.js, Vite u otra herramienta adicional de forma general sin una necesidad concreta. Cada dependencia deberá responder a un requisito de la plantilla que la utiliza.

## 7. Estructura prevista del monorepositorio

La estructura se implementará después de aprobar este documento:

```text
web-templates/
|-- templates/
|   |-- industrial/
|   |-- ecommerce/
|   |-- events/
|   `-- portfolio/
|-- docs/
|   |-- architecture.md
|   |-- conventions.md
|   `-- roadmap.md
|-- .github/
|   `-- pull_request_template.md
|-- package.json
|-- bun.lock
|-- README.md
`-- .gitignore
```

Cada carpeta dentro de `templates/` tendrá su propio código fuente, dependencias necesarias y archivo `README.md`. Las carpetas `packages/` y `catalog/` no se crearán hasta que haya una necesidad comprobada.

## 8. Organización del equipo

La asignación inicial busca repartir el desarrollo y mantener revisión cruzada:

| Plantilla | Responsable de desarrollo | Responsable de revisión |
| --- | --- | --- |
| Industrial / corporativa | Juan | Eriberto |
| E-commerce / catálogo | Eriberto | Juan |
| Eventos / conferencias | Juan | Eriberto |
| Portafolio profesional | Eriberto | Juan |

Ambos participarán en las decisiones de alcance, convenciones, arquitectura y criterios de calidad. La asignación podrá modificarse de común acuerdo y deberá actualizarse en este documento.

## 9. Flujo de trabajo

1. Crear una tarea por funcionalidad o entregable.
2. Definir para cada tarea un responsable y un criterio de aceptación.
3. Trabajar en una rama corta con el prefijo `feat/`, `fix/`, `docs/` o `chore/`.
4. Abrir una solicitud de revisión antes de integrar cambios.
5. Realizar revisión cruzada por el otro integrante.
6. Integrar únicamente cambios que cumplan los criterios acordados.

La rama `main` representará el estado estable del proyecto. Se evitará añadir una rama permanente adicional mientras el tamaño del equipo y el proceso no la justifiquen.

## 10. Etapas y entregables

### Etapa 0. Confirmación del alcance

**Actividades:** revisar este plan con el responsable, resolver decisiones pendientes y aprobar las cuatro categorías.  
**Entregable:** documento de planificación aprobado.

### Etapa 1. Convenciones y base técnica

**Actividades:** crear el monorepositorio, configurar los workspaces, registrar convenciones y preparar las verificaciones mínimas.  
**Entregable:** repositorio instalable con documentación inicial.

### Etapa 2. Plantilla piloto

**Actividades:** diseñar, desarrollar, documentar y validar la plantilla industrial.  
**Entregable:** una plantilla completa y revisada que sirva para validar el proceso.

### Etapa 3. Desarrollo de las otras plantillas

**Actividades:** desarrollar e-commerce, eventos y portafolio aplicando las lecciones del piloto.  
**Entregable:** cuatro plantillas independientes y revisadas.

### Etapa 4. Integración y entrega

**Actividades:** pruebas finales, revisión de accesibilidad, documentación general, demostración y correcciones.  
**Entregable:** MVP de Web Templates Library listo para evaluación.

No se desarrollarán las cuatro plantillas simultáneamente desde el primer día. La plantilla industrial deberá pasar una revisión antes de usar su proceso como referencia para las demás.

## 11. Criterios de aceptación generales

Una plantilla se considerará terminada cuando:

- pueda instalarse desde una copia limpia siguiendo su documentación;
- tenga comandos documentados para desarrollo y compilación;
- compile sin errores;
- funcione de forma independiente a las otras plantillas;
- se adapte correctamente a móvil, tableta y escritorio;
- utilice HTML semántico y permita navegación básica mediante teclado;
- mantenga contraste, etiquetas y textos alternativos adecuados;
- no presente enlaces, botones o estados principales rotos;
- use contenido de ejemplo permitido y claramente identificable;
- explique cómo cambiar contenido, colores, tipografía e imágenes;
- identifique las funciones simuladas que no tengan backend;
- haya sido revisada por el otro integrante;
- tenga aprobados sus criterios específicos de aceptación.

## 12. Verificación de calidad

Para cada plantilla se realizarán, como mínimo:

- revisión visual en tamaños de pantalla representativos;
- comprobación de navegación mediante teclado;
- revisión de estructura semántica y textos alternativos;
- compilación de producción;
- verificación manual de navegación, filtros y formularios demostrativos;
- revisión de la documentación desde la perspectiva de una persona nueva en el proyecto;
- comprobación de que no se incluyan secretos, archivos temporales ni recursos sin licencia.

Las herramientas automáticas concretas se elegirán al configurar el repositorio.

## 13. Riesgos y mitigaciones

| Riesgo | Mitigación |
| --- | --- |
| Alcance poco claro | Aprobar este documento antes de programar |
| Diseños demasiado similares | Definir referencias y objetivos visuales propios por plantilla |
| Sobrecarga técnica | Posponer catálogo, generador y paquetes no indispensables |
| Dependencias innecesarias | Justificar las dependencias por plantilla |
| Trabajo duplicado o incompatible | Usar tareas, ramas cortas y revisión cruzada |
| Integración tardía | Terminar primero una plantilla piloto y revisar con frecuencia |
| Funciones que parecen reales | Etiquetar claramente demostraciones y simulaciones |
| Falta de tiempo | Priorizar contenido y flujos esenciales antes de extras visuales |

## 14. Decisiones pendientes

Estas preguntas deben resolverse con la persona responsable antes de iniciar la Etapa 1:

- [ ] ¿Las categorías de las cuatro plantillas pueden elegirse libremente?
- [ ] ¿React, TypeScript, Tailwind CSS y Bun están autorizados?
- [ ] ¿Cuál es la fecha de entrega y qué revisiones intermedias habrá?
- [ ] ¿Se espera únicamente el código o también prototipos, memoria y presentación?
- [ ] ¿Las plantillas deben publicarse en internet? En caso afirmativo, ¿dónde?
- [ ] ¿Qué navegadores y dispositivos deberán soportarse?
- [ ] ¿Existe un manual de identidad visual que deba aplicarse?
- [ ] ¿Hay requisitos institucionales de accesibilidad o protección de datos?
- [ ] ¿El repositorio será público o privado y quién será su propietario?
- [ ] ¿Cómo se registrarán y validarán las horas o avances del servicio social?

## 15. Próximos pasos inmediatos

1. Juan y Eriberto revisan este borrador y proponen cambios.
2. Presentan el documento al responsable del servicio social.
3. Registran en la sección de decisiones las respuestas y la aprobación.
4. Definen criterios específicos para la plantilla industrial.
5. Crean el monorepositorio únicamente después de cerrar los puntos que afecten su estructura.

## 16. Registro de aprobación

| Rol | Nombre | Estado | Fecha | Observaciones |
| --- | --- | --- | --- | --- |
| Integrante | Juan | Pendiente |  |  |
| Integrante | Eriberto | Pendiente |  |  |
| Responsable del servicio social | Por definir | Pendiente |  |  |

## 17. Historial de cambios

| Versión | Fecha | Autor | Cambio |
| --- | --- | --- | --- |
| 0.1 | 2026-11-10 | Borrador inicial | Definición de alcance, organización, arquitectura prevista y criterios de entrega |
