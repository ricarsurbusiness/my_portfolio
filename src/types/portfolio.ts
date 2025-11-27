export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  categories: (
    | "web"
    | "movil"
    | "desktop"
    | "api"
    | "devops"
    | "fullstack"
    | "backend"
    | "microservices"
  )[];
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: "frontend" | "backend" | "devops" | "design";
  iconUrl?: string;
}

export interface Experience {
  nameCompany: string;
  position: string;
  startDate: string; // ISO format date string
  endDate?: string; // ISO format date string or undefined if currently employed
  description: string;
  technologies: string[];
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  certificate?: string; // URL to certificate or undefined
  startDate: string; // ISO format date string
  endDate?: string; // ISO format date string or undefined if currently studying
  description?: string;
  location: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
}

export interface Language {
  name: string;
  level: "nativo" | "avanzado" | "intermedio" | "básico";
}

export interface SoftSkill {
  name: string;
  description?: string;
}
