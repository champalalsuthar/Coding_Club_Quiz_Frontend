import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, setUserData } from '../Redux/dashboardSlice';
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import axios from 'axios';
import Quizlogo from '../Assets/Quizlogo.webp';
import { toHaveStyle } from "@testing-library/jest-dom/matchers";



import toast from 'react-hot-toast';

const DashBoard = ({ setIsLoggedIn }) => {
    const [userResult, setUserResult] = useState("");
    const [userQuizzes, setUserQuizzes] = useState([]);
    const Navigate = useNavigate();

    const userData = useSelector(selectUserData);
    // const dispatch = useDispatch();
    console.log(userData);
    // console.log(userData._id);
    console.log(userQuizzes);
    console.log(userResult);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Assuming you have a function to fetch user data
    //             const userDataFromServer = await fetchUserData();
    //             dispatch(setUserData(userDataFromServer));
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //             Navigate("/login");
    //         }
    //     };

    //     if (!userData) {
    //         fetchData();
    //     }
    // }, [userData, dispatch, Navigate]);

    useEffect(() => {
        console.log(userData);
        const userIdToFetch = userData ? userData._id : null;
        console.log(userIdToFetch);
        console.log(userIdToFetch);

        // axios.post('http://localhost:5000/userAllResults', { userId: userIdToFetch })
        axios.post('https://coding-club-quiz-backend.vercel.app/userAllResults', { userId: userIdToFetch })
            .then((response) => {
                setUserResult(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user results:', error);
            });

        // axios.post('http://localhost:5000/AllCreatedQuizzes', { userId: userIdToFetch })
        axios.post('https://coding-club-quiz-backend.vercel.app/AllCreatedQuizzes', { userId: userIdToFetch })
            .then((res) => {
                setUserQuizzes(res.data);
            })
            .catch((error) => {
                console.error('Error fetching user quizzes:', error);
            });
        // console.log(userIdToFetch);
    }, [userData]);
    console.log(userQuizzes);
    console.log(userResult);
    const handleEdit = async (quizId) => {
        toast.error("Server Busy...!");
    }

    const handleDelete = async (deletequizId) => {
        // toast.error("Server Busy...!", {
        //     position: toast.POSITION.TOP_CENTER,
        // });
        console.log(deletequizId);
        try {
            // Make a DELETE request to your API endpoint
            // await axios.delete(`http://localhost:5000/deletequiz?id=${deletequizId}`);
            await axios.delete(`https://coding-club-quiz-backend.vercel.app/deletequiz?id=${deletequizId}`);
            console.log("yes");
            setUserQuizzes(userQuizzes.filter((quiz) => quiz._id !== deletequizId));
        } catch (error) {
            console.error('Error deleting quiz:', error);
        }
    };

    return (
        <div className="h-full w-full">
            {!userData ? (
                <div className='h-[400px] w-screen flex justify-center items-center '>
                    <div className="loader"></div>
                </div>
            ) :
                (
                    <div className=" ">
                        <Profile user={userData} />
                        <div className="overflow-x-auto text-center ">
                            <p className="text-4xl font-semibold text-red-400 underline m-5 ">Quiz Attempt Results Overview</p>
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead className=






                                    "text-xl">
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
                                                    <Link to="/allquizes"  >{quiz.quizTitle}
                                                    </Link>
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
                                <h2 className=' text-4xl font-semibold text-red-400 underline m-5 p-3'> Orgenized Quizzes ({userQuizzes.length})</h2>
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
}

export default DashBoard;
