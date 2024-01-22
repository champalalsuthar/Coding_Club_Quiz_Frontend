import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../Assets/CCCUHlogo.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (

        <div className="flex justify-between items-center 
        w-full   py-4  px-20 mx-auto bg-sky-500">
            

            {/* <link to="/"> */}
            <img src={logo} height={30} width={80} loading="lazy" />
            {/* </link>  */}
            <nav>
                <ul className="flex font-bold pl-20 gap-x-6 text-white text-2xl">
                    <li >
                        <NavLink to="/">Home</NavLink> </li>
                    <li > <NavLink to="/quizes">Quizes</NavLink></li>
                    {/* <li > <NavLink to="/createquiz">CreateQuiz</NavLink></li> */}
                    <li > <NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
            <div className="flex ml-5 mr-5 gap-x-4 items-center ">
                {!isLoggedIn && <Link to="/login"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px] border border-richblack-700">
                    Login</button></Link>}
                {!isLoggedIn && <Link to="/signup"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px] border border-richblack-700" >
                    Signup</button></Link>}
                {isLoggedIn && <Link to="/Dashboard"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px] border border-richblack-700">
                    Dashboard</button></Link>}
                {isLoggedIn && <Link to="/"> <button
                    className="bg-green-500 text-white py-[8px]
                 px-[12px] rounded-[8px] border border-richblack-700"
                    onClick={() => (setIsLoggedIn(false),
                        toast.success("Logged Out"))}> LogOut</button></Link>}
            </div>
        </div>
    );
}
export default Navbar;