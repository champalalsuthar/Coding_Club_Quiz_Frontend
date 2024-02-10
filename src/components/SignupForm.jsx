import React from "react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
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

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }
    function submitHandlar(event) {

        event.preventDefault();
        if (FormData.password != FormData.confirmFassword) {
            alert("password do not match");
            return;
        }
        const accountData = { ...FormData };

        const finalData = {
            ...accountData, accountType
        }

        axios.post("https://coding-club-quiz-backend.vercel.app/signup", FormData).then((response) => {

            if (response.data.code == 200) {
                toast.success("Account created")
                alert(response.data.message)
                Navigate("/login");
            }
            else {
                alert(response.data.message)
            }



        }).catch((err) => {
            console.log(err)
        })


        console.log("printing final account data");
        console.log(finalData);
        console.log(FormData)

    }

    return (
        <div className="mt-6">
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

                <button className="text-richblack-900 w-full bg-yellow-300 rounded-[8px] 
                font-medium py-[8px] px-[12px] mt-6" >Create Account</button>
            </form>
        </div>
    );
}
export default SignupForm;
