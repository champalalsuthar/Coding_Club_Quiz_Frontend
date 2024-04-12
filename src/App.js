
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
import HtmlQuiz from './QuizData/HtmlQuiz';
import CssQuiz from './QuizData/CssQuiz';
import Result from './pages/Result';
import ContactPage from './pages/About';
import ReactQuiz from './QuizData/ReactQuiz';
import MongodbQuiz from './QuizData/MongodbQuiz';
import NodejsQuiz from './QuizData/NodejsQuiz';
import JsQuiz from './QuizData/JsQuiz';
import PrivateRoutelogin from './components/PrivateRoutelogin';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav';
// import NavBar from './components/NavBar';
import Navv from './components/Navv';
import Quizes1 from './pages/Quizes1';
import { ImOffice } from 'react-icons/im';
import QuizDetail from './components/QuizDetail';
import CreateQuiz from './pages/CreateQuiz';
import QuizDetails from './components/QuizDetails';



// const globalinfo = createContext()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      {/* <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      <Navv isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes className="">
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}></Home>}></Route >
        <Route path='/quizes' element={<Quizes />}></Route>
        <Route path='/htmlquiz' element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <HtmlQuiz />
          </PrivateRoute>}>
        </Route>
        {/* <Route path='/htmlquiz' element={<HtmlQuiz />}></Route> */}


        <Route path='/allquizes' element={<Quizes1 />}></Route>
        {/* <Route path="/allquizes/:id" element={<QuizDetails />} /> */}
        <Route path='/allquizes/:id' element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <QuizDetails setIsLoggedIn={setIsLoggedIn} />
          </PrivateRoute>}></Route>
        <Route path='/cssquiz' element={<CssQuiz />}></Route>
        <Route path='/jsquiz' element={<JsQuiz />}></Route>
        <Route path='/raectquiz' element={<ReactQuiz />}></Route>
        <Route path='/mongodbquiz' element={<MongodbQuiz />}></Route>
        <Route path='/nodejsquiz' element={<NodejsQuiz />}></Route>

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
    </div>
    // </globalinfo.Provider>
  );
}

export default App;