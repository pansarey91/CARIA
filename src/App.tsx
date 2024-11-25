import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Assessment } from './components/Assessment';
import Features from './components/Features';
import ResumeBuilder from './components/ResumeBuilder';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AIPoweredInsights from './components/AIPoweredInsights';
import MentorshipMatching from './components/MentorshipMatching';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/features" element={<Features />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/login" element={<Login />} /> {/* Add route for login */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ai-insights" element={<AIPoweredInsights />} />
            <Route path="/mentorship-matching" element={<MentorshipMatching />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
