import React from "react";
import Templat from "../components/Templat";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import signupformimg3 from "../Assets/signupformimg3.jpg"


const Signup = ({ setIsLoggedIn }) => {

    return (
        <div className="bg-white">
            <div>
                <Templat
                    title="Join with Coding Club"
                    desc1="Build skills for today,tomorrow,and beyond."
                    desc2="Education to fature-proof your career."
                    image={signupformimg3}
                    formtype="Signup"
                    setIsLoggedIn={setIsLoggedIn}
                />
                <ContactUs />
                <Footer />
            </div>
        </div>
    );
}
export default Signup;
