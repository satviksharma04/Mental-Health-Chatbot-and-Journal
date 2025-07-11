import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MoodCalendar = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-xl font-semibold text-gray-800">Pick a Date</h3>

            <DatePicker
                selected={selectedDate}
                onChange={setSelectedDate}
                dateFormat="MMMM d, yyyy"
                className="px-4 py-2 rounded-md border bg-zinc-300 border-gray-300 shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholderText="Select a date"
            />
        </div>
    )
}

export default MoodCalendar;
