import React, { useState } from 'react';
import { htmlQuizData } from './htmlQuizData';
import Result from '../pages/Result';



const HtmlQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [clickedOption, setClickedOption] = useState(0);


    function changeNextQuestion() {
        updateScore();
        if (currentQuestion < htmlQuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setClickedOption(0);
        }
        else {
            setShowResult(true)
        }

    }
    function changePrevQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
        else {
        }

    }
    const updateScore = () => {
        if (clickedOption === htmlQuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    console.log(htmlQuizData.length);
    return (
        <div className="lg:w-1/2  pt-28  m-auto  p-6 bg-white rounded-md shadow-lg">
            <div className="">
                {(showResult) ? (
                    <Result score={score} totalScore={htmlQuizData.length} tryAgain={resetAll} />
                )
                    :
                    (<>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{htmlQuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {htmlQuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn" 
                                        className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}

                        </div>
                        <div className=' flex justify-between'>
                            <input type="button" value="Prev" id="prev-button" onClick={changePrevQuestion} />
                            {(currentQuestion == htmlQuizData.length - 1) ? (
                                <input type="button" value="Submit" id="submit-button" onClick={changeNextQuestion} />
                            ) : (
                                <input type="button" value="Next" id="next-button" onClick={changeNextQuestion} />
                            )
                            }
                        </div>

                    </>
                    )}
            </div>

        </div>
    );
};

export default HtmlQuiz;