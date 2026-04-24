import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "multivendor-ecommerce",
    title: "MultiVendor E-Commerce Platform",
    description:
      "Plataforma de marketplace multi-vendor production-ready construida con arquitectura de microservicios, similar a Mercado Libre. Backend robusto con 9 microservicios independientes (Auth, Product, Cart, Order, Payment, Inventory, Notification, Analytics, Admin) basados en FastAPI y PostgreSQL. Sistema de RBAC con 3 roles (superAdmin, admin, cliente) con control granular de permisos. Frontend moderno con React 18, TypeScript y TailwindCSS integrado con Kong API Gateway. Caché de sesiones y carrito con Redis, procesamiento de pagos con múltiples integraciones (Stripe, PayPal, MercadoPago). Orquestación completa con Docker Compose para desarrollo y preparado para Kubernetes en producción.",
    imageUrl: "/projects/placeholder.jpg",
    technologies: [
      "Python 3.11",
      "FastAPI",
      "React 18",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kong",
      "Docker",
      "TailwindCSS",
      "Microservices",
    ],
    githubUrl: "https://github.com/ricarsurbusiness/lojatodo",
    liveUrl: "",
    featured: true,
    categories: ["fullstack", "microservices", "web", "api", "devops"],
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
