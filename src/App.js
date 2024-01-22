
import './App.css';
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Quizes from './pages/Quizes';
import HtmlQuiz from './QuizData/HtmlQuiz';
import CssQuiz from './QuizData/CssQuiz';
import Result from './pages/Result';
import ContactPage from './pages/About';
import ReactQuiz from './QuizData/ReactQuiz';
import MongodbQuiz from './QuizData/MongodbQuiz';
import NodejsQuiz from './QuizData/NodejsQuiz';
import JsQuiz from './QuizData/JsQuiz';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
      <Route path='/' element={<Home isLoggedIn={isLoggedIn}></Home>}></Route >
        <Route path='/quizes' element={<Quizes />}></Route>
        <Route path='/htmlquiz' element={<HtmlQuiz />}></Route>
        <Route path='/cssquiz' element={<CssQuiz />}></Route>
        <Route path='/jsquiz' element={<JsQuiz />}></Route>
        <Route path='/raectquiz' element={<ReactQuiz/>}></Route>
        <Route path='/mongodbquiz' element={<MongodbQuiz />}></Route>
        <Route path='/nodejsquiz' element={<NodejsQuiz />}></Route>
        <Route path='/result' element={<Result />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/ContactPage' element={<ContactPage />}></Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <DashBoard />
          </PrivateRoute>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;