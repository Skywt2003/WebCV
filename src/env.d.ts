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
  internships?: [Internship];
  projects?: [Project];
  items?: [Item];
  bullets?: [string];
  table?: boolean;
  icon?: string;
}

interface School {
  name: string;
  college?: string;
  major: string;
  degree?: string;
  date: string;
  items?: string[];
}

interface Internship {
  name: string;
  department: string;
  job: string;
  date: string;
  techs?: Tech[];
  items?: string[];
}

interface Project {
  title: string;
  type: string;
  job?: string;
  date?: string;
  desc: string;
  techs?: Tech[];
  items?: string[];
}

interface Item {
  title: string;
  subtitle?: string;
  date?: string;
}

interface Tech {
  icon?: string;
  name: string;
}

// interface TableRow {
//   name: string;
//   items: string[];
// }
interface Table {
  // headers: string[];
  // subHeaders: string[];
  // rows: TableRow[];
}