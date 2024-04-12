import React from "react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupForm = ({ setIsLoggedIn }) => {
    const Navigate = useNavigate();
    const [FormData, setFormData] = useState({
        firstname: "", Lastname: "",
        email: "", password: "", confirmFassword: ""
    })
    const [showPassword, setShowPassword] = useState(true);
    const [showconfirmFassword, setShowconfirmFassword] = useState(true);
    const [accountType, setAccountType] = useState("student");
    const [show, setShow] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }

    function handelOTP() {

    }
    function handelSignup() {

    }

    function submitHandlar(event) {

        event.preventDefault();

        if (FormData.password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
            return;
        }
        if (FormData.confirmFassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
            return;
        }
        if (FormData.password != FormData.confirmFassword) {
            toast.error("password and confirm password not same", {
                position: "top-center"
            });
            // alert("password and confirm password not same");
            return;
        }

        const accountData = { ...FormData };

        const finalData = {
            ...accountData, accountType
        }

        // axios.post("http://localhost:5000/signup", FormData).then((response) => {
        axios.post("https://coding-club-quiz-backend.vercel.app/signup", FormData).then((response) => {

            if (response.data.code == 200) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                // alert(response.data.message)
                Navigate("/login");
            }
            else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                // alert(response.data.message)
                Navigate("/login");
            }



        }).catch((err) => {
            console.log(err)
        })
        // console.log("printing final account data");
        // console.log(finalData);
        // console.log(FormData)
    }

    return (
        <div className="mt-6 ">
            {/* <div className="flex bg-slate-500 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button className={`${accountType === "student" ? "bg-slate-900  text-white" :
                    "bg-transparent-white"} py-2 px-5 rounded-full transition-all  duration-2001`}
                    onClick={() => setAccountType("student")} >Student</button>
                <button className={`${accountType === "instruvtor" ? "text-white bg-slate-900 " :
                    "bg-transparent text-richblack-200"}   py-2 px-5 rounded-full transition-all duration-2001`}
                    onClick={() => setAccountType("instruvtor")}>Instruvtor</button>
            </div> */}

            <form onSubmit={submitHandlar} autoComplete="on">

                {/* firstname and lastanme */}
                <div className="lg:flex justify-between mt-[10px]">
                    <label > <p className="text-[0.875rem] text-black mb-1 leading-[1.375]">
                        First Name: <sup className="text-red-400">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            value={FormData.firstname}
                            placeholder="Enter firstname :"
                            onChange={changeHandler} className="bg-slate-500 rounded-[0.5rem] 
                            text-richblack-5 w-full p-[12px]">
                        </input>
                    </label>

                    <label > <p className="text-[0.875rem]  text-black mb-1 leading-[1.375]">Last Name:
                        <sup className="text-red-400">*</sup></p>
                        <input
                            type="text"
                            name="Lastname"
                            value={FormData.Lastname}
                            required
                            placeholder="Enter Lastname :"
                            onChange={changeHandler} className="bg-slate-500 rounded-[0.5rem] 
                            text-black-5 w-full p-[12px]" >
                        </input>
                    </label>
                </div>
                <div className="mt-[12px]">
                </div>

                {/* email */}
                <label className="w-full mt-[10px]">
                    <p className="text-[0.875rem]  text-black mb-1 leading-[1.375]">Email address:
                        <sup className="text-red-400">*</sup></p>
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                        required
                        placeholder="Enter Email id:"
                        onChange={changeHandler} className="bg-slate-500 rounded-[0.5rem] 
                        text-richblack-5 w-full p-[12px]">
                    </input>
                </label>
                {/* <label>Profile Picture</label>
                <input 
                    // onChange={(e) => postDetails(e.target.files[0])}
                    value={FormData.pic}
                    id="custom-file"
                    type="file"
                    label="Upload Profile Picture"
                    custom className="bg-slate-500 rounded-[0.5rem] 
                    text-richblack-5 w-full p-[12px]"
                ></input> */}

                {/* password and confirm password */}
                <div className="lg:flex  justify-between  mt-[10px]" >
                    <label className="relative" > <p className="text-[0.875rem]  text-black mb-1 leading-[1.375]">
                        Create Password: <sup className="text-red-400">*</sup></p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            value={FormData.password}
                            required
                            placeholder="password:"
                            onChange={changeHandler}
                            name="password" className="bg-slate-500 rounded-[0.5rem] 
                            text-richblack-5 w-full p-[12px]">
                        </input>
                        <span className="absolute right-3 top-[38px] cursor-pointor" onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                                : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                    <label className="relative" > <p className="text-[0.875rem]  text-black mb-1 leading-[1.375]">
                        Confirm Password: <sup className="text-red-400">*</sup></p>
                        <input
                            type={showconfirmFassword ? ("text") : ("password")}
                            value={FormData.confirmFassword}
                            required
                            placeholder="Confirm password:"
                            onChange={changeHandler}
                            name="confirmFassword" className="bg-slate-500 rounded-[0.5rem] 
                            text-richblack-5 w-full p-[12px]">
                        </input>
                        <span className="absolute right-3 top-[38px]  cursor-pointor"
                            onClick={() => setShowconfirmFassword((prev) => !prev)}>
                            {showconfirmFassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                                : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                </div>
                {/* <button className="text-white w-1/3  bg-emerald-900 mx-auto 
                     hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-3  mb-1 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  overflow-hidden" type='sumbit' onClick={handelOTP}>Send OTP</button> */}

                {/* {show && <input onChange={changeHandler} className='h-10 w-1/3 mx-auto mt-3 outline-none pl-4 rounded-md  mb-2 bg-gray-200' name='OTP' type='otp' placeholder='Enter OTP' value={FormData.OTP} />}

                {show && <button className="text-white w-1/3  mx-auto  bg-green-500 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-1 py-3  mb-1 mt-3   focus:outline-none dark:focus:ring-blue-800  overflow-hidden" type='sumbit' onClick={handelSignup}>SIGN UP</button>
                } */}

                {/* <button className="text-richblack-900 w-full bg-yellow-300 rounded-[8px] 
                font-medium py-[8px] px-[12px] mt-6" >Create Account</button> */}
                <button className="text-richblack-900 w-full bg-yellow-300 rounded-[8px] 
                font-medium py-[8px] px-[12px] mt-6" >Create Account</button>
            </form>
            <Link to='/Login' className='mt-3 overflow-hidden'> Already Register<span className='m-3 text-violet-800' >Sign in</span> </Link>
        </div>
    );
}
export default SignupForm;



