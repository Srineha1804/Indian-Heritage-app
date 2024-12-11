import React, { useState, useEffect } from "react";
import "./QuizResult.css";

const QuizResult = () => {
  const [quizResults, setQuizResults] = useState([]);

  // This is just for demonstration. You can fetch results from an API or other methods.
  useEffect(() => {
    // Fetch quiz results here and set the state
    // This is a static example:
    setQuizResults([
      { quizTitle: "Indian Monuments Quiz", score: 4 },
      { quizTitle: "Culture Heritage Quiz", score: 2 },
    ]);
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Quiz Results</h2>

      {/* Displaying the quiz results */}
      {quizResults.length === 0 ? (
        <p>No quiz results yet.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>Quiz Title</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {quizResults.map((result, index) => (
              <tr key={index}>
                <td>{result.quizTitle}</td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuizResult;