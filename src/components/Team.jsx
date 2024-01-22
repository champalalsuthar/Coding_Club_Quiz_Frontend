import React from "react";
import CL from '../Assets/team/CL.jpg'
import PS from '../Assets/team/PS.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Team = () => {

    return (
        <div class=" xl:w-1/3  bg-whute pb-5  text-center mx-auto text-black m-[20px] font-serif">
            <h1 class="text-3xl inline-block font-bold my-[12px] py-1 px-4  rounded-lg  bg-gray-200">OUR TEAM</h1>
            <div class="flex justify-around gap-[30px]  px-[20px] ">
                {/* <!-- Team Member 1 --> */}
                <div class="w-1/2 p-4 border rounded-lg  bg-gray-200 hover:shadow-[0px_0px_20px_2px_#718096]">
                    <img class="w-36 h-40 object-cover mx-auto mb-4 rounded-[20px]" src={CL} alt="Team Member 1" />
                    <p className="text-sm text-black font-bold">Champa Lal Suthar</p>
                    <div className="flex items-center justify-center gap-[10px] ">
                        <a
                            href="https://www.linkedin.com/in/champa-lal-suthar-325040253/"
                            className="no-underline block"
                            target="_blank"
                        >
                            <FaLinkedin  className="h-8 w-8 mt-2 "/>
                        </a>
                        <a
                            href="https://github.com/champalalsuthar"
                            className="no-underline block"
                            target="_blank"
                        >
                            < FaGithub className="h-8 w-8 mt-2 "/>
                        </a>

                    </div>
                </div>

                {/* <!-- Team Member 2 --> */}
                <div class="w-1/2 p-4 border rounded-lg  bg-gray-200 hover:shadow-[0px_0px_20px_2px_#718096]">
                    <img class="w-36 h-40 object-cover mx-auto mb-4 rounded-[20px]" src={PS} alt="Team Member 2" />
                    <p className="text-sm text-black font-bold">Puspendra Singh</p>
                    <div className="flex items-center justify-center gap-[10px]">
                        <a
                            href="https://www.linkedin.com/in/pushpendrasingh001/"
                            className="no-underline  block "
                            target="_blank"
                        >
                            <FaLinkedin  className="h-8 w-8 mt-2 "/>
                        </a>
                        <a
                            href="https://github.com/pushpendrasingh001"
                            className="no-underline  block "
                            target="_blank"
                        >
                            < FaGithub  className="h-8 w-8 mt-2 "/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Team;