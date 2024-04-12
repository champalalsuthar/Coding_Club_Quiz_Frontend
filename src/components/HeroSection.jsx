
import React from "react";
import heroimg  from "../Assets/heroimg.webp"

const HeroSection = () => {

    return (
        <>
            <div className="lg:flex flex-row-reverse justify-around text-center items-center bg-gray-200 text-black">
            <div className="lg:w-1/2  p-10">
                    <img src={heroimg}  className=" h-full  rounded" />
                </div>
                <div className="lg:w-1/2  p-10">
                    <h1 className="text-5xl font-bold m-4">Take a Quizes & Get The Placement</h1>
                    <p className="text-lg m-4">Test your knowledge with our interactive quiz. Challenge yourself and explore a wide range of interesting questions to expand your understanding of various topics.</p>   
                </div>
                
            </div>
        </>
    );
}
export default HeroSection;