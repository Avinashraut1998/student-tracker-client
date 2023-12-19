import React from "react";
import { useState } from "react";

const Studentdashboard = () => {
  const [homeworkSolution, setHomeworkSolution] = useState("");
  const [homeworkId, setHomeworkId] = useState("");
  const [submittedHomeworks, setSubmittedHomeworks] = useState([]);

  const handleHomeworkSubmit = (e) => {
    e.preventDefault();

    // Simulate a server response (you would replace this with an actual API call)
    const newHomework = {
      id: homeworkId,
      solution: homeworkSolution,
    };

    // Update the list of submitted homeworks
    setSubmittedHomeworks((prevHomeworks) => [...prevHomeworks, newHomework]);

    // Clear the form fields
    setHomeworkId("");
    setHomeworkSolution("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Dashboard</h1>

      {/* Homework Solving Form */}
      <form onSubmit={handleHomeworkSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="homeworkId"
            className="block text-sm font-medium text-gray-700"
          >
            Homework ID
          </label>
          <input
            type="text"
            id="homeworkId"
            name="homeworkId"
            value={homeworkId}
            onChange={(e) => setHomeworkId(e.target.value)}
            className="form-input mt-1 block w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="homeworkSolution"
            className="block text-sm font-medium text-gray-700"
          >
            Homework Solution
          </label>
          <textarea
            id="homeworkSolution"
            name="homeworkSolution"
            value={homeworkSolution}
            onChange={(e) => setHomeworkSolution(e.target.value)}
            rows="4"
            className="form-textarea mt-1 block w-full"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Homework
          </button>
        </div>
      </form>

      {/* Display Submitted Homeworks */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Submitted Homeworks</h2>
        <ul>
          {submittedHomeworks.map((homework) => (
            <li key={homework.id} className="mb-2">
              Homework ID: {homework.id}, Solution: {homework.solution}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Studentdashboard;
