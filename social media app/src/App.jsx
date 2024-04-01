import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ProfileNav from "./components/Navbar/ProfileNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPost from "./Pages/AddPost.jsx/AddPost";
import Profile from "./Pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import EditForm from "./components/EditForm";


function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editform" element={<EditForm />} />
      </Routes>
    </Router>
  )
}

export default App
