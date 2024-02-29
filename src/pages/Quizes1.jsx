import React, { useEffect, useState } from 'react'
import axios from 'axios'
import QuizList from '../components/Quizlist';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import QuizDetail from '../components/QuizDetail';

import Quizlogo from '../Assets/Quizlogo.webp'

import Footer from '../components/Footer';

const Quizes1 = () => {
    const [data, setData] = useState([]);
    const NAVIGATE = useNavigate();

    const changeGO = (quiz) => {
        console.log(quiz);
        // NAVIGATE(`/allquizes/${quizId}`, { state: { data: quiz } });
        NAVIGATE(`/allquizes/${quiz._Id}`, { state: { data: quiz } });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("https://coding-club-quiz-backend.vercel.app/allquizes");
                const data = response.data;
                console.log(data);
                setData(data);
            }
            catch (error) {
                console.error("Error validating token:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='pt-28 overflow-hidden  bg-slate-200 '>
            <div className='overflow-hidden '>
                <div className='w-full bg-slate-200'>
                    <h2 className='text-center text-black font-bold text-3xl p-5 underline'> Available Quizzes ({data.length})</h2>
                    <div className='  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 m-4'>
                        {data.map((quiz) => (
                            <div key={quiz._id} className='  '>
                                <div className=" bg-blue-100 text-center  p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <h1 className="text-xl text-red-500 font-bold m-2 uppercase">{quiz.title}'s Quiz</h1>
                                    <img src={Quizlogo} alt="Kitten" className="w-full h-full mb-4 rounded-md shadow-md" />
                                    <p className="mb-4">No. of Questions = {quiz.Questions.length}</p>
                                    <button onClick={() => changeGO(quiz)} className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4">
                                        Attempt Quiz
                                    </button>
                                    <p>quiz created by : {quiz.userfullname}</p>
                                    {/* <p>quiz created by : {quiz.userid}</p> */}
                                    {/* <p>quiz time created : {quiz.createdAt}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>



    )
}

export default Quizes1;


// <div className=' pt-28 overflow-hidden'>
//     <div className='w-full'>
//         <h2 className=' text-center text-black font-bold text-3xl p-5 underline'> Available Quizzes ({data.length})</h2>
//         <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
//             {data.map((quiz) => (
//                 <div key={quiz._id} className=' w-[1500px] h-[400px]'>
//                     <div className="text-center xl:w-1/4  sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                         <h1 className="text-xl text-red-500 font-bold m-2 uppercase">{quiz.title}'s Quiz</h1>
//                         <img src={html} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
//                         <p>No. of Questions = {quiz.Questions.length}</p>
//                         <button onClick={() => changeGO(quiz)}   className="hover:bg-indigo-500   text-white   py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</button>
//                     </div>
//                     {/* <p>{quiz._id}</p> */}
//                     {/* <p>{quiz.title}</p> */}
//                     {/* <button onClick={changeGO}>{quiz.title}</button> */}
//                     {/* <p>{quiz.Questions.length} Questions</p> */}
//                 </div>
//             ))}
//         </div>
//         {/* <QuizList data={data} ></QuizList> */}
//     </div>
// </div>