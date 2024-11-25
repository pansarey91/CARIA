import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { careerOptions } from '../data/careers';
import { Briefcase, TrendingUp, GraduationCap, ExternalLink } from 'lucide-react';
import { CareerModal } from './CareerModal';
import { CareerOption } from '../types';

interface Props {
  answers: Record<number, string>;
}

export const CareerResults: React.FC<Props> = ({ answers }) => {
  const [selectedCareer, setSelectedCareer] = useState<CareerOption | null>(null);

  // Calculate career matches based on answers
  const getCareerMatches = () => {
    const userPreferences = Object.values(answers).flatMap(answerId => {
      const allQuestions = careerOptions.flatMap(career => career.skills);
      return allQuestions.filter(skill => answerId.includes(skill.toLowerCase()));
    });

    return careerOptions.sort((a, b) => {
      const aMatch = a.skills.filter(skill => 
        userPreferences.includes(skill.toLowerCase())
      ).length;
      const bMatch = b.skills.filter(skill => 
        userPreferences.includes(skill.toLowerCase())
      ).length;
      return bMatch - aMatch;
    });
  };

  const matchedCareers = getCareerMatches();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Career Matches</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your responses, here are the career paths that best match your profile.
            Click "View Opportunities" to explore job openings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {matchedCareers.map((career, index) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-indigo-600" />
                {career.title}
              </h3>
              <p className="text-gray-600 mb-4">{career.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-medium">{career.growth} Growth</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">Salary Range: {career.salary}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {career.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCareer(career)}
                className="w-full mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                View Opportunities
                <ExternalLink className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.location.reload()}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Retake Assessment
          </button>
        </div>

        {selectedCareer && (
          <CareerModal
            career={selectedCareer}
            isOpen={true}
            onClose={() => setSelectedCareer(null)}
          />
        )}
      </div>
    </section>
  );
};