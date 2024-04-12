import React from "react";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Result = (props) => {

    const shareOnSocialMedia = () => {
        toast.success("Shared..!", {
            position: "top-center"
        });
    };
    const score = props.score;
    const total = props.totalScore;
    const leaderboarData = props.leaderboarData;
    const quizid = props.quizid;
    const userData = props.userData;
    console.log(quizid);
    console.log(userData);


    return (
        <div className="flex flex-col gap-10 text-center pb-10 bg-white m-auto ">
            <div className="pt-6 text-center bg-white m-auto border-solid border-black rounded-md  max-w-md ">
                <div className="flex items-center justify-center mb-4 align-baseline">
                    <h1 className="text-lg   mr-2" ><FaTrophy /> </h1>
                    <h2 className="text-2xl text-green-500 font-bold">Congratulations!</h2>
                </div>
                <p className="mb-4 text-indigo-800 text-2xl font-bold">
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
                <p className="text-4xl font-bold text-red-500 underline my-8"> Quiz's LeaderBoard </p>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="text-xl">
                        <tr >
                            <th className="py-2 px-4 border-b">Rank</th>
                            <th className="py-2 px-4 border-b">User-Name</th>
                            <th className="py-2 px-4 border-b">User-Id</th>
                            <th className="py-2 px-4 border-b">Score Out Of {total} </th>
                        </tr>
                    </thead>
                    {leaderboarData.length > 0 ? (
                        <tbody>
                            {leaderboarData.map((res, index) => (
                                // res.userId == userData && res.userId==quizid
                                <tr key={index} className={`hover:bg-gray-100 ${res.userId === userData && res.quizid === quizid ? '  bg-yellow-200 hover:bg-red-200 ' : ''}`}>
                                    <td className="py-2 px-4 border-b" >
                                        {index + 1}
                                        <span className={`${res.userId === userData && res.quizid === quizid ? 'inline text-xs' : 'hidden'}`} >
                                            (Your-rank)</span>
                                    </td>
                                    <td className="py-2 px-4 border-b">{res.username}</td>
                                    <td className="py-2 px-4 border-b">{res.userId}</td>
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
        </div>
    );
}
export default Result;
