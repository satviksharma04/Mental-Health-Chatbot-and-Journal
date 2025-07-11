import React from 'react'

const aboutData = [
    {
        header: "🤖 AI Chatbot – Talk Freely, Anytime",
        description: "Our intelligent chatbot is designed to be your virtual emotional assistant. Whether you're stressed, confused, or just need someone to talk to, the chatbot offers supportive, understanding responses without judgment or pressure. It's not a replacement for therapy, but it can be your first step toward feeling better.",
    },
    {
        header: "📊 Mood Tracker – Understand Yourself Better",
        description: "Track how you feel each day with a simple click. The Mood Tracker helps you visualize your emotional patterns over time with daily logs and insightful pie charts. It’s a gentle way to notice how your emotions shift, and how small changes affect your overall well-being.",
    },
    {
        header: "📓 Daily Journal – Let It Out",
        description: "Sometimes, writing is the best form of therapy. Use our private journal to vent, reflect, or celebrate your wins. It’s fully confidential and helps you become more aware of your thoughts and emotional journey.",
    },
    {
        header: "☎️ Helpline Support – You're Not Alone",
        description: "If things ever feel too heavy, please know that help is always available. We’ve included a list of verified helpline numbers and mental health resources, so you can reach out when needed because asking for help is a sign of strength.",
    },
];

const Home3 = () => {
  return (
    <div className='min-h-screen bg-gray-400 py-5 px-6'>
            <div className='max-w-5xl mx-auto text-center pb-4'>
                <h1 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-4'>
                     About Us
                </h1>
                <p className='text-lg sm:text-xl text-gray-700'>
                    Welcome to <span className='font-bold'>MindBuddy</span>, your personal mental wellness companion. We understand that emotional health is just as important as physical health and we've built a safe, supportive space to help you reflect, recharge, and reconnect.
                </p>
            </div>
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2'>
                {aboutData.map((about, idx) => (
                    <div key={idx} className='rounded-lg bg-gray-200 p-3 shadow-lg shadow-gray-600'>
                        <h2 className='text-xl text-center font-medium p-2 bg-gray-800 rounded-xl text-white'>{about.header}</h2>
                        <p className='text-centertext-gray-800 p-2'>{about.description}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Home3
