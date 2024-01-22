import React from "react";
import Templat from "../components/Templat";
import Footer from "../components/Footer";
import loginforming from "../Assets/loginforming.jpg"
import ContactUs from "../components/ContactUs";

const Login = ({ setIsLoggedIn }) => {

    return (
        <div className="bg-white">
            <div> <Templat
                title="Welcome Back"
                desc1="Build skills for today,tomorrow,and beyond."
                desc2="Education to fature-proof your career."
                image={loginforming}
                formtype="Login"
                setIsLoggedIn={setIsLoggedIn}
            /></div>
            <ContactUs />
            <Footer />
        </div>
    );
}
export default Login;