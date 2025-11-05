Dominio: ariesdetinta.com
Para usar el dominio:
Elegir un hosting (puedo ayudarte a comparar opciones).
Subir tu sitio web (puede ser con FTP o usar GitHub Pages si es estático).

ENLACES:
Wattpad: https://www.wattpad.com/user/Ninai_06
Instagram: https://www.instagram.com/ninai_06/
Tiktok: https://www.tiktok.com/@storiesfanfics

1. Inicio / Home
Banner con tu nombre o seudónimo, carrusel de portadas de tus historias y menú de navegación:
Inicio
Historias
Sobre mí
Contacto
Iniciar sesión / Registrarse
2. Historias
Cada historia tendrá:
Portada (imagen)
Descripción breve
Plataforma (Wattpad, Inkitt)
Botón “+ Info” → lleva a una página exclusiva de la historia
Página exclusiva de cada historia: Solo visible completa si el usuario está logueado
Secciones:
Personajes (con imágenes y descripciones interactivas)
Lugares (imágenes + descripciones)
Temas / Géneros
Enlace directo a la historia en Wattpad/Inkitt
3. Sobre Mí
Avatar
Biografía
Enlaces a tus redes sociales
¿Por qué escribes? ¿Qué te inspira?
4. Contacto
Formulario: Nombre, Email, Mensaje, Botón de enviar
5. Sistema de Usuario
Registro / Login
Solo usuarios registrados pueden ver: Personajes, lugares y detalles extendidos de las historias
Panel de usuario (opcional): Ver perfil completo (tanto de Wattpad como Inkitt)


6. Diseño y Funcionalidades Técnicas
Responsive (adaptado a móvil y PC)
Estilo visual:
Colores que reflejen tu estilo como escritora
Tipografía legible y estética
Base de datos para usuarios e historias
Seguridad: protección de datos personales

PORTADA PRINCIPAL
├── Header (Logo + Menú)
├── Hero Section (Tu presentación)
├── Historias Destacadas
├── Sobre Mí
├── Redes Sociales
└── Footer

SECCIONES PRINCIPALES
├── INICIO
├── HISTORIAS
│   ├── Portada de cada historia
│   ├── Título y sinopsis breve
│   ├── Plataforma (Wattpad/Inkitt)
│   └── Botón "+Info"
│       └── (Solo para usuarios logados)
│           ├── Personajes con imágenes
│           ├── Descripciones interactivas
│           ├── Lugares de la historia
│           └── Detalles extendidos
├── SOBRE MÍ
├── CONTACTO
└── LOGIN/REGISTRO a través de Google

1. PÁGINA PRINCIPAL (HOME)
- Header con navegación
- Banner de presentación personal
- Preview de 3-4 historias destacadas
- Sección "Sobre mí" resumida
- Enlaces a redes sociales
- Call-to-action para registrarse






2. SISTEMA DE USUARIOS
Usuarios NO registrados:
Ver portada de historias, leer descripción básica
Ver información sobre ti
Acceder a formulario de contacto

Usuarios REGISTRADOS a través de Google:
Todo lo anterior + Acceso a personajes detallados
 Imágenes exclusivas con descripciones extendidas
 Lugares de la historia

3. PÁGINA DE HISTORIAS INDIVIDUALES
Estructura para cada historia:
├── Portada grande
├── Título y plataforma
├── Sinopsis pública
├── Temas/etiquetas
└── Botón "+Info"
    └── (Al hacer clic, si está logueado a través de Google)
        ├── Galería de personajes
        │   ├── Imagen del personaje
        │   └── Descripción debajo
        ├── Historia extendida
        └── Curiosidades

4. BASE DE DATOS RECOMENDADA
TABLAS:
- Usuarios (email, password, nombre)
- Historias (titulo, portada, descripción, plataforma)
- Personajes (id_historia, nombre, imagen, descripción)
- Lugares (id_historia, nombre, imagen, descripción)

Funcionalidades clave:
Sistema de login/registro
Galerías interactivas
Formulario de contacto funcional
Diseño responsive

Frontend:
HTML + CSS (estructura y diseño)
JavaScript (interactividad)
Bootstrap o Tailwind CSS (diseño responsive)

Backend (elige una opción):
PHP + MySQL (tradicional)
Node.js + MongoDB (moderno)
WordPress (si prefieres CMS)

Secciones imprescindibles:
Hero Section - Tu foto y eslogan
Historias Grid - Carteles tipo Netflix
Sobre Mí - Tu biografía con foto
Redes Sociales - Instagram y TikTok destacados
Footer - Info de contacto y copyright

PLAN DE IMPLEMENTACIÓN
FASE 1: Estructura básica (HTML + CSS)
Objetivo: Crear el esqueleto de la web con las secciones principales.
Tareas:
Crear archivos base: index.html, style.css
Estructurar el menú de navegación (Inicio, Historias, Sobre mí, Contacto, Login)
Crear el layout de la página principal:
Header
Hero Section (presentación)
Historias destacadas (con portadas)
Sección “Sobre mí” resumida
Footer
Resultado: Una página estática que muestra tu contenido básico.

