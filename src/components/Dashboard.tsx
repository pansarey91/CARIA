import React, { useState } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard: React.FC = () => {
  // State for profile picture
  const [profilePic, setProfilePic] = useState<string | null>(null);

  // Pie chart data for solved vs not solved assessments
  const assessmentData = {
    solved: 75,
    notSolved: 25,
  };

  const pieChartData = {
    labels: ['Solved', 'Not Solved'],
    datasets: [
      {
        data: [assessmentData.solved, assessmentData.notSolved],
        backgroundColor: ['#4CAF50', '#FF9800'], // Green for solved, Orange for not solved
        borderColor: ['#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  // Line chart data for growth
  const growthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Assessments Solved Over Time',
        data: [10, 20, 35, 50, 75, 100], // Growth data
        fill: false,
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        tension: 0.1, // Smooth curve
      },
    ],
  };

  // Current user's profile information (this could come from a context or props)
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
  };

  // Handle profile picture change
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* User Profile Section */}
      <div className="user-profile bg-white p-4 mb-6 rounded shadow-md flex items-center justify-between">
        {/* Left Side: User Info */}
        <div className="user-info">
          <h3 className="text-xl font-semibold mb-2">User Profile</h3>
          <p className="text-lg"><strong>Name:</strong> {userProfile.name}</p>
          <p className="text-lg"><strong>Email:</strong> {userProfile.email}</p>
          <p className="text-lg"><strong>Phone:</strong> {userProfile.phone}</p>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="profile-picture ml-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
            <img
              src={profilePic || 'https://via.placeholder.com/150'} // Fallback image if no profile picture is uploaded
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="text-sm text-gray-600 file:mr-4 file:bg-indigo-600 file:text-white file:px-3 file:py-2 file:rounded file:text-xs"
          />
        </div>
      </div>

      <div className="stats-container mb-6">
        <h3 className="text-xl font-semibold">Assessment Results</h3>
        <div className="flex flex-wrap justify-between items-center">
          <div className="pie-chart w-64 h-64">
            <Pie data={pieChartData} />
          </div>
          <div className="assessment-summary ml-6">
            <p className="text-lg">Total Assessments Solved: <strong>{assessmentData.solved}</strong></p>
            <p className="text-lg">Total Assessments Not Solved: <strong>{assessmentData.notSolved}</strong></p>
          </div>
        </div>
      </div>

      <div className="growth-chart bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Growth Overview</h3>
        <Line data={growthData} />
      </div>
    </div>
  );
};

export default Dashboard;
