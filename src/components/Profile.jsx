// import React, { useEffect, useContext, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizDataFrombackend } from "../../Redux/action.js";
import { Link } from "react-router-dom";
import profilepic from "../Assets/profilepic.png"
// import { UserContext } from "./LoginForm";

import { useSelector, useDispatch } from 'react-redux';

import { selectUserData, setUserData } from '../Redux/dashboardSlice';

const Profile = () => {
  // const [name,setName]= useState("");
  // const user1 = user.user;
  const userData = useSelector(selectUserData);

  if (!userData) {
    // Render a loading state or return null
    return null;
  }


  return (

    <div className="lg:h-[450px]  mx-auto text-center bg-gray-200  ">
      <div className="lg:flex h-full mx-auto p-5 text-center">
        <img src={profilepic} alt="prfile" className=" mx-auto rounded-full" />
        <div className="">
          <h1 className=" w-full h-full flex flex-col justify-center items-center text-center">
            <strong className="text-teal-500 mx-4 text-2xl font-extrabold italic">
              Sweat more in practice, bleed less in war.
            </strong>
            <br />
            <p className=" font-bold">– Spartan Warrior Credo</p>
            <br></br>
            <h1 className=" m-4 text-2xl text-sky-600 ">
              <span className="font-bold text-black">Welcome! 👋</span> <p>{userData.firstname} {userData.Lastname}</p>
            </h1>
          </h1>

        </div>
      </div>
      <div className=" absolute right-22 top-44">
        <Link to="/allquizes" className="bg-indigo-900   text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 m-4 ">Attempt Quiz</Link>
      </div>
    </div>
  );
};

export default Profile;
