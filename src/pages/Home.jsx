import React from "react";
import Team from "../components/Team";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"
import ContactUs from "../components/ContactUs";
import HomePageQuiz from "../components/HomePageQuiz";

const Home = (isLoggedIn) => {

    return (
        <>
            <div className="flex flex-col justify-center
        text-4xl bg-white overflow-hidden ">
            </div>
            <HeroSection />
            <HomePageQuiz />
            <ContactUs />
            <Team />
            <Footer />
        </>
    );
}
export default Home;
