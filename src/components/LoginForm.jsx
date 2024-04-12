
import React, { useState, useEffect } from "react";
import axios from "axios"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUserData } from '../Redux/dashboardSlice';
import userEvent from "@testing-library/user-event";

const LoginForm = ({ setIsLoggedIn }) => {
    const Navigate = useNavigate();
    const [FormData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(true);
    const [userData2, setUserData2] = useState("");

    const dispatch = useDispatch();
    const prev = 0;

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function submithandler(event) {
        event.preventDefault();

        if (FormData.password.length < 6) {
            toast.error("password must be 6 characters!", {
                position: "top-center"
            });
            return;
        }

        // axios.post("http://localhost:5000/signin", FormData)
        axios.post("https://coding-club-quiz-backend.vercel.app/signin", FormData)
            .then((response) => {
                if (response.data.code === 200) {
                    const user2 = response.data.data;
                    setUserData2(user2);
                    // Dispatch the setUserData action here
                    console.log(user2);
                    console.log(user2.result);
                    console.log(user2.firstname);
                    console.log(user2.result.firstname);
                    console.log(user2);
                    dispatch(setUserData(user2.result));
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                    window.localStorage.setItem("token", response.data.token);
                    setIsLoggedIn(true);
                    Navigate('/dashboard');
                } else if (response.data.code === 300) {
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                } else {
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_CENTER,
                    });
                    Navigate("/signup");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        setIsLoggedIn(false);
    }, [setIsLoggedIn]);

    return (
        <div>
            <div>
                <form autoComplete="on" className="flex flex-col gap-y-4 w-full mt-6" onSubmit={submithandler}>
                    <label className="w-full " >
                        <p className="text-[0.875rem]  text-black mb-1 leading-[1.375]">Email address: <sup className="text-red-400">*</sup></p>
                        <input className="bg-slate-500 rounded-[0.5rem]
                         text-richblack-5 w-full p-[12px]"
                            type="email"
                            name="email"
                            value={FormData.email}
                            required
                            placeholder="Enter Email id:"
                            onChange={changeHandler} >
                        </input>
                    </label>
                    <label className="w-full relative" >
                        <p className="text-[0.875rem]  text-black mb-1 leading-[1.375]">
                            password: <sup className="text-red-400">*</sup></p>
                        <input className="bg-slate-500 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                            type={showPassword ? ("text") : ("password")}
                            value={FormData.password}
                            required
                            placeholder="Enter password:"
                            onChange={changeHandler}
                            name="password">
                        </input>


                        <span className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword((prev) === !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                                (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>


                        {/* <link to="/"> */}
                        <p className="text-xs mt-1 text-blue-100 cursor-pointer max-w-max ml-auto" >Forgot password</p>
                        {/* </link> */}
                    </label>

                    <button className="text-black-900  bg-yellow-300 rounded-[8px]
                     font-medium py-[8px] px-[12px] mt-6" >Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

