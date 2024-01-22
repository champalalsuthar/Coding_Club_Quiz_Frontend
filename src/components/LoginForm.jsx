import React, { useState } from "react";
import axios from "axios"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from "react";
const UserContext = createContext();

const LoginForm = ({ setIsLoggedIn }) => {

    const Navigate = useNavigate();
    const [FormData, setFormData] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(true);

    // const [data, setData] = useState([]);
    const [Username, setUsername] = useState("vinay")
    // console.log(data);

    // const getData = () => {
    //     fetch('data.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson)

    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

    const prev = 0;
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }
    function submithandler(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/signin", FormData).then((response) => {
            console.log(response.data.Username);


            console.log(response)
            if (response.data.code == 200) {
                setIsLoggedIn(true);
                setUsername(response.data.Username);

                toast.success("logged in");
                Navigate("/dashboard");
            }
            else if (response.data.code == 300) {
                alert("password does not match")

            }
            else {
                alert("User not register ")
                Navigate("/signup")
            }

        }).catch((err) => {
            console.log(err)
        })
    }
    console.log(Username);

    return (
        <div>
            <UserContext.Provider value={Username}>

            </UserContext.Provider>
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
}
export { UserContext };
export default LoginForm;
