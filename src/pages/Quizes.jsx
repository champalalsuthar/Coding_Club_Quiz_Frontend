import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";
import css1 from "../Assets/Quizeslogo/css1.jpg"
import html from "../Assets/Quizeslogo/HTML.jpg"
import js1 from "../Assets/Quizeslogo/js1.png"
import nodejs2 from "../Assets/Quizeslogo/nodejs2.webp"
import react from "../Assets/Quizeslogo/react.jpg"
import mongodb3 from "../Assets/Quizeslogo/mongodb3png.png"






const Quizes = () => {
    const [data, setData] = useState([]);
    // useEffect(()=>
    // {
    //     async function getData() {
    //         const response=await fetch(dataa)
    //         const data= await response.json()
    //         console.log(data);
    //     }
    //     getData();
    //     console.log(data);
    // },[]);
    // const getData = () => {
    //     fetch('data.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             console.log("endpoint1");
    //             console.log(response.json);
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             console.log("endpoint2");
    //             setData(myJson)
    //             console.log(myJson);
    //         });

    // }
    // useEffect(() => {
    //     getData()
    //     console.log("endpoint3");
    // }, [])



    // console.log(data);

    return (
        <div >
            <div className="w-full  flex flex-wrap gap-20 items-center justify-around p-10">
                <div className="text-center xl:w-1/4  sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h1 className="text-lg sm:text-sm font-bold m-1">HTML</h1>
                    <img src={html} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
                    <Link to="/htmlquiz" className="hover:bg-indigo-500   text-white   py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>
                </div>
                <div className="text-center xl:w-1/4 sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h1 className="text-xl font-bold m-1">CSS</h1><img src={css1} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
                    <Link to="/cssquiz" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>
                </div>
                <div className="text-center  xl:w-1/4 sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h1 className="text-xl font-bold m-1">JavaScript</h1><img src={js1} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
                    <Link to="/jsquiz" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>

                </div>
                <div className="text-center  xl:w-1/4 sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h1 className="text-xl font-bold m-1">react</h1><img src={react} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
                    <Link to="/raectquiz" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>
                </div>
                <div className="text-center  xl:w-1/4 sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h1 className="text-xl font-bold m-1">NodeJs</h1><img src={nodejs2} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
                    <Link to="/nodejsquiz" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>
                </div>
                
                <div className="text-center  xl:w-1/4 sm:w-1 bg-white p-8 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h1 className="text-xl font-bold m-1">MongoDb</h1><img src={mongodb3} alt="Kitten" className=" w-full h-full mb-4 rounded-md shadow-md" />
                    <Link to="/mongodbquiz" className="hover:bg-indigo-500   text-white py-2 px-4 rounded bg-green-600 transition duration-300 m-4 ">Attempt Quiz</Link>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </div>

    );
}
export default Quizes;