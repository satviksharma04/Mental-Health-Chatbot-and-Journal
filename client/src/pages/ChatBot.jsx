import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Chat from '../components/Chat';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await axios.post('http://localhost:4000/api/chatbot/chat', {
        message: input,
      });

      const botMessage = { from: 'bot', text: res.data.reply };
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      const errorReply = {
        from: 'bot',
        text: "Sorry, I'm having trouble responding right now."
      };
      setMessages([...newMessages, errorReply]);
    }
  }

  return (
    <div className='min-h-screen bg-gray-200 py-4 px-4 flex justify-center'>
      <div className='w-full max-w-3xl bg-gray-400 rounded-lg px-4 py-4 shadow-lg flex flex-col justify-between'>
        <div>
          <h2 className='text-center text-white font-semibold text-3xl '>
            How Are You Feeling Today?
          </h2>
        </div>
        <div className='bg-white min-h-[430px] rounded-lg p-4 overflow-y-auto'>
          <Chat messages={messages} />
        </div>
        <div className='flex items-center gap-3 mt-1'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='flex-1 bg-white rounded-3xl py-2 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="text" placeholder='Type you message...'
          />
          <button
            onClick={handleSend}
            className='text-white cursor-pointer rounded-3xl bg-gray-800 px-4 py-2 hover:bg-gray-900 transition'>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
