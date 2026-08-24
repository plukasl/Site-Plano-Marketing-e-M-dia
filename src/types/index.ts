export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  features: string[];
}

export interface MethodologyStep {
  number: number;
  title: string;
  description: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProposalFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  segment: string;
  selectedServices: string[];
  budget: string;
  message: string;
}
