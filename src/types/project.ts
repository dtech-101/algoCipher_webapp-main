export interface ICreateProjectPayload {
  title: string;
  description: string;
  category: string;
  platform: string;
  language: string;
  timeline: string;
  budgetFrom?: number;
  budgetTo?: number;
  files: File[];
}

export interface IProjectSummaryDto {
  projectId: string;
  title: string;
  description: string;
  category: string;
  platform: string;
  language: string;
  createdAt: Date;
  lastUpdate: Date;
}
