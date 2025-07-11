import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const moods = ["Happy", "Calm", "Neutral", "Sad", "Angry", "Anxious"];
const colors = [
    'rgba(54, 162, 235, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 159, 64, 1)',
];


const PieChart = ({ moodLog }) => {

    const moodCounts = moods.map(
        (mood) =>
            Object.values(moodLog).filter((entry) => entry === mood).length
    )

    const data = {
        labels: moods.map((mood, i) => `${mood}`),
        datasets: [
            {
                data: moodCounts,
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='max-w-lg w-full'>
            <h2 className='text-xl font-semibold text-center mb-4'>Mood Frequency Overview</h2>
            <Pie data={data} />
        </div>
    )
}

export default PieChart
