import React from "react";
import { Link } from "react-router-dom";
import enterprise from "../Assets/enterprise.webp"


const HomePageQuiz = () => {

    return (
        <>
            <div className="lg:flex  justify-around lg:h-[450px] items-center  bg-white text-black ">
                <div className="lg:w-1/2 p-10">
                    <img src={enterprise} alt="Quiz Image" className=" h-full  rounded" />
                </div>
                <div className="lg:w-1/2 p-10 text-center">
                    <h1 className="text-5xl font-bold m-4">All Quizes</h1>
                    <p className="text-lg m-4">
                        "Embark on a mental journey with our quiz challenge!  Test your knowledge across an eclectic mix of subjects and unravel the mysteries of various topics. Sharpen your mind and enjoy the thrill of expanding your understanding through our interactive quiz!"</p>
                    <Link to="/allquizes" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>
                </div>
            </div>
        </>
    );
}
export default HomePageQuiz;