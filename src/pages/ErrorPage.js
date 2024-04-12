import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="">
            <div className="p-9 text-center" >
                <div>
                    <h2 className="text-6xl">404 ERROR..!!</h2>
                    <h3 className="text-4xl m-4">UH OH! You're lost.</h3>
                    <p className=" m-2">
                        The page you are looking for does not exist. How you got here is a
                        mystery.
                    </p>
                    <p className=" m-2">
                        But you can click the button below to go back to the
                        homepage.
                    </p>
                    {/* <NavLink to="/">
                        <button> Go Back to Home</button>
                    </NavLink> */}
                    <div className="m-12">
                        <a href="/" class="relative px-5 py-3 overflow-hidden font-medium text-black bg-blue-400 border border-gray-100 rounded-lg shadow-inner group">
                            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-bold ">{"<-- "}Go Back to Home </span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ErrorPage;