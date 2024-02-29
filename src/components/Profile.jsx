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
    <div className="py-20  mx-auto text-center  min-h-136 bg-gray-200  ">
      <div className="lg:flex mx-auto min-h-96  p-5  text-center">
        <img src={profilepic} alt="prfile" className=" w-1/2  h-w/2  md:p-28  mx-auto rounded-full" />
        <div className="">
          <h1 className="mt-20 ">
            <strong className="text-teal-500  text-2xl px-16 font-extrabold italic">
              Sweat more in practice, bleed less in war.
            </strong>
            <br /> <p className="  mt-2 font-bold">– Spartan Warrior Credo</p>
          </h1>
          <h1 className="mx-auto mt-32 text-2xl text-sky-600 ">
            <span className="font-bold text-black">Welcome! 👋</span> <p>{userData.firstname} {userData.Lastname}</p>
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
