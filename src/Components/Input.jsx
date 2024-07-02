import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

function Input({ onGenerateAnswer }) {
  const [question, setQuestion] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholderTexts = [
    "Ask Verse AI anything...",
    "built by @yashthakare93 using Gemini..."
  ];

  const handleGenerateAnswer = () => {
    onGenerateAnswer(question);
    setQuestion('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onGenerateAnswer(question);
      setQuestion('');
    }
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
    // Example of dynamic placeholder change based on input length
    if (e.target.value.length > 0) {
      setPlaceholderIndex(1); // Change placeholder to "Type your question here..."
    } else {
      setPlaceholderIndex(0); // Change placeholder back to "Ask Verse AI anything..."
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-between px-2'>
      <input
        type="text"
        value={question}
        onChange={handleChange}
        placeholder={placeholderTexts[placeholderIndex]}
        className='w-full outline-none bg-gray-100 px-4 py-2 rounded'
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleGenerateAnswer} className='ml-2'>
        <FaArrowCircleUp className='w-8 h-8 cursor-pointer' />
      </button>
    </div>
  );
}

export default Input;
