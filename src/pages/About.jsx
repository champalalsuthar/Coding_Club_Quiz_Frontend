import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const About = () => {
    const redirectto = () => {
        window.location.href = "https://www.cuh.ac.in/";
      }

    return (
        <div>
            <div className=" flex flex-col  py-7  justify-center items-center w-2/3  mx-auto p-8">
                <div className="text-center mx-auto p-8 ">

                    <div className="mb-2 h-66 py-20 flex flex-col align-center justify-center gap-5">
                        {/* <h3 className="text-5xl font-semibold mb-2">Contact Information:</h3> */}
                        <p>Email: codingclub@cuh.ac.in</p>

                        <p>Phone: +91 9876543210</p>
                        <button onClick={redirectto}>https://www.cuh.ac.in/  </button>
                        <p>Address: Jant-Pali, Mahendergarh
                            Haryana Pin: 123031</p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </div>
    );
}
export default About;