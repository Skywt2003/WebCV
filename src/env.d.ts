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
  intention: string;
  photo?: string;
}

interface Section {
  slug: string;
  title: string;
  schools?: [string];
  projects?: [string];
  items?: [string];
  bullets?: [string];
}

interface School {
  slug: string;
  name: string;
  college?: string;
  major: string;
  degree?: string;
  date: string;
  majorCourses: string;
  score: string;
}

interface Project {
  slug: string;
  title: string;
  type: string;
  job?: string;
  date?: string;
  desc: string;
  tech: string;
  items?: string[];
}

interface Item {
  slug: string;
  title: string;
  subtitle?: string;
  note?: string;
  date?: string;
}

interface Bullet {
  slug: string;
  content: string;
}
