/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.yml" {
  const value: any;
  export default value;
}

interface Metadata {
  name: string;
  phone: string;
  email: string;
  github: string;
  blog: string;
  photo?: string;
}

interface Section {
  title: string;
  schools?: [School];
  projects?: [Project];
  items?: [Item];
  bullets?: [string];
}

interface School {
  name: string;
  college?: string;
  major: string;
  degree?: string;
  date: string;
  majorCourses: string;
  score: string;
}

interface Project {
  title: string;
  type: string;
  job?: string;
  date?: string;
  desc: string;
  // tech: string;
  items?: string[];
}

interface Item {
  title: string;
  subtitle?: string;
  note?: string;
  date?: string;
}
