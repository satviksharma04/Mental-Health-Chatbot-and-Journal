import React from 'react'

const Chat = ({ messages }) => {
  return (
    <div className='bg-white min-h-96 p-2 rounded-lg overflow-y-auto space-y-3'>
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`px-4 py-2 rounded-xl max-w-[70%] text-sm ${
              msg.from === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
