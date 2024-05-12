
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import { useState, useEffect, createContext } from 'react';
import PrivateRoute from './components/PrivateRoutedashboard';
import Quizes from './pages/Quizes';

import Result from './pages/Result';
import ContactPage from './pages/About';

import PrivateRoutelogin from './components/PrivateRoutelogin';
import ErrorPage from './pages/ErrorPage';
// import NavBar from './components/NavBar';
import Navv from './components/Navv';
import Quizes1 from './pages/Quizes1';
import { ImOffice } from 'react-icons/im';
import CreateQuiz from './pages/CreateQuiz';
import QuizDetails from './components/QuizDetails';
import UserProfile from './components/UserProfile';
import ShowLeaderboard from './components/ShowLeaderboard';
import Nav1 from './components/Nav1'
import Home_Web from './components/firstpart/Home_Web';



// const globalinfo = createContext()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [showmainnav, setShowMainNav] = useState(true);
  const [userData, setUserData] = useState();
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      // Token found, set authentication state or perform any necessary actions
      setIsLoggedIn(true);
    }
  }, []);
  return (
    // <globalinfo.Provider value={userData}>

    <div className="w-full min-h-screen flex flex-col ">
      {/* {showmainnav ? */}
      {/* <Nav1 showmainnav={showmainnav} setShowMainNav={setShowMainNav} ></Nav1> : */}
      <Navv isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* } */}
      {/* <div className="w-full min-h-screen flex flex-col">
        {showmainnav ? (
          <Route path="/" exact>
            <Nav1 showmainnav={showmainnav} setShowMainNav={setShowMainNav} />
          </Route>
        ) : (
          <Navv isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div> */}
      {/* </Router> */}
      <Routes className="">
        {/* <Route path='/' element={<Home_Web isLoggedIn={isLoggedIn}></Home_Web>}></Route > */}
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}></Home>}></Route >
        <Route path='/quizes' element={<Quizes />}></Route>

        <Route path='/allquizes' element={<Quizes1 />}></Route>
        {/* <Route path="/allquizes/:id" element={<QuizDetails />} /> */}
        <Route path='/allquizes/:id' element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <QuizDetails setIsLoggedIn={setIsLoggedIn} />
          </PrivateRoute>}></Route>
        <Route path='/allquizes/showleaderboard/:id' element={<ShowLeaderboard />}></Route>
        <Route path='/userprofile/:id' element={<UserProfile />}></Route>


        <Route path='/result' element={<Result />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/ContactPage' element={<ContactPage />}></Route>

        <Route path='/login' element={
          <PrivateRoutelogin isLoggedIn={isLoggedIn} >
            <Login setIsLoggedIn={setIsLoggedIn} />
          </PrivateRoutelogin>}>
        </Route>

        <Route path='/signup' element={
          <PrivateRoutelogin isLoggedIn={isLoggedIn} >
            <Signup setIsLoggedIn={setIsLoggedIn} />
          </PrivateRoutelogin>}>
        </Route>

        <Route path='/createquiz' element={
          // <PrivateRoute isLoggedIn={isLoggedIn} >
          <CreateQuiz setIsLoggedIn={setIsLoggedIn} />
          // </PrivateRoute>
        }>
        </Route>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <DashBoard />
          </PrivateRoute>}>
        </Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div >
    // </globalinfo.Provider>
  );
}

export default App;