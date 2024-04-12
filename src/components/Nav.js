import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import logo from '../Assets/CCCUHlogoH.png'
function Nav(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const Navigate = useNavigate();
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        {/* <i className="fas fa-code"></i> */}
                        <span className="icon">
                            <img src={logo} height={30} width={80} loading="lazy" />
                            {/* <FaHome /> */}
                        </span>
                    </NavLink>


                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/quizes"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Quizes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"> <button
                                className="nav-item " activeClassName="active" onClick={handleClick} >
                                Login</button></Link>
                        </li>
                        {/* <li> */}
                        {/* <div className={click ? "nav-menu active" : "nav-menu"}"flex  gap-x-2 items-center  "> */}
                        {/* <div className={click ? "nav-menu active" : "nav-menu"}>
                                {!isLoggedIn && <Link to="/login"> <button
                                    className="nav-item bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px] m-2 border border-richblack-700">
                                    Login</button></Link>}
                                {!isLoggedIn && <Link to="/signup"> <button
                                    className="nav-item bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px]  m-2 border border-richblack-700" >
                                    Signup</button></Link>}
                                {isLoggedIn && <Link to="/Dashboard"> <button
                                    className="nav-item bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px]  m-2 border border-richblack-700">
                                    Dashboard</button></Link>} */}
                        {/* {isLoggedIn && <Link to="/"> <button
                                    className="nav-item bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px]  m-2 border border-richblack-700"
                                // onClick={() => (setIsLoggedIn(false),
                                //     toast.success("Logged Out"))}
                                // onClick={handleLogout}
                                > LogOut</button></Link>} */}
                        {/* </div> */}
                        {/* </li> */}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                                <ImCross />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <GiHamburgerMenu />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;