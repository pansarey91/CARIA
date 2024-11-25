import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering the necessary components for charting
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

interface CareerGrowthData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

interface CareerDistributionData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

interface ChartOptions {
  responsive: boolean;
  plugins: {
    title: {
      display: boolean;
      text: string;
    };
    tooltip: {
      callbacks: {
        label: (
          tooltipItem: { raw: unknown }
        ) => string;
      };
    };
  };
}

const AIPoweredInsights: React.FC = () => {
  const [careerPath, setCareerPath] = useState<string>('');

  // Sample data for the career growth chart
  const careerGrowthData: CareerGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Career Growth Over Time',
        data: [10, 25, 40, 55, 70, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const careerDistributionData: CareerDistributionData = {
    labels: ['Software Engineering', 'Data Science', 'Cloud Computing', 'Cybersecurity'],
    datasets: [
      {
        data: [35, 30, 20, 15],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Career Growth Over Time',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const rawValue = tooltipItem.raw as number; // Casting 'raw' to number
            return `Growth: ${rawValue}%`;
          },
        },
      },
    },
  };

  const handleCareerSelection = (path: string) => {
    setCareerPath(path);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">AI-Powered Career Insights</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Explore Your Career Path</h3>
        <p className="mb-4 text-gray-700">
          Our AI-driven insights analyze your skills, interests, and preferences to suggest the best career path for you.
        </p>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 mb-4"
          onClick={() => handleCareerSelection('Software Engineering')}
        >
          Get Insights for Software Engineering
        </button>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 mb-4 ml-4"
          onClick={() => handleCareerSelection('Data Science')}
        >
          Get Insights for Data Science
        </button>

        {careerPath && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Your Career Insights for {careerPath}</h4>
            <p className="text-gray-700 mb-4">
              Based on the selected career path, here's how you can grow your career.
            </p>
            <div className="bg-indigo-50 p-4 rounded-md mb-6">
              <h5 className="text-md font-semibold">Recommended Skills</h5>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Proficiency in programming languages (Python, Java, etc.)</li>
                <li>Strong understanding of algorithms and data structures</li>
                <li>Knowledge of machine learning and data analysis tools</li>
                <li>Ability to work with databases and cloud technologies</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-md mb-6">
              <h5 className="text-md font-semibold">Suggested Education Paths</h5>
              <ul className="list-disc ml-6 text-gray-600">
                <li>Bachelor's in Computer Science or related field</li>
                <li>Master's in Data Science or AI (Optional)</li>
                <li>Certifications in Data Analysis, Machine Learning, etc.</li>
              </ul>
            </div>

            <div className="mt-6">
              <Bar data={careerGrowthData} options={options} />
            </div>
          </div>
        )}
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Trending Career Paths</h3>
        <p className="mb-4 text-gray-700">
          These are some of the trending career paths in the job market today.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">AI & Machine Learning</h4>
            <p className="text-gray-700">Explore the future of AI technology and ML models.</p>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Data Science</h4>
            <p className="text-gray-700">Dive into the world of data analysis, big data, and statistics.</p>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Cloud Computing</h4>
            <p className="text-gray-700">Learn how cloud platforms are transforming the IT industry.</p>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Cybersecurity</h4>
            <p className="text-gray-700">Help protect systems and networks from digital threats.</p>
          </div>
        </div>
      </section>

      {/* Pie Charts Section */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Career Path Distribution</h3>
        <p className="mb-4 text-gray-700">Here is the distribution of trending career paths based on current job market trends.</p>
        <div className="flex justify-center">
          <Pie data={careerDistributionData} />
        </div>
      </section>
    </div>
  );
};

export default AIPoweredInsights;
