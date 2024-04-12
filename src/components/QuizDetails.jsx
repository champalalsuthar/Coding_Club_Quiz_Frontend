import React, { useState } from 'react';
import Result from '../pages/Result';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { selectUserData } from '../Redux/dashboardSlice';


const QuizDetails = () => {
    const location = useLocation();
    const data1 = location.state;
    const data = data1.data;

    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [clickedOption, setClickedOption] = useState(0);
    const [leaderboarData, setLeaderboardData]=useState();

    const userData = useSelector(selectUserData);
    console.log(userData);
    // console.log(userData._id);
    const showleadershow = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/leaderboard', { quizid: data._id });
            const response = await axios.post('https://coding-club-quiz-backend.vercel.app/leaderboard', { quizid: data._id });
            setLeaderboardData(response.data);
            console.log(response.data);
            setShowResult(true);
        } catch (error) {
            console.error('Error fetching user results:', error);
        }
    };
    



    const changeNextQuestion = async () => {
        updateScore();
        if (currentQuestion < data.Questions.length - 1) {
            console.log("if of CNQ" + score);
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            console.log("else 1 of CNQ" + score);
            const userId =userData._id;
            const quizTitle = data.title;
            const quizid=data._id;
            const username=userData.firstname;
            // console.log("quiz id");
            // console.log(quizid);
            // console.log("user id");
            // console.log(userId);
            console.log("else 2 of CNQ" + score);
            const numberOfQuestions = data.Questions.length;

            try {
                // const response = await axios.post('http://localhost:5000/saveUserResult', {
                const response = await axios.post('https://coding-club-quiz-backend.vercel.app/saveUserResult', {
                    userId,
                    quizid,
                    username,
                    quizTitle,
                    score,
                    numberOfQuestions,
                }, { withCredentials: true });
                console.log("try if  of CNQ" + score);

                if (response.status === 200) {
                    console.log("try if 200 of CNQ" + score);
                    console.log('User result saved successfully');
                    showleadershow();
                } else {
                    console.error('Failed to save user result');
                }
            } catch (error) {
                console.error('Error during API call:', error);
            }
        }
    };
    function changePrevQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
        else {
        }

    }
    const updateScore = () => {
        if (clickedOption == data.Questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    return (
        <div className="w-full lg:w-2/3 m-auto p-6 bg-white rounded-md shadow-lg">
            <div className="">
                {(showResult) ? (
                    <Result score={score} totalScore={data.Questions.length} leaderboarData={leaderboarData} quizid={data._id}  userData={userData._id} tryAgain={resetAll} />
                ) : (
                    <>
                        <h1 className='text-center text-red-500 underline text-2xl font-bold mb-4'>{data.title}'s Quiz</h1>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{data.Questions[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {data.Questions[currentQuestion].options.map((option, i) => (
                                <button
                                    className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                    key={i}
                                    onClick={() => setClickedOption(i + 1)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className='flex justify-between'>
                            <button
                                className={`px-4 py-2 rounded-md ${currentQuestion === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-700'
                                    }`}
                                onClick={changePrevQuestion}
                                disabled={currentQuestion === 0}
                            >
                                Previous
                            </button>
                            <button
                                className={`px-4 py-2 rounded-md ${currentQuestion < data.Questions.length - 1 ? 'bg-blue-400 hover:bg-blue-700' : 'bg-green-400 hover:bg-green-600 font-bold'} `}
                                onClick={changeNextQuestion}
                            >
                                {currentQuestion < data.Questions.length - 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

};

export default QuizDetails;


 // return (
    //     <div className="lg:w-1/2  pt-28 m-auto  p-6 bg-white rounded-md shadow-lg">
    //         <div className="">
    //             {(showResult) ? (
    //                 <Result score={score} totalScore={data.Questions.length} tryAgain={resetAll} />
    //             )
    //                 :
    //                 (<>
    //                     <h1 className='text-center text-red-500 underline text-2xl font-bold mb-4'>{data.title}'s Quiz</h1>
    //                     <div className="question">
    //                         <span id="question-number">{currentQuestion + 1}. </span>
    //                         <span id="question-txt">{data[currentQuestion].question}</span>
    //                     </div>
    //                     <div className="option-container">
    //                         {data[currentQuestion].options.map((option, i) => {
    //                             return (
    //                                 <button
    //                                     // className="option-btn" 
    //                                     className={`option-btn ${clickedOption === i + 1 ? "checked" : null
    //                                         }`}
    //                                     key={i}
    //                                     onClick={() => setClickedOption(i + 1)}
    //                                 >
    //                                     {option}
    //                                 </button>
    //                             )
    //                         })}

    //                     </div>
    //                     <div className=' flex justify-between'>

    //                         <input type="button" value="Prev" id="prev-button" onClick={changePrevQuestion} />
    //                         {(currentQuestion === data.Questions.length - 1) ? (
    //                             <input type="button" value="Submit" id="submit-button" onClick={changeNextQuestion} />


    //                         ) : (
    //                             <input type="button" value="Next" id="next-button" onClick={changeNextQuestion} />
    //                         )
    //                         }
    //                     </div>

    //                 </>
    //                 )}
    //         </div>

    //     </div>
    // );
   