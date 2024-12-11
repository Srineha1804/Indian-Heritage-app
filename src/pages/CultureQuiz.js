import React, { useState } from "react";
import "./CultureQuiz.css";

const quizQuestions = [
  {
    question: "Which festival in India is known as the Festival of Lights?",
    options: ["(a) Holi", "(b) Diwali" ,"(c) Pongal","(d) Eid"],
    answer: "(b) Diwali",
  },
  {
    question: "The classical dance form 'Kathak' originates from which part of India?",
    options: [ "(a) Kerala","(b) Uttar Pradesh","(c) Tamil Nadu","(d) West Bengal"],
    answer: "(b) Uttar Pradesh",
  },
  {
    question: "The folk dance ‘Garba’ is primarily associated with which Indian state?",
    options: ["(a) Gujarat", "(b) Rajasthan", "(c) Punjab", "(d) Maharashtra"],
    answer: "(a) Gujarat",
  },
];

const CultureQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null); // For correct/incorrect feedback

  const handleOptionClick = (option) => {
    // Check if the selected option is correct
    const isCorrect = option === quizQuestions[currentQuestion].answer;
    setFeedback(isCorrect ? "Correct!" : "Incorrect!");

    if (isCorrect) {
      setScore(score + 1);
    }

    // Wait for feedback to show before moving to the next question
    setTimeout(() => {
      setFeedback(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000); // 1-second delay for feedback
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <p>
            You scored <strong>{score}</strong> out of{" "}
            <strong>{quizQuestions.length}</strong>
          </p>
          <button id="next-btn" onClick={handleRetry}>
            Retake Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="quiz-progress">
            <div
              className="quiz-progress-bar"
              style={{
                width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="question-section">
            <h2>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </h2>
            <p>{quizQuestions[currentQuestion].question}</p>
          </div>
          <div className="options">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && (
            <div
              className={`feedback ${
                feedback === "Correct!" ? "correct" : "incorrect"
              }`}
            >
              {feedback}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CultureQuiz;