FASE 2: Diseño responsive y estético
Objetivo: Que tu web se vea bien en móviles, tablets y ordenadores.
Tareas:
Elegir paleta de colores y tipografía que refleje tu estilo
Usar Bootstrap o Tailwind CSS para facilitar el diseño responsive
Añadir animaciones suaves (hover en botones, transiciones)
Resultado: Una web visualmente atractiva y adaptable a cualquier dispositivo.

FASE 3: Sistema de usuarios (Login con Google)
Objetivo: Permitir que los usuarios se registren/inicien sesión para ver contenido exclusivo.
Tareas:
Integrar Google OAuth para login seguro
Crear base de datos de usuarios (email, nombre)
Mostrar contenido exclusivo solo si el usuario está logueado
Crear lógica de sesión (mostrar/hide según login)
Resultado: Usuarios pueden registrarse y acceder a contenido extendido.

FASE 4: Contenido de historias
Objetivo: Mostrar tus historias con portadas, sinopsis y detalles.
Tareas:
Crear una base de datos o archivo JSON con tus historias
Mostrar portadas en grid estilo Netflix
Botón “+Info” que lleva a página individual de cada historia
Si el usuario está logueado:
Mostrar personajes con imágenes y descripciones
Mostrar lugares y curiosidades
Resultado: Cada historia tiene su propia página con contenido exclusivo.

FASE 5: Formulario de contacto
Objetivo: Que los visitantes puedan escribirte directamente.
Tareas:
Crear formulario con campos: nombre, email, mensaje
Validación de campos
Enviar datos por email o guardarlos en base de datos
Resultado: Formulario funcional para recibir mensajes.

FASE 6: Testing y ajustes finales
Objetivo: Asegurarte de que todo funciona correctamente.
Tareas:
Probar en diferentes dispositivos
Revisar enlaces, botones y formularios
Optimizar imágenes para carga rápida
Añadir favicon y metadatos para SEO básico
Resultado: Web lista para publicar.

GUÍA PASO A PASO PARA EMPEZAR TU WEB

FASE 1: Estructura Básica (HTML + CSS)
Crear carpetas del proyecto:
universo-ninai/
├── index.html                  ← Página principal con carrusel
├── login.html                  ← Página para iniciar sesión
├── historias.html              ← Página con listado de historias
├── contacto.html               ← Formulario de contacto
├── sobre-mi.html               ← Tu biografía
├── /pages                      ← Subpáginas individuales de cada historia
│   ├── dayandenali.html
│   ├── elgorrionylamujerdelmar.html
     ├── laluzdelrey.html
     ├── fallinlove-maleaval.html
     ├──  infinitegame.html
     └── entrepaginasehistorias.html
├── /assets
│   ├── /img                    ← Portadas, personajes, lugares
│   └── /logo                   ← Logo o avatar
├── /js
│   ├── main.js                 ← Scripts generales
│   └── authGoogle.js      ← Para login con Google
├── /css
│   ├── index.css
     ├── login.css
     ├── historias.css
     ├── authGoogle.css
      └── style.css               ← Estilos adicionales si decides separar

Archivos principales:
index.html → Página principal
historias.html → Listado de historias
sobre-mi.html → Tu biografía
contacto.html → Formulario
login.html → Acceso de usuarios

Diseño inicial con HTML + CSS:
Header con menú
Hero section con tu presentación
Grid de historias destacadas
Sección “Sobre mí” resumida
Footer con redes sociales

FASE 2: Diseño Responsive y Estético
Usar Bootstrap o Tailwind CSS para facilitar el diseño.
Elegir una paleta de colores que refleje tu estilo (¿te gustaría que te proponga una?).
Tipografía clara y elegante (Google Fonts como Merriweather, Lora, Poppins).

FASE 3: Sistema de Usuarios
Usar Firebase Authentication (recomendado para login con Google).
Crear lógica en JavaScript para mostrar contenido solo si el usuario está logueado.
Base de datos (Firebase o MongoDB) para guardar usuarios e historias.

FASE 4: Contenido de Historias
Cada historia tendrá su propia página (historia-nombre.html).
Si el usuario está logueado:
Mostrar personajes con imágenes y descripciones.
Mostrar lugares y curiosidades.
Si no está logueado: Solo portada, sinopsis y plataforma.

FASE 5: Formulario de Contacto
Formulario con campos: nombre, email, mensaje.
Enviar datos a tu correo (usando Formspree o backend en PHP/Node.js).

FASE 6: Testing y Ajustes
Verificar que todo se vea bien en móvil, tablet y PC.
Probar login, formularios y enlaces.
Optimizar imágenes y tiempos de carga.
