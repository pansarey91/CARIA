import React, { useState } from 'react';

interface Mentor {
  id: number;
  name: string;
  skills: string[];
  expertise: string;
  availability: string;
  contact: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node.js'],
    expertise: 'Full-Stack Development',
    availability: 'Available on weekends',
    contact: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    skills: ['Python', 'Data Science', 'Machine Learning'],
    expertise: 'Data Science & AI',
    availability: 'Available on weekdays',
    contact: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Alice Brown',
    skills: ['Java', 'Spring Boot', 'Cloud Computing'],
    expertise: 'Backend Development',
    availability: 'Available on weekdays',
    contact: 'alice.brown@example.com',
  },
];

const MentorshipMatching: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [matchedMentors, setMatchedMentors] = useState<Mentor[]>([]);

  const skillsOptions = ['JavaScript', 'React', 'Node.js', 'Python', 'Data Science', 'Machine Learning', 'Java', 'Spring Boot', 'Cloud Computing'];

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skill = event.target.value;
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill) ? prevSkills.filter((item) => item !== skill) : [...prevSkills, skill]
    );
  };

  const findMentors = () => {
    const matched = mentors.filter((mentor) =>
      selectedSkills.every((skill) => mentor.skills.includes(skill))
    );
    setMatchedMentors(matched);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">Mentorship Matching</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Select Skills You Need Guidance On</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {skillsOptions.map((skill) => (
            <div key={skill} className="flex items-center">
              <input
                type="checkbox"
                value={skill}
                onChange={handleSkillChange}
                className="mr-2"
              />
              <label>{skill}</label>
            </div>
          ))}
        </div>

        <button
          onClick={findMentors}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Find Mentors
        </button>
      </section>

      {matchedMentors.length > 0 && (
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Matched Mentors</h3>
          <div className="space-y-4">
            {matchedMentors.map((mentor) => (
              <div key={mentor.id} className="p-4 bg-indigo-50 rounded-lg shadow">
                <h4 className="text-lg font-semibold">{mentor.name}</h4>
                <p className="text-gray-700">Expertise: {mentor.expertise}</p>
                <p className="text-gray-700">Skills: {mentor.skills.join(', ')}</p>
                <p className="text-gray-700">Availability: {mentor.availability}</p>
                <p className="text-gray-700">Contact: {mentor.contact}</p>
                <button
                  onClick={() => window.location.href = `mailto:${mentor.contact}`}
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Contact Mentor
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MentorshipMatching;
