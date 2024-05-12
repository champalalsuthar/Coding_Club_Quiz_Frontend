import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../Assets/CCCUHlogoH.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserData } from '../Redux/dashboardSlice';
import axios from "axios"
import './Navv.css';

import { FaBars, FaTimes } from 'react-icons/fa';


const Nav1 = (props) => {

    const Navigate = useNavigate();
    let showmainnav = props.showmainnav;
    let setShowMainNav = props.setShowMainNav;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);

    // useEffect(() => {
    //     const storedToken = window.localStorage.getItem('token');
    //     if (storedToken) {
    //         validateTokenOnServer(storedToken)
    //             .then((response) => {
    //                 if (response.code === 200) {
    //                     console.log(response);
    //                     console.log(response.data);
    //                     console.log(response.data._id);
    //                     dispatch(setUserData(response.data));
    //                     setIsLoggedIn(true);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error validating token:", error);
    //             });
    //     }
    // }, [setIsLoggedIn]);

    // const handleLogout = () => {
    //     setIsLoggedIn(false);
    //     window.localStorage.removeItem('token');
    //     toast.success("Logged Out");
    //     Navigate("/");
    // };
    // const validateTokenOnServer = async (token) => {
    //     try {
    //         const response = await fetch("http://localhost:5000/validateToken", {
    //             // const response = await fetch("https://coding-club-quiz-backend.vercel.app/validateToken", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ token }),
    //         });

    //         const data = await response.json();
    //         console.log("Server Response:", data);
    //         return data;
    //     } catch (error) {
    //         console.error("Error validating token:", error);
    //         throw error;
    //     }
    // };

    return (
        <div className="nav">
            <div className="navbar-container">
                <div className="nav-logo ml-0 " to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        <img className="" src={logo} alt="ima" height={20} width={60} loading="lazy" />
                        <span className="span "><p className="text-4xl md:text-3xl  text-green-500  font-bold">CUH Coding Club</p></span>
                    </a>
                </div>
                <div className="mobile-icon">
                    {isOpen ? (
                        <FaTimes onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        <FaBars onClick={() => setIsOpen(!isOpen)} />
                    )}
                </div>
                <div className="nav-items">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href='/allquizes'>Gallery</a>
                    <a className="nav-link" href='/about'>About</a>
                    <a className="nav-link" href='/createquiz'>Contact-us</a>
                </div>
                <div className="button-container">
                    <>
                        <Link to="/lab_home">
                            <button onClick={() => setShowMainNav(false)} className="bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 border border-richblack-700">
                                Student's Lab
                            </button>
                        </Link>
                    </>
                </div>

                {isOpen && (

                    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                        <a className="mobile-link" href="/" onClick={() => { setIsOpen(!isOpen) }}>Home</a>
                        <a className="mobile-link" href='/allquizes' onClick={() => { setIsOpen(!isOpen) }}>Gallary</a>
                        <a className="mobile-link" href='/about' onClick={() => { setIsOpen(!isOpen) }}>About</a>
                        <a className="mobile-link" href='/createquiz' onClick={() => { setIsOpen(!isOpen) }}>Contact-Us</a>
                        <>
                            <Link to="/login">
                                <button className="mobile-menu-button bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700" onClick={() => setIsOpen(!isOpen)}>
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="mobile-menu-button bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700" onClick={() => setIsOpen(!isOpen)}>
                                    Signup
                                </button>
                            </Link>
                        </>

                    </div>
                )
                }
            </div>
        </div>


    );
}
export default Nav1;