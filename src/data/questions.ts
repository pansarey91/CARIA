import { AssessmentQuestion } from '../types';

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "What type of work environment do you prefer?",
    options: [
      { id: "a1", text: "Fast-paced startup environment", type: ["entrepreneurial", "tech", "creative"] },
      { id: "a2", text: "Structured corporate setting", type: ["corporate", "finance", "management"] },
      { id: "a3", text: "Remote/flexible workspace", type: ["tech", "creative", "consulting"] },
      { id: "a4", text: "Collaborative team environment", type: ["education", "healthcare", "nonprofit"] }
    ]
  },
  {
    id: 2,
    question: "Which skills do you enjoy using the most?",
    options: [
      { id: "b1", text: "Problem-solving and analysis", type: ["tech", "finance", "consulting"] },
      { id: "b2", text: "Communication and leadership", type: ["management", "sales", "education"] },
      { id: "b3", text: "Creativity and design", type: ["creative", "marketing", "tech"] },
      { id: "b4", text: "Helping and supporting others", type: ["healthcare", "nonprofit", "education"] }
    ]
  },
  {
    id: 3,
    question: "What are your long-term career goals?",
    options: [
      { id: "c1", text: "Building innovative solutions", type: ["tech", "entrepreneurial", "engineering"] },
      { id: "c2", text: "Leading teams and organizations", type: ["management", "corporate", "consulting"] },
      { id: "c3", text: "Making a social impact", type: ["nonprofit", "healthcare", "education"] },
      { id: "c4", text: "Creating and expressing", type: ["creative", "marketing", "arts"] }
    ]
  },
  {
    id: 4,
    question: "What industries interest you the most?",
    options: [
      { id: "d1", text: "Technology and Innovation", type: ["tech", "engineering", "entrepreneurial"] },
      { id: "d2", text: "Business and Finance", type: ["finance", "corporate", "consulting"] },
      { id: "d3", text: "Healthcare and Wellness", type: ["healthcare", "science", "nonprofit"] },
      { id: "d4", text: "Arts and Media", type: ["creative", "marketing", "media"] }
    ]
  }
];