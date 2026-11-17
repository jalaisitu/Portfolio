# Jalal Hazi Miah — Portfolio React

Portfolio editorial de desarrollo frontend: casos técnicos, proyectos de IA en equipo, laboratorios académicos de ciberseguridad y contacto directo. Temas claro/oscuro y animaciones que respetan movimiento reducido.

## Desarrollo

Requiere Node.js 22.12+ (o 20.19+).

```sh
npm install
npm run dev
```

Abre la URL que imprime Vite. El HTML necesita el servidor de desarrollo; no se abre directamente como archivo.

## Verificación y producción

```sh
npm test
npm run lint
npm run format:check
npm run build
npm run preview
```

`npm test` verifica las reglas del chat, especialmente edad frente a experiencia, consultas específicas de seguridad, normalización de acentos y preguntas desconocidas. Publica el contenido de `dist/` en un alojamiento estático. El servidor de desarrollo se limita a localhost.

## Estructura y personalización

- [src/App.jsx](./src/App.jsx): composición de la página.
- [src/data/portfolio.js](./src/data/portfolio.js): perfil, proyectos, participación, evidencias y habilidades. Edita aquí el contenido.
- [src/components/](./src/components/): secciones independientes, tarjetas con casos desplegables, chat y animaciones.
- [src/hooks/useTheme.js](./src/hooks/useTheme.js): preferencia persistente; sigue al sistema hasta la elección del visitante.
- [src/chatKnowledge.js](./src/chatKnowledge.js): respuestas preparadas en primera persona. No transmite ni almacena las conversaciones.
- [src/chatKnowledge.test.js](./src/chatKnowledge.test.js): pruebas de preguntas relevantes y casos ambiguos.
- [styles.css](./styles.css): tokens de tema y estilos responsive formateados.
- [public/](./public/): fotografía local y presentación PDF de Cangur.

Los casos distinguen la arquitectura de equipo de la contribución individual conocida. Las demos, métricas, capturas o repositorios nuevos solo deben añadirse cuando existan y se puedan verificar. No se incluyen imágenes que simulen capturas de las aplicaciones.

### Información pendiente del propietario

- Puesto objetivo y disponibilidad.
- Proyecto de prácticas: nombre, problema, tecnologías, contribución y material publicable.
- Contribución técnica concreta en Cangur y AI Support Agent.
- Repo, demo o vídeo de Image Classifier; informes publicables de laboratorios.
- CV y capturas reales, cuando estén disponibles.

No se muestra un CV, una disponibilidad ni una demo ficticios. El anterior enlace de Cangur devolvió 404 durante la revisión: se ofrece su PDF. La arquitectura de AI Support Agent procede del [README público del equipo](https://github.com/sOdreams/swiss-AI-Support-forOperational-Service-Desk). Revisar el contenido al cambiar los enlaces o el estado de los proyectos.

La fotografía se descargó de [Unsplash](https://images.unsplash.com/photo-1448375240586-882707db888b) y se sirve localmente. En móvil se oculta para acercar los proyectos al primer pantallazo.

## Dependencias

`npm audit --omit=dev` no detectó vulnerabilidades en dependencias de producción durante la revisión anterior. La auditoría completa señalaba cuatro avisos transitivos de desarrollo asociados a `picomatch` en la cadena de Vite. Actualiza las herramientas cuando haya una corrección y vuelve a comprobar la auditoría al modificar dependencias.
