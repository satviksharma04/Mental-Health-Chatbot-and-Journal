import React from 'react'

const moods = ["Happy", "Calm", "Neutral", "Sad", "Angry", "Anxious"];

const MoodSelector = ({ onMoodSelect }) => {
    return (
        <div className='mt-5 text-center'>
            <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                How do you feel Today ?
            </h3>
            <div className='flex flex-wrap justify-center gap-4'>
                {moods.map((mood) => (
                    <button
                        key={mood}
                        className='cursor-pointer bg-white px-4 py-2 rounded-lg shadow-md text-gray-700 hover:bg-blue-100 transition'
                        onClick={() => onMoodSelect(mood)}
                    >
                        {mood}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MoodSelector
