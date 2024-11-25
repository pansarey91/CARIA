import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart, Map, MessageSquare } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="h-12 w-12 text-indigo-600" />,
      title: 'Assessments',
      description:
        'Interactive assessments to evaluate your skills and identify suitable career paths.',
      link: '/assessment',
    },
    {
      icon: <Map className="h-12 w-12 text-indigo-600" />,
      title: 'Career Roadmap',
      description:
        'Plan your career journey with detailed guidance and milestone tracking.',
      link: '/dashboard',
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-indigo-600" />,
      title: 'AI Chatbot',
      description:
        'Get personalized career advice through our intelligent chatbot assistant.',
      link: '/chatbot',
    },
    {
      icon: <Brain className="h-12 w-12 text-indigo-600" />,
      title: 'Resume Builder',
      description:
        'Create professional resumes effortlessly with our intuitive builder.',
      link: '/resume-builder',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 mt-16">
        Explore Our Features
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              to={feature.link}
              key={index}
              className="group p-6 bg-white shadow rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h2 className="text-lg font-bold text-gray-900 text-center group-hover:text-indigo-600">
                {feature.title}
              </h2>
              <p className="text-gray-700 text-center mt-2">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
