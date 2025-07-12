import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

Modal.setAppElement('#root');

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ChatBot from './pages/ChatBot';
import MoodTracker from './pages/MoodTracker';
import Journal from './pages/Journal';
import About from './pages/About';
import Helpline from './pages/Helpline';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div>
      <ToastContainer position="." />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/journal' element={<ProtectedRoute><Journal /></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chatbot' element={<ProtectedRoute><ChatBot /></ProtectedRoute>} />
        <Route path='/moodtracker' element={<ProtectedRoute><MoodTracker /></ProtectedRoute>} />
        <Route path='/helpline' element={<Helpline/>} />
      </Routes>
    </div>
  )
}

export default App
