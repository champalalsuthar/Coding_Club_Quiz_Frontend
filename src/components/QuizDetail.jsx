import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const QuizDetail = () => {
    const location = useLocation();
    const data1 = location.state;
    const data = data1.data;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const navigate = useNavigate();
    const currentQuestion = data.Questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < data.Questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            navigate('/result', { state: { data: userScore } })
            // navigate('/result');
            // alert('User Score:', userScore)
            // console.log('User Score:', userScore);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleOptionClick = (index) => {
        // const isCorrect = index === currentQuestion.options[currentQuestion.options.length - 1];
        // const isCorrect = index === currentQuestion.correctAnswer;

        if (index == currentQuestion.correctAnswer) {
            setUserScore((prevScore) => prevScore + 1);
            // if(currentQuestionIndex<data.Questions.length - 1){
            // setCurrentQuestionIndex(currentQuestionIndex+1)}
            // else{
            //     navigate('/result',{ state: { data: userScore } })
            // }
        }

        handleNextQuestion();
    };

    return (
        <div className='mt-28 p-8 w-1/2 max-w-md mx-auto bg-gray-100 border rounded-md shadow-md'>
            <h1 className='text-center text-red-500 underline text-2xl font-bold mb-4'>{data.title}'s Quiz</h1>
            {currentQuestion && (
                <div>
                    <h2 className='text-lg font-semibold mb-2'> <span className='text-blue-600 font-bold'>Q.{currentQuestionIndex + 1} </span>{currentQuestion.question}</h2>
                    <ul className='mb-4'>
                        {currentQuestion.options.map((option, index) => (
                            <li
                                key={index}
                                className='cursor-pointer p-2 m-2 border rounded-md hover:bg-blue-200 '
                                // onClick={() => handleOptionClick(index)}
                                onChange={() => (`classname=bg-red-400`)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    {/* <p className='text-sm mb-2'>Correct Answer: {currentQuestion.correctAnswer}</p>
                    <p className='text-sm mb-4'>User Score: {userScore}</p> */}
                    <div className='flex justify-between'>
                        <button
                            className={`px-4 py-2 rounded-md ${currentQuestionIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-700'
                                }`}
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            Previous
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${currentQuestionIndex < data.Questions.length - 1 ? 'bg-blue-400 hover:bg-blue-700' : 'bg-green-400 hover:bg-green-600 font-bold'} `}
                            onClick={handleNextQuestion}
                        >
                            {currentQuestionIndex < data.Questions.length - 1 ? 'Next' : 'Submit'}
                        </button>
                    </div>
                </div>
            )}
            {currentQuestionIndex === data.Questions.length - 1 && (
                <p className='text-sm mt-4 text-center'>This is the last question. Click "Submit" to finish the quiz.</p>
            )}
        </div>
    );
};

export default QuizDetail;





// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// // // const QuizDetail = () => {
// //     // const navigate = useNavigate();
// //     // const location = useLocation();
// //     const location = useLocation();
// //     const data1 = location.state;
// //     console.log(data1);
// //     // console.log(data.title);
// //     const data = data1.data;
// //     // console.log(data1.title);
// //     console.log(data.title);
// //     // console.log(data1.data.title);
// //     // console.log(data.data.title);
// //     // const [quizDetails, setQuizDetails] = useState([]);
// //     // setQuizDetails(data);
// //     // // const quizdata = location.state.data;
// //     // console.log(data)

// //     // useEffect(() => {
// //     //     setQuizDetails(data);
// //     //     console.log(quizDetails);
// //     // }, []);

// //     return (
// //         <div className='pt-28'>
// //             quiz quizDetails
// //             {/* {data} */}
// //             {/* <div className='w-full'>
// //                 <h2 className='text-center text-black font-bold text-3xl p-5 underline'>{data.title} Quiz</h2>
// //                 {data.questions.map((question, index) => (
// //                     <div key={index} className='mb-8'>
// //                         <p className='text-xl font-semibold'>{question.question}</p>
// //                         <div className='ml-8 mt-2'>
// //                             {Object.keys(question).map((key) => {
// //                                 if (key.startsWith('option')) {
// //                                     return (
// //                                         <div key={key} className='mb-2'>
// //                                             <input type='radio' id={`${index}_${key}`} name={`q${index}`} value={question[key]} />
// //                                             <label htmlFor={`${index}_${key}`} className='ml-2'>{question[key]}</label>
// //                                         </div>
// //                                     );
// //                                 }
// //                                 return null;
// //                             })}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div> */}
// //         </div>
// //     );
// // };

// // // export default QuizDetail;


// const QuizDetail = () => {
//     const location = useLocation();
//     const data1 = location.state;
//     console.log(data1);
//     const data = data1.data;
//     console.log(data.title);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const currentQuestion = data.Questions[currentQuestionIndex];

//     const handleNextQuestion = () => {
//         setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     };

//     return (
//         <div className='p-28'>
//             <h1>{data.title}</h1>
//             {currentQuestion && (
//                 <div>
//                     <h2>{currentQuestion.question}</h2>
//                     <ul>
//                         {currentQuestion.options.map((option, index) => (
//                             <li key={index}>{option}</li>
//                         ))}
//                     </ul>
//                     <p>Correct Answer: {currentQuestion.correctAnswer}</p>
//                     {currentQuestionIndex < data.Questions.length - 1 && (
//                         <button onClick={handleNextQuestion}>Next Question</button>
//                     )}
//                 </div>
//             )}
//             {currentQuestionIndex === data.Questions.length - 1 && (
//                 <p>End of Quiz</p>
//             )}
//         </div>
//     );
// };

// export default QuizDetail;