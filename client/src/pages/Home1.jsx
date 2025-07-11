import React from 'react'

const Home1 = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-rose-200 to-pink-200 flex items-center justify-center px-6'>
      <div className='max-w-4xl text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight'>
          Your Mental Wellness Companion
        </h1>
        <p className='text-lg sm:text-xl text-gray-700 font-medium leading-relaxed'>
          Discover a safe space to explore your thoughts, understand mental health topics, and find support through intelligent journaling and a compassionate chatbot.
          <br className='hidden sm:block' />
          Whether you're tracking your emotions or seeking clarity, <a href='/' className='font-semibold text-purple-700'>MindBuddy</a> is here to walk with you every step of the way.
        </p>
      </div>
    </div>
  )
}

export default Home1
