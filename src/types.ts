export interface Project {
  id: string;
  title: string;
  category: "3D Modeling" | "Game Mod" | "Administration" | "Full-Stack";
  status?: "active" | "completed";
  image: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link?: string;
  features: string[];
  modelType: "car" | "sword" | "hub"; // For the 3D interactives
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "Tutorial" | "Opinion" | "Personal" | "Creative";
  date: string;
  readTime: string;
  likes: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  period: string;
  major?: string;
  gpa?: string;
  details: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
