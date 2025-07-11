import React from 'react'
import { useState } from 'react'
import { MdClose } from "react-icons/md"

const JournalBox = ({ onClose, onAddJournal, onEditJournal, type = "add", noteData }) => {

    const [title, setTitle] = useState(noteData?.title || "");
    const [content, setContent] = useState(noteData?.content || "");
    const [error, setError] = useState(null);
    
    React.useEffect(() => {
        if (type === "edit" && noteData) {
            setTitle(noteData.title || "");
            setContent(noteData.content || "");
        } else if (type === "add") {
            setTitle("");
            setContent("");
        }
    }, [type, noteData]);

    const editJournal = async () => {
        onEditJournal({
            ...noteData,
            title,
            content,
        });
    }

    const addNewJournal = async () => {
        onAddJournal({ title, content });
    }

    const handleAddJournal = () => {
        if(!title) {
            setError("Please enter the title")
            return;
        }
        if(!content) {
            setError("Please enter the content")
            return;
        }

        if(type === "edit") {
            editJournal();
        } else {
            addNewJournal();
        }
    }
    return (
        <div className='w-full max-w-3xl bg-gray-300 flex flex-col px-2 py-2'>
            <button
                className="w-10 h-10 rounded-full flex items-center justify-center absolute top-3 right-3 hover:bg-slate-50 hover:text-gray-800 cursor-pointer"
                onClick={onClose}
            >
                <MdClose className="text-xl text-white font-bold hover:text-gray-800" />
            </button>

            <label className='text-lg font-medium'>Title</label>
            <input
                className='bg-white p-1 mb-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600'
                type="text" placeholder='Enter Title' value={title}
                onChange={({ target }) => setTitle(target.value)} 
            />

            <label className='text-lg font-medium'>Article</label>
            <textarea className='bg-white p-1 mb-2 rounded-md min-h-36 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600'
                type='text' placeholder='Write your journal here...' value={content} rows={10}
                onChange={({ target }) => setContent(target.value)}
            />

            <button  
              className='text-white bg-gray-800 rounded-lg my-2 py-2 cursor-pointer'
              onClick={handleAddJournal}
            >
                {type === "edit" ? "Update" : "Add"}
            </button>
        </div>
    )
}

export default JournalBox
