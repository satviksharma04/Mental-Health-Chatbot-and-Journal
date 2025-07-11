import React, { useEffect, useState } from 'react';
import axios from 'axios';

const moodQuotes = {
  Happy: [
    "Happiness isn’t loud, it’s the quiet smile when life feels just right.",
    "Let joy seep into your soul like sunlight through morning curtains.",
    "Even the smallest good moment can brighten an entire day.",
    "When your heart dances, the world sways with you.",
    "A happy mind turns ordinary days into golden memories."
  ],
  Calm: [
    "Peace is not the absence of noise, but the presence of clarity.",
    "In stillness, the soul finds its rhythm.",
    "Let your breath be your anchor in every storm.",
    "The calmest waves often run the deepest.",
    "Slow down. The world moves fast, but your peace doesn’t have to."
  ],
  Neutral: [
    "Not every day needs to be a high or a low, sometimes just being is enough.",
    "Balance isn’t boring, it’s your mind taking a breath.",
    "Neutrality is the space where reflection begins.",
    "In the in-between, you gather quiet strength.",
    "Some days are just meant to pass gently by."
  ],
  Sad: [
    "Tears don’t mean weakness—they mean you’ve cared deeply.",
    "Sadness is a storm that waters future growth.",
    "It’s okay to pause and feel, it’s part of being human.",
    "Some of the most beautiful hearts are shaped by pain.",
    "Even on the darkest days, your story isn’t over."
  ],
  Angry: [
    "Anger is energy channel it, don’t let it consume you.",
    "Fire can burn or forge, choose how yours is used.",
    "Speak when you’re calm, not when your mind is a battlefield.",
    "Anger often hides hurt, listen to what it’s really saying.",
    "Let your rage be a compass, not a cage."
  ],
  Anxious: [
    "You’ve survived 100% of your worst thoughts—this one too shall pass.",
    "Anxiety lies, the truth is, you are stronger than it.",
    "Breathe. Right now is all you need to handle.",
    "The mind races, but your breath can always slow it down.",
    "Worries may come uninvited, don’t let them unpack and stay."
  ]
};

const QouteCard = ({ mood }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (mood && moodQuotes[mood]) {
      const quotes = moodQuotes[mood];
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    } else {
      setQuote("Mood not recognized. Stay strong!");
    }
  }, [mood])

  return (
    <div className='mt-6 text-center bg-white shadow p-6 rounded-lg max-w-xl mx-auto'>
      <h3 className='text-lg font-semibold text-gray-700'>Quote for "{mood}" mood</h3>
      <p className='text-gray-700 mt-4 italic'>"{quote}"</p>
    </div>
  )
}

export default QouteCard
