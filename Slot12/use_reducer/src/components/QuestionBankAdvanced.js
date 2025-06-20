import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null, // "correct" | "incorrect"
  highScore: parseInt(localStorage.getItem("highScore")) || 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption ===
        state.questions[state.currentQuestion].answer;

      const newScore = isCorrect ? state.score + 1 : state.score;

      const isLast = state.currentQuestion + 1 === state.questions.length;

      const newHighScore =
        isLast && newScore > state.highScore ? newScore : state.highScore;

      if (isLast && newScore > state.highScore) {
        localStorage.setItem("highScore", newScore.toString());
      }

      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: null,
        showScore: isLast,
        highScore: newHighScore,
      };

    case "SET_FEEDBACK":
      return {
        ...state,
        feedback: action.payload,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore,
      };

    default:
      return state;
  }
}

function QuestionBankAdvanced() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    highScore,
  } = state;

  const [timer, setTimer] = useState(10);

  // Countdown logic
  useEffect(() => {
    if (showScore) return;

    if (timer === 0) {
      dispatch({ type: "SET_FEEDBACK", payload: "incorrect" });
      setTimeout(() => dispatch({ type: "NEXT_QUESTION" }), 1500);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, showScore]);

  // Reset timer when question changes
  useEffect(() => {
    setTimer(10);
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });

    if (option === questions[currentQuestion].answer) {
      dispatch({ type: "SET_FEEDBACK", payload: "correct" });
    } else {
      dispatch({ type: "SET_FEEDBACK", payload: "incorrect" });
    }
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              🎯 Your Score: {score} / {questions.length}
            </h2>
            <h4>🏆 High Score: {highScore}</h4>
            <Button onClick={handleRestart} className="mt-3">
              Restart Quiz
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <strong>
                Question {currentQuestion + 1}/{questions.length}
              </strong>
              <span
                style={{
                  color: timer <= 5 ? "red" : "black",
                  fontWeight: "bold",
                }}
              >
                ⏱️ {timer}s
              </span>
            </div>

            <ProgressBar
              now={((currentQuestion + 1) / questions.length) * 100}
              className="my-2"
            />

            <h5>{questions[currentQuestion].question}</h5>

            <div className="mt-3">
              {questions[currentQuestion].options.map((opt, i) => (
                <Button
                  key={i}
                  className="m-2"
                  variant={
                    selectedOption === opt ? "primary" : "outline-secondary"
                  }
                  onClick={() => handleOptionSelect(opt)}
                  disabled={!!feedback}
                >
                  {opt}
                </Button>
              ))}
            </div>

            {feedback && (
              <div className="mt-3">
                {feedback === "correct" ? (
                  <p className="text-success fw-bold">
                    <FaCheckCircle /> Correct! 🎉
                  </p>
                ) : (
                  <p className="text-danger fw-bold">
                    <FaTimesCircle /> Incorrect! The correct answer is:{" "}
                    {questions[currentQuestion].answer}
                  </p>
                )}
              </div>
            )}

            <Button
              className="mt-3"
              disabled={!selectedOption && !feedback}
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBankAdvanced;
