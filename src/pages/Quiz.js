import React from "react";
import "./Quiz.css";

const Quiz = () => {
  const quizzes = [
    {
      title: "Famous Indian Monuments",
      description: "Test your knowledge about India's iconic monuments.",
      link: "/quiz/monuments",
    },
    {
      title: "Indian Culture and Traditions",
      description: "How much do you know about Indian culture and traditions?",
      link: "/quiz/culture",
    },
    {
      title: "Heritage Sites in India",
      description: "Explore the UNESCO heritage sites across India.",
      link: "/quiz/heritage-sites",
    },
    {
      title: "Festivals of India",
      description: "Identify India's diverse and vibrant festivals.",
      link: "/quiz/festivals",
    },
    {
      title: "Indian Arts and Crafts",
      description: "Learn about India's traditional arts and crafts.",
      link: "/quiz/arts-crafts",
    },
    {
      title: "Historical Events and Figures",
      description: "Test your knowledge about key events and figures in Indian history.",
      link: "/quiz/history",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Quizzes</h1>
      <p className="dashboard-description">
        Explore quizzes on Indian Heritage, Monuments, and Culture!
      </p>

      <div className="quiz-grid">
        {quizzes.map((quiz, index) => (
          <div className="quiz-card" key={index}>
            <h2 className="quiz-title">{quiz.title}</h2>
            <p className="quiz-description">{quiz.description}</p>
            <a href={quiz.link} className="start-quiz-btn">
              Start Quiz
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
