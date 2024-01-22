import React, { useEffect, useContext, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizDataFrombackend } from "../../Redux/action.js";
import { Link } from "react-router-dom";
import profilepic from "../Assets/profilepic.png"
import { UserContext } from "./LoginForm";

const Profile = () => {
  const Username = useContext(UserContext);
  // const data = useSelector((state) => state.mernQuize.QuizData);
  //   const [count, setCount] = useState(0);
  //   const userName = useSelector((state) => state.mernQuize.userName);
  // const [name,setName]= useState("");
  console.log(Username);

  return (
    <div className=" bg-gray-200 py-20  mx-auto margin-auto  h-136 w-full  ">
      <div className="flex  w-4/5   mx-auto h-96  p-5  text-center">
        <img src={profilepic} alt="prfile" className="mx-auto rounded-full" />
        <div>
          <h1 className="mt-10">
            <strong className="text-teal-500 text-2xl pl-16 font-extrabold italic">
              Sweat more in practice, bleed less in war.
            </strong>
            <br /> <p className="ml-50% mt-2 font-bold">– Spartan Warrior Credo</p>
          </h1>
          <h1 className="mx-auto w-1/2 mt-32 text-2xl text-sky-600 ">
            Welcome!👋
          </h1>
        </div>
      </div>
      <div className=" absolute right-22 top-44">

        <Link to="/quizes" className="bg-indigo-900   text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 m-4 ">Attempt Quiz</Link>

      </div>
    </div>
  );
};

export default Profile;
