import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../Assets/CCCUHlogo.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
    const Navigate = useNavigate();
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    useEffect(() => {
        // Check for stored token on page load
        const storedToken = window.localStorage.getItem('token');
        if (storedToken) {
            validateTokenOnServer(storedToken)
                .then((response) => {
                    if (response.code === 200) {
                        setIsLoggedIn(true);
                    }
                })
                .catch((error) => {
                    console.error("Error validating token:", error);
                });
        }
    }, [setIsLoggedIn]);

    const handleLogout = () => {
        setIsLoggedIn(false);
        window.localStorage.removeItem('token');
        toast.success("Logged Out", {
            position: toast.POSITION.TOP_CENTER,
        });
        Navigate("/");
    };
    const validateTokenOnServer = async (token) => {
        // console.log("Validating token on server");

        try {
            const response = await fetch("https://coding-club-quiz-backend.vercel.app/validateToken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });

            const data = await response.json();
            // console.log("Server Response:", data);
            return data;
        } catch (error) {
            console.error("Error validating token:", error);
            throw error;
        }
    };


    return (

        <div className="flex justify-between items-center 
        w-full py-4 h-28      lg:px-20 mx-auto bg-sky-500 fixed z-10">
            <a href="/">
                <img src={logo} height={30} width={80} loading="lazy" />
            </a>
            {/* <link to="/">
                <img src={logo} height={30} width={80} loading="lazy" />
            </link> */}
            <nav>
                <ul className="lg:flex font-bold lg:pl-20 gap-x-6 text-white lg:text-2xl  ">
                    <li >
                        <NavLink to="/">Home</NavLink> </li>
                    <li > <NavLink to="/quizes">Quizes</NavLink></li>
                    {/* <li > <NavLink to="/createquiz">CreateQuiz</NavLink></li> */}
                    <li > <NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
            <div className="flex  gap-x-2 items-center  ">
                {!isLoggedIn && <Link to="/login"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px] m-2 border border-richblack-700">
                    Login</button></Link>}
                {!isLoggedIn && <Link to="/signup"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px]  m-2 border border-richblack-700" >
                    Signup</button></Link>}
                {isLoggedIn && <Link to="/Dashboard"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px]  m-2 border border-richblack-700">
                    Dashboard</button></Link>}
                {isLoggedIn && <Link to="/"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px]  m-2 border border-richblack-700"
                    // onClick={() => (setIsLoggedIn(false),
                    //     toast.success("Logged Out"))}
                    onClick={handleLogout}
                > LogOut</button></Link>}
            </div>
        </div>
    );
}
export default NavBar;