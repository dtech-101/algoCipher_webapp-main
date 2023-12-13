import { type } from "os";

export interface Lookup {
  key: string;
  description: string;
}

export interface Lookups {
  ProjectCategory: Lookup[];
  ProjectSolutionLanguage: Lookup[];
  ProjectSolutionPlatform: Lookup[];
  ProjectTimeline: Lookup[];
}
export const projectCategory = "ProjectCategory";
export const projectSolutionLanguage = "ProjectSolutionLanguage";
export const projectSolutionPlatform = "ProjectSolutionPlatform";
export const projectTimeline = "ProjectTimeline";
