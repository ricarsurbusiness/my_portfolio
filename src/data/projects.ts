import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "ecommerce-fullstack",
    title: "E-commerce Microservices Platform",
    description:
      "Desarrollo fullstack de una plataforma e-commerce basada en microservicios con FastAPI, implementando servicios independientes para autenticación, productos, carrito y órdenes. Backend robusto con JWT, Pydantic, SQLAlchemy y MySQL, acompañado de más de 45 pruebas unitarias con cobertura total. Frontend construido con React 19 y Vite, integrando APIs y gestionando sesión, catálogo y carrito. Orquestación completa con Docker y Docker Compose, manejando múltiples contenedores, volúmenes persistentes y documentación interactiva en /docs.",
    imageUrl: "/projects/placeholder.jpg",
    technologies: [
      "FastAPI",
      "Python",
      "React 19",
      "Vite",
      "MySQL",
      "SQLAlchemy",
      "JWT",
      "Docker",
      "Pytest",
    ],
    githubUrl:
      "https://github.com/ricarsurbusiness/ecommerce-fastapi-microservices",
    liveUrl: "",
    featured: true,
    categories: ["fullstack", "microservices", "web", "api"],
  },
    {
    id: "booking-system-fullstack",
    title: "Booking System – Full-Stack Application",
    description:
      "Desarrollo fullstack integral de un sistema de reservas empresarial construido con NestJS para el backend, implementando una API REST escalable con autenticación JWT, validación robusta con class-validators y gestión de datos con Prisma ORM sobre PostgreSQL. Frontend desarrollado con Next.js proporcionando una interfaz moderna y responsive para gestión de reservas, calendario interactivo y panel administrativo. Dockerización completa del stack con orquestación multi-contenedor, permitiendo despliegue consistente en desarrollo y producción. Implementación de buenas prácticas de arquitectura fullstack, manejo seguro de transacciones, y optimización de rendimiento de base de datos.",
    imageUrl: "/projects/encodateImg.jpg",
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "TypeScript",
    ],
    githubUrl: "https://github.com/ricarsurbusiness/encodate",
    liveUrl: "https://encodate.vercel.app/",
    featured: true,
    categories: ["fullstack", "api", "devops"],
  },  
  {
    id: "qflow-backend",
    title: "QFlow – Backend Microservices",
    description:
      "Desarrollo backend de QFlow, un sistema de gestión de turnos empresarial, bajo arquitectura de microservicios con Go, procesando 1,000+ transacciones diarias. Implementación del módulo de colas con concurrencia thread-safe, endpoints REST y repositorios optimizados en PostgreSQL. Integración de sistema de notificaciones multi-canal con Twilio y mejora de rendimiento mediante índices parciales y queries especializadas. Comunicación en tiempo real con WebSocket/SSE y workers asíncronos con goroutines. Orquestación completa con Docker y API Gateway KrakenD gestionando múltiples microservicios.",
    imageUrl: "/projects/qflow-1.jpeg",
    technologies: [
      "Go",
      "PostgreSQL",
      "Twilio API",
      "WebSocket",
      "SSE",
      "Docker",
      "KrakenD",
      "Goroutines",
    ],
    githubUrl: "https://gitlab.com/unicesarcol/research/qflow",
    liveUrl: "",
    featured: true,
    categories: ["backend", "microservices", "api"],
  },
  {
    id: "mussico-fullstack",
    title: "Mussico Application",
    description:
      "Desarrollo fullstack del aplicativo móvil Mussico, construyendo la app multiplataforma con Flutter y Dart y optimizando funcionalidades clave para asegurar una experiencia de usuario fluida. Participación en la integración de la app con servicios backend desarrollados en Node.js, TypeScript y Express, gestionando datos con MongoDB y Azure Blob Storage para el manejo seguro y escalable de archivos multimedia. Implementación de buenas prácticas de arquitectura y uso de Docker para entornos de desarrollo y despliegue consistentes.",
    imageUrl: "/projects/placeholder.jpg",
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Docker",
      "Azure",
    ],
    githubUrl: "https://github.com/mussico/appmussico",
    liveUrl: "",
    featured: true,
    categories: ["movil", "fullstack", "api", "devops"],
  },

];

// Helper para obtener solo proyectos destacados
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper para obtener proyectos por categoría
export const getProjectsByCategory = (
  category: Project["categories"][number],
) => projects.filter((p) => p.categories.includes(category));
