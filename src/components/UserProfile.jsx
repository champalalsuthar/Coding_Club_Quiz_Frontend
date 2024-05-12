import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import Quizlogo from '../Assets/Quizlogo.webp';

const UserProfile = () => {
    const location = useLocation();
    const userData = location.state.data;
    const [userResult, setUserResult] = useState("");
    const [userQuizzes, setUserQuizzes] = useState([]);
    useEffect(() => {
        console.log(userData);
        // const userIdToFetch = userData ? userData._id : null;
        // console.log(userIdToFetch);
        // console.log(userIdToFetch);


        // axios.post('http://localhost:5000/userAllResults', { userId: userData.userId })
        axios.post('https://coding-club-quiz-backend.vercel.app/userAllResults', { userId: userData.userId })
            .then((response) => {
                console.log(response);
                setUserResult(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user results:', error);
            });

        // axios.post('http://localhost:5000/AllCreatedQuizzes', { userId: userData.userId })
        axios.post('https://coding-club-quiz-backend.vercel.app/AllCreatedQuizzes', { userId: userData.userId })
            .then((res) => {
                console.log(res);
                setUserQuizzes(res.data);
            })
            .catch((error) => {
                console.error('Error fetching user quizzes:', error);
            });
        // console.log(userIdToFetch);
    }, []);

    return (
        <div className="h-full w-full">
            <p style={{ color: 'red', padding: '5px', animation: 'moveText 5s linear infinite' }}>
                NOTE:  Currently you are viewing another user's profile
            </p>
            <div className='w-full h-full text-center'>
                <p className='m-3 text-3xl p-5 underline' >Welcome To {userData.username}'s Profile </p>
            </div>
            {!userData ? (
                <div className='h-[400px] w-screen flex justify-center items-center '>
                    <div className="loader"></div>
                </div>
            ) :
                (
                    <div className=" ">
                        <div className="overflow-x-auto text-center ">
                            <p className="text-xl font-semibold text-red-400 underline m-5 "><span className='text-blue-500 underline'>{userData.username}'s' </span>Quiz Attempt Results Overview</p>
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead className="text-xl">
                                    <tr>
                                        <th className="py-2 px-4 border-b">Quiz Title</th>
                                        <th className="py-2 px-4 border-b">Score</th>
                                        <th className="py-2 px-4 border-b">Out Off</th>
                                    </tr>
                                </thead>
                                {userResult.length > 0 ? (
                                    <tbody>
                                        {userResult.map((quiz, index) => (
                                            <tr key={index} className="hover:bg-gray-100">
                                                <td className="py-2 px-4 border-b underline text-blue-400">
                                                    {/* <Link to="/allquizes"  > */}
                                                    {quiz.quizTitle}
                                                    {/* </Link> */}
                                                </td>
                                                <td className="py-2 px-4 border-b">{quiz.score}</td>
                                                <td className="py-2 px-4 border-b">{quiz.numberOfQuestions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                ) : (
                                    <tbody>
                                        <tr>
                                            <td className=" py-2 px-4 border-b" colSpan="3">No results found</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                        <div className='overflow-hidden text-center '>
                            <div className='w-full bg-slate-200 p-3'>
                                <h2 className=' text-xl font-semibold text-red-400 underline m-5 p-3'> Orgenized Quizzes By <span className='text-blue-500 underline'>{userData.username} </span> ({userQuizzes.length})</h2>
                                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 m-4'>
                                    {userQuizzes.length > 0 ? (
                                        userQuizzes.map((quiz) => (
                                            <div key={quiz._id} className='text-center'>
                                                <div className=" bg-blue-100 text-center p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                                    <h1 className="text-xl text-red-500 font-bold m-2 uppercase">{quiz.title}'s Quiz</h1>
                                                    <img src={Quizlogo} alt="Kitten" className="w-full h-full mb-4 rounded-md shadow-md" />
                                                    <p className="mb-4">No. of Questions = {quiz.Questions.length}</p>
                                                    {/* <button
                                            onClick={() => Navigate('/allquizes')}
                                            className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4"
                                        >
                                            Attempt Quiz
                                        </button> */}
                                                    {/* <button
                                                    onClick={() => handleEdit(quiz._id)}
                                                    className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4"
                                                >
                                                    <p style={{ display: 'flex', alignItems: 'center' }}>Edit Quiz <span><AiTwotoneEdit className="" /></span></p>

                                                </button>

                                                <button
                                                    onClick={() => handleDelete(quiz._id)}
                                                    className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-red-600 transition duration-300 m-4"
                                                >
                                                    <p style={{ display: 'flex', alignItems: 'center' }}>Delete Quiz <span><AiFillDelete className="" /></span></p>
                                                </button> */}
                                                </div>

                                            </div>

                                        ))
                                    ) : (
                                        <p className="text-center">No quizzes found</p>
                                    )}
                                </div>

                            </div>
                        </div>
                        <Footer />
                    </div >
                )}
        </div >
    );
};

export default UserProfile;
