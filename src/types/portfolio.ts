export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "desktop" | "api";
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
