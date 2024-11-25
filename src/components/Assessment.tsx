import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { assessmentQuestions } from '../data/questions';
import { AssessmentQuestion } from './AssessmentQuestion';
import { CareerResults } from './CareerResults';

export const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentStep]: optionId
    }));
  };

  const handleNext = () => {
    if (currentStep === assessmentQuestions.length) {
      setShowResults(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  if (showResults) {
    return <CareerResults answers={answers} />;
  }

  return (
    <section id="assessment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Assessment</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our AI-powered assessment to discover career paths that match your personality, skills, and aspirations.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            {assessmentQuestions.map((_, index) => (
              <div key={index + 1} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1 < currentStep ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < assessmentQuestions.length - 1 && (
                  <div className={`w-24 h-1 ${
                    index + 1 < currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <AssessmentQuestion
            question={assessmentQuestions[currentStep - 1]}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentStep]}
          />

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              className={`px-6 py-2 rounded-lg ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[currentStep]}
              className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
                answers[currentStep]
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === assessmentQuestions.length ? 'View Results' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};