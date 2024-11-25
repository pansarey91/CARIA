import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">C A R I A</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/hero" className="text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200">
              Features
            </Link>
            <Link to="/ai-insights" className="text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200">
              AI-Insights
            </Link>
            <Link to="/mentorship-matching" className="text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200">
              Mentorship
            </Link>
            <Link to="/chatbot" className="text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200">
              Chatbot
            </Link>
          </nav>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/features"
                className="block text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                to="/ai-insights"
                className="block text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200"
                onClick={toggleMenu}
              >
                AI-Insights
              </Link>
              <Link
                to="/dashboard"
                className="block text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/chatbot"
                className="block text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200"
                onClick={toggleMenu}
              >
                Chatbot
              </Link>
              <Link
                to="/login"
                className="block text-gray-700 text-lg hover:text-indigo-600 hover:text-xl transition-all duration-200"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
