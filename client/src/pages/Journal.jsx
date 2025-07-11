import React from 'react'
import JournalBox from '../components/JournalBox'
import JournalCard from '../components/JournalCard'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import Modal from 'react-modal'

const Journal = () => {
  
  const [journals, setJournals] = useState([]);

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })

  const handleAddJournal = (journal) => {
    setJournals(prev => [
      { ...journal, id: Date.now(), date: new Date() },
      ...prev
    ]);
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  const handleEditJournal = (updatedJournal) => {
    setJournals(prev =>
      prev.map(journal =>
        journal.id === updatedJournal.id
          ? { ...journal, ...updatedJournal }
          : journal
      )
    );
    setOpenAddEditModal({ isShown: false, type: "add", data: null });
  };

  const handleDeleteJournal = (id) => {
    setJournals(prev => prev.filter(journal => journal.id !== id));
  };

  return (
    <div className='min-h-screen bg-gray-400 py-5 px-6'>
      <div className='max-w-5xl mx-auto text-center pb-4'>
        <h1 className='text-2xl sm:text-4xl font-bold text-gray-900 mb-3'>
          Your Personal Journal
        </h1>
        <p className='text-lg text-gray-700'>
          Jot down what's on your mind. No pressure, just your thoughts, raw and real.
          Click on the Plus icon at bottom right corner.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-md:m-5'>
        {journals.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No journals yet. Click the plus icon to add one!</p>
        ) : (
          journals.map(journal => (
            <JournalCard
              key={journal.id}
              title={journal.title}
              content={journal.content}
              date={journal.date}
              onEdit={() => setOpenAddEditModal({ isShown: true, type: "edit", data: journal })}
              onDelete={() => handleDeleteJournal(journal.id)}
            />
          ))
        )}
      </div>
      <button
        className='fixed right-7 bottom-7 text-white text-3xl bg-gray-800 px-3 py-2 cursor-pointer rounded-lg hover:bg-gray-900'
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }}>
        <MdAdd className='text-[32px] text-white' />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {
          setOpenAddEditModal({ isShown: false, type: "add", data: null });
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
        contentLabel=""
        className="w-[50%] max-md:w-[60%] max-sm:w-[80%] max-h-4/5 bg-white rounded-md mx-auto mt-20 p-5"
      >
        <JournalBox
          onClose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }
          onAddJournal={handleAddJournal}
          onEditJournal={handleEditJournal}
          noteData={openAddEditModal.data}
          type={openAddEditModal.type}
        />
      </Modal>
    </div>
  )
}

export default Journal
