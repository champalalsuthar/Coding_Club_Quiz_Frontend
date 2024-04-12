import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, setUserData } from '../Redux/dashboardSlice';
import QuizForm from '../components/QuizForm';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          console.log('Data sent successfully:');
          Navigate("/allquizes");
        }
        else {
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
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

    <div className=' mx-auto w-full lg:w-1/2  rounded-lg'>
      <QuizForm onSaveQuiz={handleSaveQuiz} userData={userData} />
    </div>
  );
};

export default CreateQuiz;
