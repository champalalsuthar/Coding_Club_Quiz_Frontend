import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const About = () => {
    const redirectto = () => {
        window.open("https://www.cuh.ac.in/", "_blank");
    }

    return (
        <div className="">
            <div className=" flex flex-col  lg:py-7  justify-center items-center w-2/3  mx-auto ">
                <div className="text-center mx-auto lg:p-8 ">

                    <div className="mb-2 h-66 py-20 flex flex-col align-center justify-center gap-5">
                        {/* <h3 className="text-5xl font-semibold mb-2">Contact Information:</h3> */}
                        <p><span className=" font-bold">Email: </span>codingclub@cuh.ac.in</p>

                        <p><span className=" font-bold">Phone: </span>+91 1234567890</p>
                        <button onClick={redirectto}><span className=" font-bold">Website: </span>https://www.cuh.ac.in/  </button>
                        <p><span className=" font-bold">Address: </span>Jant-Pali, Mahendergarh (HARYANA) </p>
                        <p><span className=" font-bold">Pin-code: </span>123031</p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </div>
    );
}
export default About;