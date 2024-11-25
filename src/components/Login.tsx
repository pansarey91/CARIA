import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigating after successful login

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // For navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    // Proceed with login logic (e.g., API request)
    // If successful, navigate to another page, like dashboard
    navigate('/dashboard'); // Change this to your desired page after login
  };

  return (
    <div className="login-container p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <a href="/forgot-password" className="text-blue-500 text-sm">
            Forgot password?
          </a>
        </div>
      </form>
      <div className="mt-4 text-center">
        <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
