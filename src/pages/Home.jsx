import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"
import ContactUs from "../components/ContactUs";
import HomePageQuiz from "../components/HomePageQuiz";

const Home = (isLoggedIn) => {

    return (
        <>
            <div className="pt-28 flex flex-col justify-center
        text-4xl p bg-white overflow-hidden ">
            </div>
            <HeroSection />
            <HomePageQuiz />
            <ContactUs />
            {/* <Team /> */}
            <Footer />
        </>
    );
}
export default Home;
