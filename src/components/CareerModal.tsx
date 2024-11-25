import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { CareerOption } from '../types';

interface Props {
  career: CareerOption;
  isOpen: boolean;
  onClose: () => void;
}

export const CareerModal: React.FC<Props> = ({ career, isOpen, onClose }) => {
  const handleJobSiteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-2xl bg-white rounded-xl shadow-2xl z-50 p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{career.title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Job Sites</h4>
                <div className="grid grid-cols-2 gap-4">
                  {career.jobSites.map((site) => (
                    <button
                      key={site.name}
                      onClick={() => handleJobSiteClick(site.url)}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-600 transition-colors group"
                    >
                      <img
                        src={site.logo}
                        alt={site.name}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="font-medium text-gray-700 group-hover:text-indigo-600">
                        {site.name}
                      </span>
                      <ExternalLink className="h-4 w-4 ml-auto text-gray-400 group-hover:text-indigo-600" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Career Details</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Salary Range:</strong> {career.salary}</p>
                  <p><strong>Growth Rate:</strong> {career.growth}</p>
                  <p>{career.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};