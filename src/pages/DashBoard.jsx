import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, setUserData } from '../Redux/dashboardSlice';
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Quizlogo from '../Assets/Quizlogo.webp';

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
        const userIdToFetch = userData._id;
        console.log(userIdToFetch);
        console.log(userIdToFetch);

        axios.post('https://coding-club-quiz-backend.vercel.app/userAllResults', { userId: userIdToFetch })
            .then((response) => {
                setUserResult(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user results:', error);
            });

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
    // const handleDelete = async () => {
    //     try {
    //         // Make a DELETE request to your API endpoint
    //         const response = await axios.delete(`https://coding-club-quiz-backend.vercel.app/quizzes/${quizId}`);

    //         // Handle the response or trigger any necessary actions
    //         console.log(response.data);

    //         // Optionally, update the UI by calling the onDelete callback
    //         onDelete();
    //     } catch (error) {
    //         console.error('Error deleting quiz:', error);
    //     }
    // };


    return (
        <div className="pt-28">
            <div className=" h-full w-full">
                <Profile user={userData} />
                <div className="overflow-x-auto text-center ">
                    <p className="text-4xl font-semibold text-red-400 underline m-5 ">Quiz Attempt Results Overview</p>
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
                                        <td className="py-2 px-4 border-b">{quiz.quizTitle}</td>
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
                                        <div className="bg-blue-100 text-center p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                            <h1 className="text-xl text-red-500 font-bold m-2 uppercase">{quiz.title}'s Quiz</h1>
                                            <img src={Quizlogo} alt="Kitten" className="w-full h-full mb-4 rounded-md shadow-md" />
                                            <p className="mb-4">No. of Questions = {quiz.Questions.length}</p>
                                            <button
                                                onClick={() => Navigate('/allquizes')}
                                                className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4"
                                            >
                                                Attempt Quiz
                                            </button>
                                            <button
                                                // onClick={()=>handleDelete(quiz._id)}
                                                className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-red-600 transition duration-300 m-4"
                                            >
                                                Delete Quiz
                                            </button>
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
        </div >
    );
}

export default DashBoard;


// import React, { useEffect, useState } from "react";
// import Profile from "../components/Profile";
// import Footer from "../components/Footer";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// // import { useDispatch } from 'react-redux';
// // import { setUserData } from '../Redux/dashboardSlice';
// import userEvent from "@testing-library/user-event";
// import Quizlogo from '../Assets/Quizlogo.webp';

// import { useSelector } from 'react-redux';
// import { selectUserData } from '../Redux/dashboardSlice';



// const DashBoard = ({ setIsLoggedIn }) => {
//     // const location = useLocation();
//     // const data = location.state && location.state.user;
//     // const [userData1, setUserData1] = useState("");
//     const [userResult, setUserResult] = useState("");
//     const [userQuizzes, setUserQuizzes] = useState([]);
//     const Navigate = useNavigate();

//     const userData = useSelector(selectUserData);
//     console.log(userData);
//     console.log(userData._id);


//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const storedToken = window.localStorage.getItem('token');
//     //             // console.log(storedToken);
//     //             if (storedToken) {
//     //                 // const response = await axios.post("https://coding-club-quiz-backend.vercel.app/validateToken", { token: storedToken });
//     //                 const response = await axios.post("http://localhost:5000/validateToken", { token: storedToken });
//     //                 const userDataFromServer = response.data.data;
//     //                 console.log(userDataFromServer);
//     //                 // console.log(userDataFromServer);
//     //                 setUserData1(userDataFromServer);
//     //             }
//     //         } catch (error) {
//     //             console.error("Error validating token:", error);
//     //             Navigate("/login");
//     //         }
//     //     };
//     //     if (!data) {
//     //         console.log("1");
//     //         fetchData();
//     //     }
//     //     else {
//     //         console.log("2");
//     //         setUserData1(data.result);
//     //     }
//     // }, []);

//     // const dispatch = useDispatch();
//     // dispatch(setUserData(userData1));

//     // console.log(setUserData1);
//     // console.log(setUserData1._id);
//     // console.log(userData1._id);


