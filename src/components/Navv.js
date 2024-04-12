import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../Assets/CCCUHlogoH.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserData } from '../Redux/dashboardSlice';
import axios from "axios"
import './Navv.css';

import { FaBars, FaTimes } from 'react-icons/fa';


const Navv = (props) => {

    const Navigate = useNavigate();
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        const storedToken = window.localStorage.getItem('token');
        if (storedToken) {
            validateTokenOnServer(storedToken)
                .then((response) => {
                    if (response.code === 200) {
                        console.log(response);
                        console.log(response.data);
                        console.log(response.data._id);
                        dispatch(setUserData(response.data));
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
        try {
            // const response = await fetch("http://localhost:5000/validateToken", {
            const response = await fetch("https://coding-club-quiz-backend.vercel.app/validateToken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });

            const data = await response.json();
            console.log("Server Response:", data);
            return data;
        } catch (error) {
            console.error("Error validating token:", error);
            throw error;
        }
    };

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
                    <a className="nav-link" href='/allquizes'>Quizzes</a>
                    <a className="nav-link" href='/createquiz'>CreateQuiz</a>
                    <a className="nav-link" href='/about'>About</a>
                </div>
                <div className="button-container">
                    {!isLoggedIn && (
                        <>
                            <Link to="/login">
                                <button className="bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 border border-richblack-700">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700">
                                    Signup
                                </button>
                            </Link>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <Link to="/dashboard">
                                <button className="bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700">
                                    Dashboard
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700"
                                    onClick={handleLogout}
                                >
                                    LogOut
                                </button>
                            </Link>
                        </>
                    )}
                </div>

                {isOpen && (

                    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                        <a className="mobile-link" href="/" onClick={() => { setIsOpen(!isOpen) }}>Home</a>
                        <a className="mobile-link" href='/allquizes' onClick={() => { setIsOpen(!isOpen) }}>Quizzes</a>
                        <a className="mobile-link" href='/createquiz' onClick={() => { setIsOpen(!isOpen) }}>CreateQuiz</a>
                        <a className="mobile-link" href='/about' onClick={() => { setIsOpen(!isOpen) }}>About</a>
                        {!isLoggedIn && (
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
                        )}
                        {isLoggedIn && (
                            <>
                                <Link to="/dashboard">
                                    <button className="mobile-menu-button bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700" onClick={() => setIsOpen(!isOpen)}>
                                        Dashboard
                                    </button>
                                </Link>
                                <Link to="/">
                                    <button className="mobile-menu-button bg-green-500 text-white py-[8px] px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700" onClick={() => { handleLogout(); setIsOpen(!isOpen); }}>
                                        LogOut
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                )
                }
            </div>
        </div>


        // <div className="Nav">
        //     <div className="NavbarContainer">
        //         {/* <ToggleButton onClick={themeChange}>
        //             {darkMode ? <MdLightMode /> :
        //                 <FontAwesomeIcon icon={faMoon} />}
        //         </ToggleButton> */}
        //         <div className="NavLogo" to='/'>
        //             <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
        //                 {/* <DiCssdeck size="3rem" /> */}
        //                 <Span>Champa Lal Suthar</Span>
        //             </a>
        //         </div>
        //         <div className="MobileIcon">
        //             {isOpen ? (
        //                 <FaTimes onClick={() => setIsOpen(!isOpen)} />
        //             ) : (
        //                 <FaBars onClick={() => setIsOpen(!isOpen)} />
        //             )}
        //         </div>
        //         <div className="NavItems">
        //             <NavLink href="#about">About</NavLink>
        //             <NavLink href='#skills'>Skills</NavLink>
        //             {/* <NavLink href='#experience'>Experience</NavLink> */}
        //             <NavLink href='#projects'>Projects</NavLink>
        //             <NavLink href='#education'>Education</NavLink>
        //         </div>
        //         <div className="ButtonContaine" r>
        //             <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
        //             <LinkedinButton href={Bio.linkedin} target="_blank">Linkedin</LinkedinButton>
        //         </div>
        //         {
        //             isOpen &&
        //             <div className="MobileMenu" isOpen={isOpen}>
        //                 <div className="MobileLink" href="#about" onClick={() => {
        //                     setIsOpen(!isOpen)
        //                 }}>About</div>
        //                 <div className="MobileLink" href='#skills' onClick={() => {
        //                     setIsOpen(!isOpen)
        //                 }}>Skills</div>
        //                 <div className="MobileLink href='#projects' onClick={() => {
        //                     setIsOpen(!isOpen)
        //                 }}>Projects</div>
        //                 <div className="MobileLink href='#education' onClick={() => {
        //                         setIsOpen(!isOpen)
        //                     }}>Education</div>
        //                 <div className="GitHubButton" style={{ padding: '10px 16px', color: 'white', width: 'max-content' }} target="_blank">Github</div>
        //                 <div className="LinkedinButton" style={{ padding: '10px 16px', color: 'white', width: 'max-content' }} target="_blank">Linkedin</div>
        //             </div>
        //         }
        //     </div>
        // </div>

        // <div className="flex justify-between items-center 
        // w-full py-4 h-28 lg:px-20 mx-auto bg-sky-500 fixed z-10">
        //     <a href="/">
        //         <img src={logo} alt="ima" height={30} width={80} loading="lazy" />
        //     </a>
        //     {/* <link to="/">
        //         <img src={logo} height={30} width={80} loading="lazy" />
        //     </link> */}
        //     <nav>
        //         <ul className="flex font-bold flex-col md:flex-row    lg:pl-20  gap-x-1 md:gap-x-4 lg:gap-x-6 text-white lg:text-2xl md:text-xl">
        //             <li > <NavLink to="/">Home</NavLink> </li>
        //             <li > <NavLink to="/allquizes">Quizzes</NavLink></li>
        //             {/* <li > <NavLink to="/createquiz">CreateQuiz</NavLink></li> */}
        //             <li > <NavLink to="/createquiz">CreateQuiz</NavLink></li>
        //             <li > <NavLink to="/about">About</NavLink></li>
        //         </ul>
        //     </nav>
        //     <div className="flex  gap-x-2 items-center text-xs md:text-sm lg:text-xl     ">
        //         {!isLoggedIn && <Link to="/login"> <button
        //             className="bg-green-500 text-white py-[8px]
        //          px-[12px] rounded-[8px] m-1 lg:m-2 border border-richblack-700">
        //             Login</button></Link>}
        //         {!isLoggedIn && <Link to="/signup"> <button
        //             className="bg-green-500 text-white py-[8px]
        //          px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700" >
        //             Signup</button></Link>}
        //         {isLoggedIn && <Link to="/Dashboard"> <button
        //             className="bg-green-500 text-white py-[8px]
        //          px-[12px] rounded-[8px]  m-1 lg:m-2 md:m-2 border border-richblack-700">
        //             Dashboard</button></Link>}
        //         {isLoggedIn && <Link to="/"> <button
        //             className="bg-green-500 text-white py-[8px]
        //          px-[12px] rounded-[8px] m-1 lg:m-2 md:m-2 border border-richblack-700"
        //             // onClick={() => (setIsLoggedIn(false),
        //             //     toast.success("Logged Out"))}
        //             onClick={handleLogout}
        //         > LogOut</button></Link>}
        //     </div>
        // </div>
    );
}
export default Navv;