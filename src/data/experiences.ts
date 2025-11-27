import type { Experience } from "../types/portfolio";

export const experiences: Experience[] = [
  {
    nameCompany: "SIMIL Solution SAS",
    position: "Desarrollador Backend - Pasante",
    startDate: "2024-08",
    endDate: undefined, // Actualidad
    description:
      "Lideré el desarrollo del backend de QFlow, un sistema de gestión de turnos empresarial, implementando arquitectura de microservicios con Go que procesa 1,000+ transacciones diarias con 95% de completitud funcional. Diseñé el módulo crítico de colas con asignación de ejecutivos, creando 24 métodos de repositorio y 13 endpoints RESTful, logrando concurrencia thread-safe con locks optimistas en PostgreSQL. Desarrollé sistema de notificaciones multi-canal integrando Twilio API, implementando estrategia de fallback automático que redujo costos de mensajería 50% y mejoró deliverabilidad a 99%. Optimicé rendimiento de bases de datos diseñando 13 índices parciales y queries especializadas, reduciendo tiempos de consulta de colas de >1s a <150ms en el percentil 95. Implementé comunicación en tiempo real usando WebSocket/SSE para 100+ usuarios concurrentes, integrando sistema de workers asíncronos con pool de 5 goroutines para procesamiento paralelo. Configuré pipeline completo de despliegue con Docker, API Gateway KrakenD, y gestión de 5 microservicios independientes con sus respectivas bases de datos PostgreSQL.",
    technologies: [
      "Go",
      "PostgreSQL",
      "Docker",
      "Microservices",
      "WebSocket",
      "Twilio API",
      "KrakenD",
      "SSE",
    ],
    location: "Valledupar, Cesar, Colombia",
  },
  {
    nameCompany: "SIMIL Solution SAS",
    position: "Desarrollador Backend",
    startDate: "2024-02",
    endDate: "2024-06",
    description:
      "Desarrollé API General centralizada para la plataforma Mussico utilizando Node.js con Express.js, implementando arquitectura RESTful que unificó múltiples funcionalidades del ecosistema musical en un único punto de acceso. Diseñé e implementé sistema de autenticación JWT con middleware de autorización por roles, garantizando acceso seguro a recursos protegidos y validación de tokens en cada request crítico de la plataforma. Integré Azure Blob Storage para gestión de archivos multimedia, desarrollando servicio de almacenamiento escalable que maneja carga, descarga y gestión de imágenes de perfiles y contenido musical con URLs firmadas temporales. Arquitecté base de datos NoSQL con MongoDB, diseñando esquemas con referencias y embedidos optimizados, implementando índices compuestos que mejoraron el rendimiento de queries de búsqueda y filtrado. Implementé arquitectura en capas siguiendo principios SOLID, separando rutas, controladores, servicios y repositorios, con validación de datos mediante middleware y manejo centralizado de errores asíncronos. Configuré pipeline de contenerización con Docker y Docker Compose, orquestando múltiples servicios (API, MongoDB, Redis) con variables de entorno seguras y volúmenes persistentes para ambientes de desarrollo y producción.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Azure Blob Storage",
      "JWT",
      "Docker",
      "Redis",
      "REST APIs",
    ],
    location: "Valledupar, Cesar, Colombia",
  },
  {
    nameCompany: "Proyecto Personal",
    position: "Desarrollador Full Stack",
    startDate: "2024-07",
    endDate: "2024-07",
    description:
      "Arquitectura de microservicios escalable con FastAPI (Python) implementando 4 servicios independientes (Auth, Products, Cart, Orders) con API Gateway, procesando múltiples requests concurrentes. Backend robusto con autenticación JWT, validación de datos con Pydantic, ORM SQLAlchemy, y base de datos MySQL 8.0 con esquemas optimizados y pruebas unitarias (45+ casos con 100% cobertura). Frontend moderno con React 19 + Vite, componentes reutilizables (Login, Register, Shop, Cart, ProductList), integración de APIs y persistencia de sesión en localStorage. Comunicación inter-servicios mediante HTTP interno entre contenedores, permitiendo Cart Service consultar Auth Service y Order Service interactuar con múltiples servicios. Orquestación completa con Docker y Docker Compose, configurando 6 contenedores interconectados, volúmenes persistentes, CORS, variables de entorno y documentación interactiva en /docs. Funcionalidades: Registro/Login seguro, catálogo de productos, carrito de compras con cálculos automáticos, procesamiento de órdenes, interfaz responsive con CSS3.",
    technologies: [
      "FastAPI",
      "Python",
      "React",
      "Vite",
      "MySQL",
      "JWT",
      "Docker",
      "Pytest",
      "SQLAlchemy",
    ],
    location: "Colombia",
  },
];
