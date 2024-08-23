/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.yml" {
  const value: any;
  export default value;
}

interface Header {
  name: string;
  metas: Meta[];
}

interface Meta {
  icon: string;
  name: string;
  content: string;
  link?: string;
}

interface Section {
  title: string;
  projects: Project[];
  table: Table;
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
  rows: string[];
  cols: string[];
  cells: TableLines[][];
}

interface TableLines {
  lines: Tech[][];
}