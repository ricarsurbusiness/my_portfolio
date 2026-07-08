import type { Experience } from "../types/portfolio";

export const experiences: Experience[] = [
  {
    nameCompany: "SIMIL Solution SAS",
    position: "Desarrollador Backend | Product Owner Técnico",
    startDate: "2024-06",
    endDate: "2025-12",
    description:
      "Lideré técnicamente el desarrollo de QFlow, una plataforma de gestión de turnos basada en arquitectura de microservicios con Go y PostgreSQL. Diseñé e implementé soluciones backend escalables para productos empresariales, construyendo APIs REST e integraciones entre servicios con Go, Node.js, PostgreSQL y MongoDB. También participé en la definición de requerimientos, priorización del backlog y validación de entregables junto con el equipo y los stakeholders, manteniendo foco en la necesidad del negocio y en la evolución del producto. Gestioné despliegues con Docker y procesos de CI/CD sobre Google Cloud Platform, e incorporé comunicación en tiempo real para mejorar la experiencia de uso en escenarios operativos.",
    technologies: [
      "Go",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GCP",
      "CI/CD",
      "REST APIs",
      "Microservices",
      "WebSocket",
      "Jira",
      "Scrum",
      "Kanban",
    ],
    location: "Valledupar, Cesar, Colombia",
  },
  {
    nameCompany: "Proyecto Personal",
    position: "Desarrollador Full Stack",
    startDate: "2026-04",
    endDate: undefined,
    description:
      "Diseñé una plataforma de e-commerce basada en arquitectura de microservicios, compuesta por varios servicios independientes y un API Gateway para coordinar la comunicación entre ellos. Desarrollé el backend con FastAPI, incorporando autenticación JWT, mensajería con RabbitMQ y persistencia distribuida con PostgreSQL y Redis. En el frontend utilicé React, TypeScript y Tailwind CSS para construir una interfaz clara y segura, consumiendo APIs REST e integrando comportamientos en tiempo real cuando fue necesario. También orquesté el entorno completo con Docker y Docker Compose, automatizando la puesta en marcha de los servicios y coordinando pruebas unitarias, de integración y end-to-end para asegurar la estabilidad de la solución.",
    technologies: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "JWT",
      "Microservices",
      "API Gateway",
    ],
    location: "Proyecto Personal",
  },
];
