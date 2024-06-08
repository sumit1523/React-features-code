/* eslint-disable react/prop-types */
const Question = ({
  question,
  answer,
  options,
  explanation,
  handleOptionSelect,
  showExplanation,
  selectedOption,
}) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      <ul>
        {options.map((option, i) => (
          <li key={i} style={{ listStyle: "none" }}>
            <button
              onClick={() => handleOptionSelect(option, answer)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <div>{showExplanation && explanation}</div>
    </div>
  );
};

export default Question;
