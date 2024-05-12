import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, setUserData } from '../Redux/dashboardSlice';
import { FaTrophy } from "react-icons/fa";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';
import Footer from "../components/Footer";
import pic from '../Assets/commentpic.png';


const Result = (props) => {
    const [commentData, setCommentData] = useState([]);
    let [currCommentData, setCurrCommentData] = useState(true);
    const userData = useSelector(selectUserData);
    console.log(userData);
    const [FormData, setFormData] = useState({
        Comment: "",
    });
    const shareOnSocialMedia = () => {
        toast.success("Shared..!");
    };


    const score = props.score;
    const total = props.totalScore;
    const data = props.data;
    const leaderboarData = props.leaderboarData;
    const quizid = props.quizid;
    const userdataid = props.userData;
    console.log(quizid);
    console.log(userData);
    const NAVIGATE = useNavigate();


    const changeGO = (res) => {
        console.log(res);
        // NAVIGATE(`/allquizes/${quizId}`, { state: { data: quiz } });
        NAVIGATE(`/userprofile/${res.userId}`, { state: { data: res } });
    }
    const changeGO2 = (quiz) => {
        console.log(quiz);
        // NAVIGATE(`/allquizes/${quizId}`, { state: { data: quiz } });
        NAVIGATE(`/allquizes/${quiz._id}`, { state: { data: data } });
    }
    const changeGO3 = () => {
        currCommentData ? setCurrCommentData(false) : setCurrCommentData(true);
    }

    const showcomments = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/comments', { quizid: quizid });
            const response = await axios.post('https://coding-club-quiz-backend.vercel.app/comments', { quizid: quizid });
            setCommentData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching user results:', error);
        }
    }
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
            quizid: quizid,
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
                    // setCurrCommentData(...currCommentData,dataToSend);
                    changeGO3();
                    // changeGO2(data);
                    // window.location.reload();
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to submit comment");
            });
    };
    useEffect(() => {
        showcomments();
    }, []);
    useEffect(() => {
        console.log("use useeffect when changed currCommentData");
        showcomments();
    }, [currCommentData]);

    return (
        <div className="flex flex-col gap-10 text-center pb-10 bg-white m-auto ">
            <div className="pt-6 text-center  m-auto border-solid border-black rounded-md  max-w-md ">
                <div className="flex items-center justify-center mb-4 align-baseline">
                    <h1 className="text-lg   mr-2" ><FaTrophy /> </h1>
                    <h2 className="text-2xl text-green-500 font-bold">Congratulations!</h2>
                </div>
                <p className="mb-2 text-indigo-800 text-2xl font-bold">
                    You score {score} out of {total}
                </p>

                {/* <button
                    className="bg-zinc-500 hover:bg-blue-600 text-white px-2 py-2 mt-3 mb-3 rounded-md"
                    onClick={shareOnSocialMedia}
                >
                    Share with us!
                </button>
                <div className="flex gap-2 justify-center ">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin className="h-8 w-8 mt-2 " />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
                        <FaInstagramSquare className="h-8 w-8 mt-2 " />
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" >
                        <FaWhatsappSquare className="h-8 w-8 mt-2 " />
                    </a>
                </div> */}
            </div>
            <div className="overflow-x-auto text-center ">
                <p className="text-4xl font-bold text-red-500 underline my-4"> Quiz's LeaderBoard </p>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="text-xl">
                        <tr >
                            <th className="py-2 px-4 border-b">Rank</th>
                            <th className="py-2 px-4 border-b">User-Name</th>
                            {/* <th className="py-2 px-4 border-b">User-Id</th> */}
                            <th className="py-2 px-4 border-b">Score Out Of {total} </th>
                        </tr>
                    </thead>
                    {leaderboarData.length > 0 ? (
                        <tbody>
                            {leaderboarData.map((res, index) => (
                                // res.userId == userData && res.userId==quizid
                                <tr key={index} className={`hover:bg-gray-100 ${res.userId === userData._id && res.quizid === quizid ? '  bg-yellow-200 hover:bg-red-200 ' : ''}`}>
                                    <td className="py-2 px-4 border-b" >
                                        {index + 1}
                                        <span className={`${res.userId === userData._id && res.quizid === quizid ? 'inline text-xs' : 'hidden'}`} >
                                            (Your-rank)</span>
                                    </td>
                                    <td onClick={() => changeGO(res)} className="py-2 px-4 border-b cursor-pointer underline text-blue-400">
                                        {res.username}
                                    </td>
                                    {/* <td className="py-2 px-4 border-b">{res.username}</td> */}
                                    {/* <td className="py-2 px-4 border-b">{res.userId}</td> */}
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

            <div className="flex lg:flex-row justify-center">
                <Link to="/dashboard" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">
                    Go DashBoard</Link>
                <Link to="/allquizes" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">
                    Attempt More</Link>
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
                    <p className="text-xl text-center font-bold text-red-500 underline m-1"> Old Comments ({commentData.length}) </p>
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
        </div>
    );
}
export default Result;
