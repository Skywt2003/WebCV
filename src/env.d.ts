/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.yml" {
  const value: any;
  export default value;
}

interface SchoolObject {
  name: string;
  college?: string;
  major: string;
  degree?: string;
  date: string;
  majorCourses: string;
  score: string;
}

interface ItemObject {
  title: string;
  subtitle?: string;
  note?: string;
  date?: string;
}

interface ProjectObject {
  title: string;
  type: string;
  job?: string;
  date?: string;
  desc: string;
  tech: string;
  items?: string[];
}

interface SectionObject {
  title: string;
  schools?: [SchoolObject];
  items?: [ItemObject];
  projects?: [ProjectObject];
  lis?: [string];
}

interface Metadata {
  name: string;
  phone: string;
  email: string;
  intention: string;
  photo?: string;
}