//     // useEffect(() => {
//     //     // const userIdToFetch = userData1._id;
//     //     const userIdToFetch = '65d6e462d74059e55de8e69c';
//     //     // console.log(userData1._id);
//     //     console.log(userIdToFetch);
//     //     axios.post('http://localhost:5000/userAllResults', { userId: userIdToFetch })
//     //         .then((response) => {
//     //             console.log('User results:', response.data);
//     //             setUserResult(response.data);
//     //             console.log(userResult);
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error fetching user results:', error);
//     //         });
//     //     axios.post('http://localhost:5000/AllCreatedQuizzes', { userId: userIdToFetch })
//     //         .then((res) => {
//     //             console.log('Quiz Orgenized by User :', res.data);
//     //             setUserQuizzes(res.data);
//     //             console.log(userQuizzes);
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error fetching user results:', error);
//     //         });
//     // }, [])
//     useEffect(() => {
//         const userIdToFetch = userData._id;
//         axios.post('http://localhost:5000/userAllResults', { userId: userIdToFetch })
//             .then((response) => {
//                 setUserResult(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching user results:', error);
//             });

//         axios.post('http://localhost:5000/AllCreatedQuizzes', { userId: userIdToFetch })
//             .then((res) => {
//                 setUserQuizzes(res.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching user quizzes:', error);
//             });
//     }, [userData._id]);
//     // const handleDelete = async () => {
//     //     try {
//     //         // Make a DELETE request to your API endpoint
//     //         const response = await axios.delete(`http://localhost:5000/quizzes/${quizId}`);

//     //         // Handle the response or trigger any necessary actions
//     //         console.log(response.data);

//     //         // Optionally, update the UI by calling the onDelete callback
//     //         onDelete();
//     //     } catch (error) {
//     //         console.error('Error deleting quiz:', error);
//     //     }
//     // };


//     return (
//         <div className="pt-28">

//             <div className=" h-full w-full">
//                 <Profile user={userData} />
//                 <div className="overflow-x-auto text-center ">
//                     <p className="text-4xl font-semibold text-red-400 underline m-5 ">Quiz Attempt Results Overview</p>
//                     <table className="min-w-full bg-white border border-gray-300">
//                         <thead className="text-xl">
//                             <tr>
//                                 <th className="py-2 px-4 border-b">Quiz Title</th>
//                                 <th className="py-2 px-4 border-b">Score</th>
//                                 <th className="py-2 px-4 border-b">Out Off</th>
//                             </tr>
//                         </thead>
//                         {userResult.length > 0 ? (
//                             <tbody>
//                                 {userResult.map((quiz, index) => (
//                                     <tr key={index} className="hover:bg-gray-100">
//                                         <td className="py-2 px-4 border-b">{quiz.quizTitle}</td>
//                                         <td className="py-2 px-4 border-b">{quiz.score}</td>
//                                         <td className="py-2 px-4 border-b">{quiz.numberOfQuestions}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         ) : (
//                             <tbody>
//                                 <tr>
//                                     <td className=" py-2 px-4 border-b" colSpan="3">No results found</td>
//                                 </tr>
//                             </tbody>
//                         )}
//                     </table>
//                 </div>
//                 <div className='overflow-hidden text-center '>
//                     <div className='w-full bg-slate-200 p-3'>
//                         <h2 className=' text-4xl font-semibold text-red-400 underline m-5 p-3'> Orgenized Quizzes ({userQuizzes.length})</h2>
//                         <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 m-4'>
//                             {userQuizzes.length > 0 ? (
//                                 userQuizzes.map((quiz) => (
//                                     <div key={quiz._id} className='text-center'>
//                                         <div className="bg-blue-100 text-center p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                                             <h1 className="text-xl text-red-500 font-bold m-2 uppercase">{quiz.title}'s Quiz</h1>
//                                             <img src={Quizlogo} alt="Kitten" className="w-full h-full mb-4 rounded-md shadow-md" />
//                                             <p className="mb-4">No. of Questions = {quiz.Questions.length}</p>
//                                             <button
//                                                 onClick={() => Navigate('/allquizes')}
//                                                 className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4"
//                                             >
//                                                 Attempt Quiz
//                                             </button>
//                                             <button
//                                                 // onClick={handleDelete}
//                                                 className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-red-600 transition duration-300 m-4"
//                                             >
//                                                 Delete Quiz
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p className="text-center">No quizzes found</p>
//                             )}
//                         </div>

//                     </div>
//                 </div>

//                 <Footer />
//             </div>

//         </div>

//     );
// }
// export default DashBoard;