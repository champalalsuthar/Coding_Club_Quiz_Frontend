import React from "react";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Result = (props) => {

    const shareOnSocialMedia = () => {
        alert('Shared on social media!');
    };
    const score = props.score;
    const total = props.totalScore;
    return (
        <div className="flex flex-col  gap-10 text-center pb-10 bg-white m-auto ">
            <div className="pt-6 text-center bg-white m-auto border-solid border-black rounded-md  max-w-md ">
                <div className="flex items-center justify-center mb-4 align-baseline">
                    <h1 className="text-lg   mr-2" ><FaTrophy /> </h1>
                    <h2 className="text-2xl text-red-600 font-bold">Congratulations!</h2>
                </div>
                <p className="mb-4 text-indigo-800 text-2xl font-bold">
                    You score {score} out of {total}
                </p>

                <button
                    className="bg-zinc-500 hover:bg-blue-600 text-white px-2 py-2 mt-3 mb-3 rounded-md"
                    onClick={shareOnSocialMedia}
                >
                    Share with us!
                </button>
                <div className="flex gap-2 justify-center ">
                    {/* Social media icons for sharing */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin className="h-8 w-8 mt-2 " />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
                        <FaInstagramSquare className="h-8 w-8 mt-2 " />
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" >
                        <FaWhatsappSquare className="h-8 w-8 mt-2 " />
                    </a>
                </div>
            </div>

            <div className="flex lg:flex-row justify-center">
                <Link to="/dashboard" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">
                    Go DashBoard</Link>
                <Link to="/quizes" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">
                    Attempt More</Link>
            </div>
        </div>
    );
}
export default Result;