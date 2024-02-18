import React from "react";


const ContactUs = () => {

    return (
        <div class="mx-auto  bg-gray-200  rounded-lg lg:py-10">
            <div class=" p-4 m-2 lg:flex">
                <div class="text-center lg:p-10 lg:w-1/2">
                    <h1 className="text-5xl font-bold m-4">Welcome to our website!</h1>
                    <p className="text-lg m-4">If you have any questions, feedback, or concerns, feel free to reach out to us. We value your input and are here to assist you. Please use the following contact information or the contact form below.</p>
                </div>
                <div class="lg:w-1/2 ">
                    <form action="https://formspree.io/f/xoqgvbyq" method="post" className=" ">
                        <div className="mb-4 ">
                            <label for="name" className="block text-gray-700 px-1 text-sm font-bold mb-2">Name: <sup className="text-red-400">*</sup></label>
                            <input type="text" id="name" name="name" className="border outline-none rounded w-full py-2 px-3 focus:outline-none " />
                        </div>

                        <div className="mb-4">
                            <label for="email" className="block text-gray-700 px-1  text-sm font-bold mb-2">Email: <sup className="text-red-400">*</sup></label>
                            <input type="email" id="email" name="email" className="border rounded w-full py-2 px-3 focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label for="message" className="block text-gray-700 px-1  text-sm font-bold mb-2">Message: <sup className="text-red-400">*</sup></label>
                            <textarea id="message" name="message" rows="4" className="border rounded w-full py-2 px-3 focus:outline-none "></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="hover:bg-indigo-500  text-white py-2 px-4 rounded bg-green-600 transition duration-300">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;
