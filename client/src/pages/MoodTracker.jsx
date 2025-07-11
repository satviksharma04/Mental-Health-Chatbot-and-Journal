import React from 'react'
import { useState, useEffect } from 'react'
import MoodCalendar from '../components/MoodCalendar'
import MoodSelector from '../components/MoodSelector'
import QouteCard from '../components/QouteCard'
import PieChart from '../components/PieChart'

const MoodTracker = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodLog, setMoodLog] = useState({});

  useEffect(() => {
  if (selectedDate && selectedMood) {
    const dateKey = selectedDate.toDateString();
    setMoodLog((prev) => ({ ...prev, [dateKey]: selectedMood }));
  }
}, [selectedDate, selectedMood]);


  return (
    <div className='min-h-screen bg-gray-400 py-5 px-6'>
      <div className='max-w-5xl mx-auto text-center pb-4'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
          Track your Mood
        </h1>
        <p className='text-lg sm:text-xl text-gray-700'>
          Understand your emotional patterns and take control of your mental well-being
        </p>
      </div>

      <div className='flex items-center justify-center'>
        <MoodCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      {selectedDate && (
        <div className='flex items-center justify-center'>
          <MoodSelector onMoodSelect={setSelectedMood} />
        </div>
      )}

      {selectedMood && (
        <QouteCard mood={selectedMood} />
      )}

      <div className='mt-10 flex items-center justify-center'>
        <PieChart moodLog={moodLog} />
      </div>
    </div>
  )
}

export default MoodTracker
