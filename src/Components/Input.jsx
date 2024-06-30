import React, { useState } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

function Input({ onGenerateAnswer }) {
  const [question, setQuestion] = useState('');

  const handleGenerateAnswer = () => {
    onGenerateAnswer(question);
    setQuestion('');
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior of form submission
      onGenerateAnswer(question); // Call the onGenerateAnswer function with the current question
      setQuestion(''); // Clear the input field after submitting the question
    }
  };


  return (
    <div className='flex justify-between px-2 '>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Verse AI anything..."
        className='lg:w-96 outline-none'
        onKeyDown={handleKeyDown} 
      />
      <button onClick={handleGenerateAnswer} ><FaCircleArrowUp/></button>
    </div>
  );
}

export default Input;