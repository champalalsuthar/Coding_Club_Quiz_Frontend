import React from "react";
import framimage from "../Assets/framimage.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode'
import * as jwt_decode from 'jwt-decode';

const Templat = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-black w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-8">
            <div className="w-full md:w-1/2 max-w-[450px] text-center md:text-left">
                <h1 className="text-black font-bold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-black">{desc1}</span>
                    <br />
                    <span className="text-black">{desc2}</span>
                </p>
                {formtype === 'Signup' ? (
                    <SignupForm setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <LoginForm setIsLoggedIn={setIsLoggedIn} />
                )}

                {/* <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-black"></div>
                    <p className="text-black font-small leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-black"></div>
                </div>

                <button className="w-full flex justify-center items-center text-center rounded-[8px] font-medium text-black 0  gap-x-2 mt-6">

                    <p className="w-1/2">
                        <GoogleOAuthProvider clientId="79117519800-vlh242s641vmnqtgjqj5lce3u8u7s2ku.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const details = jwt_decode(credentialResponse.credential)
                                    console.log(details);
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </p>
                </button> */}
            </div>

            <div className="relative w-full md:w-1/2 max-w-[450px] mt-8 md:mt-0">
                <img
                    src={framimage}
                    alt="frame"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full "
                />

                <div className="md:block ">
                    <img
                        src={image}
                        alt="frame"
                        width={500}
                        height={500}
                        loading="lazy"
                        className="absolute -top-4 right-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Templat;
