import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../Redux/dashboardSlice';

const QuizForm = ({ onSaveQuiz }) => {

  const userData = useSelector(selectUserData);
  console.log(userData);
  // console.log(userData.result._id);
  // console.log(userData.result.firstname);
  // console.log(userData.result.Lastname);

  const [quizData, setQuizData] = useState({
    title: '',
    questions: [
      {
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
      },
    ],
    name: `${userData.firstname} ${userData.Lastname}`,
    userId: userData._id
  });

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    if (name === 'options') {
      const updatedOptions = [...quizData.questions[index].options];
      const optionIndex = parseInt(event.target.dataset.optionIndex, 10);
      updatedOptions[optionIndex] = value;
      const updatedQuestions = [...quizData.questions];
      updatedQuestions[index].options = updatedOptions;
      setQuizData({ ...quizData, questions: updatedQuestions });
      console.log(quizData);
    } else {
      const updatedQuestions = [...quizData.questions];
      updatedQuestions[index][name] = value;
      setQuizData({ ...quizData, questions: updatedQuestions });
    }
  };

  const handleAddQuestion = () => {
    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions,
        {
          question: '',
          options: ['', '', '', ''],
          correctAnswer: '',
        },
      ],
    });
  };

  const handleSave = () => {
    onSaveQuiz(quizData);
  };

  return (
    <div className='py-3 flex justify-center flex-col  '>
      <label className='text-red-500 m-1 text-center text-2xl font-bold p-1'>
        Quiz Title:
        <input className='p-[5px] m-1 rounded-md text-lg text-black'
          type="text"
          name="title"
          value={quizData.title}
          onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
        />
      </label>
      <div className='h-1 w-full bg-yellow-400'></div>

      <h3 className='text-center text-2xl font-bold p-1'>Questions:</h3>
      <div className='text-center '>
        {quizData.questions.map((question, index) => (
          <div key={index}>
            <label className='text-black m-1  font-semibold'>
              Question {index + 1}:
              <input className='p-[5px] m-1 rounded-md text-lg text-black'
                type="text"
                name="question"
                value={question.question}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>

            <h4>Options:</h4>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label className='text-red-500 m-1 '>
                  Option {optionIndex + 1}:
                  <input className='p-[5px] m-1 rounded-md text-lg text-black'
                    type="text"
                    name="options"
                    data-option-index={optionIndex}
                    value={option}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
              </div>
            ))}

            <label className='text-blue-900 m-1 font-bold '>
              Answer:
              <input className='p-[5px] m-1 rounded-md text-lg text-black'
                type="text"
                name="correctAnswer"
                value={question.correctAnswer}
                onChange={(e) => handleInputChange(e, index)}
              />
            </label>
            <div className='h-1 w-full bg-yellow-400 m-1'></div>
          </div>
        ))}
      </div>


      <div className='text-center'>
        <button
          onClick={handleAddQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Add Question
        </button>

        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4 ml-4"
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizForm;
