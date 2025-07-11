import React from 'react'
import { MdCreate, MdDelete } from 'react-icons/md'
import moment from "moment";

const JournalCard = ({
    title,
    content,
    date,
    onEdit,
    onDelete,
}) => {
    return (
        <div>
            <div className='flex flex-col bg-white shadow-lg p-2 rounded-lg'>
                <div>
                    <h3 className='text-gray-800 text-md font-medium'>{title}</h3>
                    <span className='text-sm text-blue-500'>
                        {moment(date).format("Do MMM YYYY")}
                    </span>
                </div>
                <p className='text-gray-700 text-sm mt-1 break-words whitespace-pre-wrap overflow-hidden max-h-32 overflow-y-auto'>{content}</p>
                <div className='flex items-center justify-between mt-2'>
                    <button className='bg-gray-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-gray-700'>
                        <MdCreate onClick={onEdit} />
                    </button>
                    <button className='bg-gray-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-gray-700'>
                        <MdDelete onClick={onDelete} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JournalCard
