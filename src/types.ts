export interface SolutionCase {
  id: string;
  title: string;
  category: 'Enterprise BI' | 'Industrial & IoT' | 'Strategy & Governance' | 'Operations & Supply Chain';
  tagline: string;
  context: string;
  problem: string;
  solution: string;
  daxLogic?: string;
  architecture: string[];
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  businessImpact: string;
}

export interface StrategicDiscipline {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface CredentialItem {
  type: 'Degree' | 'Certification' | 'License';
  title: string;
  institution: string;
  focus?: string;
}

