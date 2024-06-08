import { useState } from "react";
import Question from "./Question";
import { questions } from "./data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const totalQuestion = questions.length;

  const nextQues = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setSelectedOption(null);
    }
  };

  const prevQues = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (userSelection, answer) => {
    setSelectedOption();
    checkAnswer(userSelection, answer);
    if (currentQuestion === questions.length) {
      setShowResult(true);
    }
    //  nextQues();
  };

  const checkAnswer = (userSelection, answer) => {
    if (answer === userSelection) {
      setCorrectAnswer(correctAnswer + 1);
      setShowExplanation(true);
    } else {
      setShowExplanation(false);
    }
  };
  const reset = () => {
    setCurrentQuestion(1);
    setShowResult(false);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  return (
    <div>
      <h1>QUIZ</h1>
      {!showResult ? (
        <>
          <div>
            Qustions No. {currentQuestion} of {totalQuestion}
          </div>
          <div>
            Correct Answer {correctAnswer} out of {currentQuestion}
          </div>
          {questions.map((ques) => (
            <div
              key={ques.id}
              className={`${currentQuestion === ques.id ? "show" : "hide"}`}
            >
              <Question
                question={ques.question}
                options={ques.options}
                answer={ques.answer}
                explanation={ques.explanation}
                showExplanation={showExplanation}
                handleOptionSelect={handleOptionSelect}
                selectedOption={selectedOption}
              />
            </div>
          ))}
          <button disabled={currentQuestion === 1} onClick={() => prevQues()}>
            Prev
          </button>
          <button
            disabled={currentQuestion === totalQuestion}
            onClick={() => nextQues()}
          >
            Next
          </button>
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your final score is: {correctAnswer} out of {totalQuestion}
          </p>
          <button onClick={() => reset()}>Reset</button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
