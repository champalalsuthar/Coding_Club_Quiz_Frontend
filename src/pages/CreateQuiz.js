import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, setUserData } from '../Redux/dashboardSlice';
import QuizForm from '../components/QuizForm';
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const CreateQuiz = () => {
  const Navigate = useNavigate();
  const userData = useSelector(selectUserData);
  // const dispatch = useDispatch();


  console.log(userData);
  // const [quizData, setQuizData] = useState({
  //   title: '',
  //   questions: [
  //     {
  //       question: '',
  //       option1: '',
  //       option2: '',
  //       option3: '',
  //       option4: '',
  //       ans: '',
  //     },
  //     // Additional questions...
  //   ],
  // });

  const handleSaveQuiz = (data) => {
    console.log(data);
    const namefullname = userData.firstname + ' ' + userData.Lastname;
    data.name = namefullname;
    data.userId = userData._id;
    console.log(data);
    // fetch('http://localhost:5000/createquiz', {
    fetch('https://coding-club-quiz-backend.vercel.app/createquiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.code == 200) {
          toast.success(response.message);
          console.log('Data sent successfully:');
          Navigate("/allquizes");
        }
        else {
          toast.error(response.message);
          alert(response.data.message)
          Navigate("/");
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };
  console.log("outer of create quiz");

  return (
    <>
      {
        userData ?
          <div className=' mx-auto w-full lg:w-1/2  rounded-lg'>
            < QuizForm onSaveQuiz={handleSaveQuiz} userData={userData} />
          </div > :
          <div className="">
            <div className="p-9 text-center" >
              <div>
                <h2 className="text-6xl">ALERT..!!</h2>
                <h3 className="text-4xl m-4">UH OH! You're Not Logged in.</h3>
                <p className=" m-2 text-red-400">
                  please log in first.
                </p>
                <p className=" m-2 text-red-400" >Otherwise, go back and reload</p>
                {/* <p className=" m-2">
                  But you can click the button below to go back to the
                  Log in page.
                </p> */}
                {/* <NavLink to="/">
                        <button> Go Back to Home</button>
                    </NavLink> */}
                <div className="m-12">
                  <a href="/login" class="relative px-5 py-3 overflow-hidden font-medium text-black bg-blue-400 border border-gray-100 rounded-lg shadow-inner group">
                    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-bold ">Log in {"-->"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default CreateQuiz;
