import { CareerOption } from '../types';

export const careerOptions: CareerOption[] = [
  {
    id: "tech-1",
    title: "Software Developer",
    description: "Build and maintain software applications using various programming languages and frameworks.",
    skills: ["Programming", "Problem Solving", "System Design"],
    salary: "$70,000 - $150,000",
    growth: "22% (Much faster than average)",
    jobSites: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/software-developer-jobs",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/q-software-developer-jobs.html",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_logo.png"
      },
      {
        name: "Glassdoor",
        url: "https://www.glassdoor.com/Job/software-developer-jobs-SRCH_KO0,18.htm",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Glassdoor_logo.svg"
      }
    ]
  },
  {
    id: "healthcare-1",
    title: "Healthcare Administrator",
    description: "Manage healthcare facilities and coordinate medical services.",
    skills: ["Management", "Healthcare Regulations", "Communication"],
    salary: "$65,000 - $120,000",
    growth: "28% (Much faster than average)",
    jobSites: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/healthcare-administrator-jobs",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      },
      {
        name: "Indeed",
        url: "https://www.indeed.com/q-healthcare-administrator-jobs.html",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_logo.png"
      }
    ]
  },
  {
    id: "creative-1",
    title: "UX/UI Designer",
    description: "Design user interfaces and experiences for digital products.",
    skills: ["Design", "User Research", "Prototyping"],
    salary: "$60,000 - $130,000",
    growth: "13% (Faster than average)",
    jobSites: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/ui-ux-designer-jobs",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/jobs/ui-ux-design",
        logo: "https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png"
      }
    ]
  },
  {
    id: "finance-1",
    title: "Financial Analyst",
    description: "Analyze financial data and provide investment guidance.",
    skills: ["Financial Analysis", "Data Analysis", "Reporting"],
    salary: "$65,000 - $125,000",
    growth: "9% (Average)",
    jobSites: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/jobs/financial-analyst-jobs",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      },
      {
        name: "eFinancialCareers",
        url: "https://www.efinancialcareers.com/jobs-Financial_Analyst",
        logo: "https://www.efinancialcareers.com/v2/images/efc-logo.svg"
      }
    ]
  }
];