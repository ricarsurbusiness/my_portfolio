import type { Skill } from "../types/portfolio";

export const skills: Skill[] = [
  // FRONTEND
  { name: "React", level: "expert", category: "frontend" },
  { name: "TypeScript", level: "expert", category: "frontend" },
  { name: "JavaScript", level: "expert", category: "frontend" },
  { name: "Vite", level: "advanced", category: "frontend" },
  { name: "Flutter", level: "advanced", category: "frontend" },
  { name: "Dart", level: "advanced", category: "frontend" },
  { name: "HTML5", level: "expert", category: "frontend" },
  { name: "CSS3", level: "advanced", category: "frontend" },

  // BACKEND
  { name: "Node.js", level: "expert", category: "backend" },
  { name: "Express", level: "expert", category: "backend" },
  { name: "FastAPI", level: "advanced", category: "backend" },
  { name: "Python", level: "advanced", category: "backend" },
  { name: "Go", level: "advanced", category: "backend" },
  { name: "REST APIs", level: "expert", category: "backend" },
  { name: "WebSocket", level: "advanced", category: "backend" },
  { name: "Microservices", level: "advanced", category: "backend" },
  { name: "PostgreSQL", level: "advanced", category: "backend" },
  { name: "MySQL", level: "advanced", category: "backend" },
  { name: "MongoDB", level: "advanced", category: "backend" },
  { name: "SQLAlchemy", level: "advanced", category: "backend" },
  { name: "Prisma", level: "intermediate", category: "backend" },

  // DEVOPS
  { name: "Docker", level: "advanced", category: "devops" },
  { name: "Docker Compose", level: "advanced", category: "devops" },
  { name: "Git", level: "advanced", category: "devops" },
  { name: "Azure", level: "intermediate", category: "devops" },
  { name: "KrakenD", level: "intermediate", category: "devops" },

  // DESIGN & TOOLS
  { name: "Figma", level: "intermediate", category: "design" },
  { name: "Postman", level: "expert", category: "design" },
];

// Helpers para agrupar skills por categoría
export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((skill) => skill.category === category);

export const skillsByCategory = {
  frontend: getSkillsByCategory("frontend"),
  backend: getSkillsByCategory("backend"),
  devops: getSkillsByCategory("devops"),
  design: getSkillsByCategory("design"),
};
