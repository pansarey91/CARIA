import React, { useState } from 'react';
import jsPDF from 'jspdf';

const ResumeBuilder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    objectives: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`Phone: ${formData.phone}`, 10, 30);
    doc.text(`Address: ${formData.address}`, 10, 40);
    doc.text('Education:', 10, 50);
    doc.text(formData.education, 10, 60);
    doc.text('Experience:', 10, 70);
    doc.text(formData.experience, 10, 80);
    doc.text('Skills:', 10, 90);
    doc.text(formData.skills, 10, 100);
    doc.text('Objectives:', 10, 110);
    doc.text(formData.objectives, 10, 120);
    doc.save(`${formData.name}_Resume.pdf`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="objectives"
          placeholder="Career Objectives"
          value={formData.objectives}
          onChange={handleChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="button"
          onClick={generatePDF}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate PDF
        </button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
