import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full  bg-slate-400  tracking-widest">
      <footer className="flex flex-col md:flex-row  gap-2  justify-evenly w-full  mb-2 p-10 ">
        <div className=" flex flex-row justify-around items-center  w-full md:w-1/2">
          <div className="w-full space-y-4">
            <h3
              className="text-xl uppercase p-1 border-b-2 text-cyan-700 font-bold border-white w-fit my-2"
            >
              Quiz-App

            </h3>
            <p className="text-white text-xs pr-4 xl:text-sm">
              <p>WHERE PASSION </p>
              <p>MEETS PERFECTION !</p>
            </p>
          </div>
          <div className="w-full space-y-4">
            <h3
              className=" text-xl uppercase text-cyan-700 font-bold p-1 border-b-2 border-white w-fit my-2"
            >
              quiz
            </h3>
            <Link
              to="/quizes"
              className="no-underline text-white text-xs block xl:text-sm"
            >
              All Quiz
            </Link>
          </div>
        </div>

        {/* F */}
        <div className="flex flex-row w-full md:w-1/2">
          <div className="w-full mt-4 space-y-4">
            <h3
              className="text-xl uppercase text-cyan-700 font-bold p-1 border-b-2 border-white w-fit my-2"

            >
              Contact
            </h3>
            <p className="flex items-center my-1">
              <i
                className="fa fa-home text-white text-sm"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
                Central University Of Haryana
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-envelope text-white text-xs"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
              codingclub@cuh.ac.in
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-phone text-white"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
                +91 9876543210
              </span>
            </p>
          </div>
          <div className="w-full h-full mt-4 space-y-4">
            <iframe
              title="Google Map"
              className="h-full w-full"
              src="https://maps.google.com/maps?q=centra  l university of haryana &t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>

          </div>

        </div>
      </footer>
      <p className="text-sm text-white  text-center mt-4 pb-4">&copy; 2023 Coding Club. All rights reserved.</p>
    </div>
  );
};

export default Footer;
