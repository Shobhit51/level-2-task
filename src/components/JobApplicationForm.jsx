// src/components/JobApplicationForm.js
import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const JobApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
  } = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    skills: [],
    interviewTime: '',
  }, validate);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Job Application Form</h1>
      {!isSubmitted ? (
        <form onSubmit={(e) => { handleSubmit(e); submitForm(); }}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Applying for Position</label>
            <select
              name="position"
              value={values.position}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {(values.position === 'Developer' || values.position === 'Designer') && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Relevant Experience (years)</label>
              <input
                type="text"
                name="relevantExperience"
                value={values.relevantExperience}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.relevantExperience && <p className="text-red-500 text-sm mt-1">{errors.relevantExperience}</p>}
            </div>
          )}

          {values.position === 'Designer' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Portfolio URL</label>
              <input
                type="text"
                name="portfolioURL"
                value={values.portfolioURL}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.portfolioURL && <p className="text-red-500 text-sm mt-1">{errors.portfolioURL}</p>}
            </div>
          )}

          {values.position === 'Manager' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Management Experience</label>
              <textarea
                name="managementExperience"
                value={values.managementExperience}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.managementExperience && <p className="text-red-500 text-sm mt-1">{errors.managementExperience}</p>}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Additional Skills</label>
            <div className="flex flex-wrap">
              {['JavaScript', 'CSS', 'Python', 'React', 'Node.js'].map(skill => (
                <div key={skill} className="mr-4">
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={values.skills.includes(skill)}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{skill}</span>
                  </label>
                </div>
              ))}
            </div>
            {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Preferred Interview Time</label>
            <input
              type="datetime-local"
              name="interviewTime"
              value={values.interviewTime}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.interviewTime && <p className="text-red-500 text-sm mt-1">{errors.interviewTime}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 mt-4 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Thank you for your application!</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Full Name:</span> {values.fullName}</p>
            <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Email:</span> {values.email}</p>
            <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Phone Number:</span> {values.phoneNumber}</p>
            <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Applying for Position:</span> {values.position}</p>
            {values.position === 'Developer' && (
              <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Relevant Experience:</span> {values.relevantExperience}</p>
            )}
            {values.position === 'Designer' && (
              <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Portfolio URL:</span> {values.portfolioURL}</p>
            )}
            {values.position === 'Manager' && (
              <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Management Experience:</span> {values.managementExperience}</p>
            )}
            <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Additional Skills:</span> {values.skills.join(', ')}</p>
            <p className="text-lg text-gray-800 mb-2"><span className="font-semibold">Preferred Interview Time:</span> {values.interviewTime}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
