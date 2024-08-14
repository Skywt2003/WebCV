/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.yml" {
  const value: any;
  export default value;
}

interface Metadata {
  name: string;
  id: string;
  phone: string;
  email: string;
  github: string;
  blog: string;
  wechat: string;
  photo?: string;
}

interface Section {
  title: string;
  projects: Project[];
  table: Table[];
}

interface Project {
  title: string;
  subtitle?: string;
  desc?: string;
  date?: string;
  icon?: string;
  caption?: string;
  techs?: Tech[];
  items?: (string | string[])[];
}

interface Tech {
  icon?: string;
  name: string;
}

interface Table {
}