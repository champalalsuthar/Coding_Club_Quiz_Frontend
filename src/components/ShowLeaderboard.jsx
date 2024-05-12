import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, setUserData } from '../Redux/dashboardSlice';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Instructions from './Instructions';
import toast from 'react-hot-toast';
import pic from "../Assets/commentpic.png";

import axios from 'axios';
import Footer from './Footer';
import { ImPieChart } from 'react-icons/im';
const ShowLeaderboard = () => {
    const location = useLocation();
    const data1 = location.state;
    const data = data1.data;
    console.log(data);
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const [showi, setShowi] = useState(false);
    const userData = useSelector(selectUserData);
    console.log(userData);
    const [FormData, setFormData] = useState({
        Comment: "",
    });
    const NAVIGATE = useNavigate();

    console.log(data._id);
    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };
    const submithandler = (event) => {
        event.preventDefault();

        const dataToSend = {
            ...FormData,
            quizid: data._id,
            userid: userData._id,
            firstname: userData.firstname,
            Lastname: userData.Lastname,
        };
        console.log(dataToSend);
        // axios.post("http://localhost:5000/comment", dataToSend)
        axios.post("https://coding-club-quiz-backend.vercel.app/comment", dataToSend)
            .then((response) => {
                if (response.data.code === 200) {
                    toast.success("comment added");
                    window.location.reload();
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to submit comment");
            });
    };
    const showleadershow = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/leaderboard', { quizid: data._id });
            const response = await axios.post('https://coding-club-quiz-backend.vercel.app/leaderboard', { quizid: data._id });
            setLeaderboardData(response.data);
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching user results:', error);
        }
    };
    const showcomments = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/comments', { quizid: data._id });
            const response = await axios.post('https://coding-club-quiz-backend.vercel.app/comments', { quizid: data._id });
            setCommentData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching user results:', error);
        }
    };
    useEffect(() => {
        showcomments();
        showleadershow();
    }, []);
    const changeGO2 = (quiz) => {
        console.log(quiz);
        // NAVIGATE(`/allquizes/${quizId}`, { state: { data: quiz } });
        NAVIGATE(`/allquizes/${quiz._id}`, { state: { data: data } });
    }
    const changeGO = (res) => {
        console.log(res);
        NAVIGATE(`/userprofile/${res.userId}`, { state: { data: res } });
    }

    return (
        <div>
            <div className={` ${showi ? 'hidden' : ''}`}>
                <div className="overflow-x-auto text-center ">
                    <div>
                        <p className="text-4xl font-bold text-red-500 underline my-8"> {data.title} Quiz details </p>
                        <p className="text-md font-semibold text-black m-2"> Quiz Created by -{data.userfullname} </p>
                        <p className="text-md font-semibold text-black m-2"> Questions -{data.Questions.length}  </p>
                    </div>
                    <div className="flex lg:flex-row justify-center">
                        <button onClick={() => setShowi(true)} className="hover:bg-indigo-500 text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4">
                            Attempt Quiz
                        </button>
                        <Link to="/dashboard" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">
                            Go DashBoard</Link>
                    </div>
                    <p className="text-4xl font-bold text-red-500 underline my-8"> LeaderBoard </p>
                    {/* <p className="text-xl font-bold text-black-500 underline m-2 text-right"> - by {data.userfullname} </p> */}
                    <table className="min-w-full bg-white border border-gray-300 text-center">
                        <thead className="text-xl">
                            <tr >
                                <th className="py-2 px-4 border-b">Rank</th>
                                <th className="py-2 px-4 border-b">User-Name</th>
                                <th className="py-2 px-4 border-b">Score Out of {data.Questions.length}</th>
                            </tr>
                        </thead>
                        {leaderboardData.length > 0 ? (
                            <tbody>
                                {leaderboardData.map((res, index) => (
                                    <tr key={index}
                                        className="hover:bg-gray-100  "
                                    >
                                        <td className="py-2 px-4 border-b" >
                                            {index + 1}
                                        </td>
                                        <td
                                            onClick={() => changeGO(res)}
                                            className="py-2 px-4 border-b cursor-pointer underline text-blue-400">
                                            {res.username}
                                        </td>
                                        <td className="py-2 px-4 border-b">{res.score}</td>
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

                <div className='w-full h-full bg-slate-200  '>
                    <p className="text-4xl text-center font-bold text-red-500 underline my-8"> Comments </p>
                    <form autoComplete="on" className=" rounded-md p-4 bg-slate-200 w-2/3 flex flex-col gap-y-4  mx-auto" onSubmit={submithandler}>
                        <label className="w-full h-20">
                            <p className="text-[0.875rem] text-black mb-1 leading-[1.375]">
                                Comment Text: <sup className="text-red-400">*</sup>
                            </p>
                            <textarea
                                className="bg-slate-200 border p-1 outline-none border-red-300 rounded-[0.5rem] text-richblack-5 w-full"
                                name="Comment"
                                value={FormData.Comment}
                                required
                                placeholder="Write text here:"
                                onChange={changeHandler}
                            />
                        </label>
                        <button type="submit" className='w-1/2 mx-auto rounded-lg p-1 bg-yellow-300 border border-sky-100'>Submit</button>
                    </form>
                    <div className=" rounded-md p-4 bg-slate-200 w-2/3 flex flex-col gap-y-4  mx-auto text-center">
                        <p className="text-xl text-center font-bold text-red-500 underline m-1"> Old Comments ({commentData.length})</p>
                        <p className="text-sm text-center font-bold text-red-300 "> Sort By <span className='text-black underline' >Latest First</span></p>
                        <ul className="divide-y divide-gray-200">
                            {commentData.map((comment) => (
                                <li key={comment._id} className="py-4">
                                    <div className="flex space-x-3 border border-red-300 p-1 rounded">
                                        <img className="h-10 w-10 rounded-full" src={pic} alt="" /> {/* Add a profile picture */}
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-semibold text-gray-900">{comment.firstname} {comment.Lastname}</h3>
                                                <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                                            </div>
                                            <p className="text-sm text-gray-700">{comment.Comment}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <Footer />
            </div>
            <div className={` w-full h-screen flex justify-center items-center absolute inset-0   ${showi ? 'bg-opacity-10 ' : 'hidden'}`}
            // onClick={() => setDelPopup(false)}
            >

                {showi && (
                    <div className=" text-white  bg-slate-200 shadow-lg border border-white absolute z-10  inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-1/2 text-center flex flex-col justify-center items-center rounded-lg ">
                        <p className='text-xl font-bold text-red-500 my-3 underline'>Quiz INstructions</p>

                        <p className='font-semibold text-black text-xs'>1.Every question with time limit of 30 seconds</p>
                        <p className='font-semibold text-black text-xs'>2. Answer all questions before the timer runs out to score points.</p>
                        <p className='font-semibold text-black text-xs'>3. Each correct answer earns you 1 point, while wrong answers do not deduct points.</p>
                        <p className='font-semibold text-black text-xs'>4. You can skip a question, but it won't earn or deduct points.</p>
                        <p className='font-semibold text-black text-xs'>5. Use the navigation buttons to move between questions.</p>
                        <p className='font-semibold text-red-300'>Are You Sure to attempt Quiz?</p>
                        <div className="flex gap-5 justify-evenly mt-4">
                            <button className='bg-green-500 px-2 py-1 rounded-lg hover:bg-yellow-300'
                                onClick={() => {
                                    setShowi(false)
                                    changeGO2(data);
                                }}
                            >Yes
                            </button>
                            <button className='bg-green-500 px-2 py-1 rounded-lg hover:bg-yellow-300'
                                onClick={() => {
                                    setShowi(false)
                                }}
                            >No
                            </button>
                        </div>
                    </div>
                )}
            </div>



        </div >
    )
}

export default ShowLeaderboard;