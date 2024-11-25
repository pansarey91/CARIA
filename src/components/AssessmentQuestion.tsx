import React from 'react';
import { motion } from 'framer-motion';
import { AssessmentQuestion as QuestionType } from '../types';

interface Props {
  question: QuestionType;
  onAnswer: (optionId: string) => void;
  selectedAnswer?: string;
}

export const AssessmentQuestion: React.FC<Props> = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onAnswer(option.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedAnswer === option.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-600'
            }`}
          >
            <p className="font-medium">{option.text}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};