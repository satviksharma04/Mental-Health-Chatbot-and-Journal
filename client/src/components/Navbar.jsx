import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId, logout, setShowLogin, loading } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='bg-gray-800 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>

          <a href='/' className='flex items-center space-x-3'>
            <img
              src={assets.mentalhealth_logo}
              alt='MindBuddy Logo'
              className='w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-110'
            />
            <h1 className='text-white text-xl sm:text-2xl font-bold tracking-wide'>
              MindBuddy
            </h1>
          </a>

          <div className='hidden md:flex items-center gap-8'>
            <a href='/' className='text-white hover:text-gray-200 font-medium transition-colors duration-300 relative group'>
              Home
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='/chatbot' className='text-white hover:text-gray-200 font-medium transition-colors duration-300 relative group'>
              ChatBot
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='/mood-tracker' className='text-white hover:text-gray-200 font-medium transition-colors duration-300 relative group'>
              Mood Tracker
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='/journal' className='text-white hover:text-gray-200 font-medium transition-colors duration-300 relative group'>
              Journal
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='/helpline' className='text-white hover:text-gray-200 font-medium transition-colors duration-300 relative group'>
              Helpline
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='/about' className='text-white hover:text-gray-200 font-medium transition-colors duration-300 relative group'>
              About
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>

          <div className='flex items-center space-x-2'>
            {loading ? null : (
              userId ? (
                <button
                  onClick={logout}
                  className='cursor-pointer bg-red-500 text-white font-semibold py-2 px-5 md:py-2.5 md:px-6 rounded-full shadow-sm hover:bg-red-600 transition-all duration-200'
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className='cursor-pointer bg-white text-gray-800 font-semibold py-2 px-5 md:py-2.5 md:px-6 rounded-full shadow-sm hover:bg-gray-200 transition-all duration-200'>
                  Login
                </button>
              )
            )}


            <button
              className='md:hidden cursor-pointer text-white px-2'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
                <div className='text-2xl font-bold'>✖</div>
              ) : (
                <div className='space-y-1'>
                  <div className='w-6 h-0.5 bg-white'></div>
                  <div className='w-6 h-0.5 bg-white'></div>
                  <div className='w-6 h-0.5 bg-white'></div>
                </div>
              )}
            </button>

          </div>
        </div>


        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className='px-6 pt-2 pb-3 space-y-1 bg-gray-800 rounded-b-lg shadow-lg'>
            <a href='/' className='block px-7 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300' onClick={closeMenu}>
              Home
            </a>
            <a href='/chatbot' className='block px-7 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300' onClick={closeMenu}>
              ChatBot
            </a>
            <a href='/mood-tracker' className='block px-7 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300' onClick={closeMenu}>
              Mood Tracker
            </a>
            <a href='/journal' className='block px-7 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300' onClick={closeMenu}>
              Journal
            </a>
            <a href='/helpline' className='block px-7 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300' onClick={closeMenu}>
              Helpline
            </a>
            <a href='/about' className='block px-7 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-300' onClick={closeMenu}>
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
