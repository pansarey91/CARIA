// import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Compass } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';  // Optional, for pagination
import 'swiper/css/navigation';  // Optional, for navigation

export const Hero = () => {
  // Scroll to the assessment section
  const scrollToAssessment = () => {
    const assessmentSection = document.getElementById('assessment');
    assessmentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to explore career paths and show dropdown
  const exploreCareerPaths = () => {
    const demoCareerPaths = [
      { title: 'Software Development', url: 'https://www.linkedin.com/jobs/software-development-jobs' },
      { title: 'Data Science', url: 'https://www.linkedin.com/jobs/data-scientist-jobs' },
      { title: 'UX Design', url: 'https://www.linkedin.com/jobs/ux-designer-jobs' },
      { title: 'Product Management', url: 'https://www.linkedin.com/jobs/product-manager-jobs' },
      { title: 'Marketing', url: 'https://www.linkedin.com/jobs/marketing-jobs' },
      { title: 'Finance', url: 'https://www.linkedin.com/jobs/finance-jobs' },
      { title: 'Design', url: 'https://www.linkedin.com/jobs/designer-jobs' },
      { title: 'Sales', url: 'https://www.linkedin.com/jobs/sales-jobs' }
    ];

    // Create and show the careers dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 z-50';
    dropdown.innerHTML = `
      <h3 class="text-xl font-semibold mb-4">Popular Career Paths</h3>
      <div class="space-y-2">
        ${demoCareerPaths.map(path => ` 
          <a href="${path.url}" target="_blank" rel="noopener noreferrer" 
             class="block p-3 rounded-lg hover:bg-indigo-50 transition-colors">
            ${path.title}
          </a>
        `).join('')}
      </div>
    `;

    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'fixed inset-0 bg-black bg-opacity-50 z-40';
    backdrop.onclick = () => {
      document.body.removeChild(backdrop);
      document.body.removeChild(dropdown);
    };

    document.body.appendChild(backdrop);
    document.body.appendChild(dropdown);
  };

  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Perfect Career Path with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let our advanced AI guide you to your dream career. Get personalized insights, skill assessments, and a clear roadmap to success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {/* Start Free Assessment Button */}
            <button 
              onClick={scrollToAssessment}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Start Free Assessment
            </button>
            {/* Explore Careers Button */}
            <button 
              onClick={exploreCareerPaths}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="h-5 w-5" />
              Explore Careers
            </button>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Explore Career Path Examples</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl shadow-xl"
          >
            <SwiperSlide>
              <div className="bg-indigo-100 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Software Development</h3>
                <p className="text-lg text-gray-600">Join the ever-growing field of software development and create the next big thing in tech.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-indigo-100 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Science</h3>
                <p className="text-lg text-gray-600">Harness the power of data to uncover insights and solve complex business problems.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-indigo-100 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">UX Design</h3>
                <p className="text-lg text-gray-600">Design intuitive user interfaces that make products more enjoyable and user-friendly.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-indigo-100 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Product Management</h3>
                <p className="text-lg text-gray-600">Lead cross-functional teams to bring innovative products to market successfully.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[ 
            {
              icon: <Target className="h-8 w-8 text-indigo-600" />,
              title: "Personalized Guidance",
              description: "Get tailored career recommendations based on your skills, interests, and personality."
            },
            {
              icon: <Sparkles className="h-8 w-8 text-indigo-600" />,
              title: "AI-Powered Insights",
              description: "Leverage advanced AI to uncover career paths you might never have considered."
            },
            {
              icon: <Compass className="h-8 w-8 text-indigo-600" />,
              title: "Clear Roadmap",
              description: "Receive step-by-step guidance on how to achieve your career goals."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
