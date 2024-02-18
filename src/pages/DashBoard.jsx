import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const DashBoard = ({ setIsLoggedIn }) => {
    const location = useLocation();
    const data = location.state && location.state.user;
    const [userData, setUserData] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedToken = window.localStorage.getItem('token');
                // console.log(storedToken);
                if (storedToken) {
                    // const response = await axios.post("http://localhost:5000/validateToken", { token: storedToken });
                    const response = await axios.post("https://coding-club-quiz-backend.vercel.app/validateToken", { token: storedToken });
                    const userDataFromServer = response.data.data;
                    // console.log(userDataFromServer);
                    setUserData(userDataFromServer);
                }
            } catch (error) {
                console.error("Error validating token:", error);
                Navigate("/login");
            }
        };
        if (!data) {
            fetchData();
        }
        else {
            setUserData(data.result);
        }
    }, []);
    // console.log(user);.
    // console.log(userData);
    // const location = useLocation();
    // const user = location.state && location.state.user;
    // console.log("ds forntend");
    // // console.log(user);
    // const location = useLocation();
    // console.log("Location object:", location);

    // const user = location.state && location.state.user;
    // const userName = user && user.result && user.result.firstname;

    // // Now 'user' contains the data passed from the login page
    // console.log("User details on dashboard:", user);
    // console.log(user.result);
    // console.log(user.result.firstname);


    return (
        <div className="pt-28">

            <div className=" h-full w-full">
                <Profile user={userData} />
                <Footer />
            </div>

        </div>

    );
}
export default DashBoard;