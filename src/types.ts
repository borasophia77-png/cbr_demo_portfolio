export type Language = 'ko' | 'en';

export interface TimelineItem {
  id: string;
  period: string;
  company: string;
  companyKo: string;
  role: string;
  roleKo: string;
  department?: string;
  departmentKo?: string;
  description: string[];
  descriptionKo: string[];
  isHighlight?: boolean;
  skillsUsed?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectMetric {
  label: string;
  labelKo: string;
  value: string;
  change?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  titleKo: string;
  company: string;
  companyKo: string;
  year: string;
  problem: string;
  problemKo: string;
  research?: string;
  researchKo?: string;
  action?: string;
  actionKo?: string;
  result: string;
  resultKo: string;
  metrics?: ProjectMetric[];
  fullDetails?: {
    overview: string;
    overviewKo: string;
    keyAchievements: string[];
    keyAchievementsKo: string[];
    technologies: string[];
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  titleKo: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface ProfileData {
  name: string;
  nameKo: string;
  title: string;
  titleKo: string;
  hashtags: string[];
  quote: string;
  quoteKo: string;
  headerAvatar: string;
  heroAvatar: string;
  email: string;
  phone: string;
  linkedinUrl: string;
}
