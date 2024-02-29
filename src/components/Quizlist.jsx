import React from 'react';

const QuizList = ({ data }) => {
  return (
    <div>
      <h2>All Available Quizzes</h2>
      <ul>
        {data.map((quiz) => (
          <li key={quiz._id}>
            <h3>{quiz.subject}</h3>
            <p>{quiz.questions.length} Questions</p>
            {/* Add additional information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
