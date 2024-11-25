export interface CareerOption {
  id: string;
  title: string;
  description: string;
  skills: string[];
  salary: string;
  growth: string;
  jobSites: {
    name: string;
    url: string;
    logo: string;
  }[];
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    type: string[];
  }[];
}

export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}