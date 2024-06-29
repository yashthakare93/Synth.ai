
import React, { useState } from 'react';

function Input({ onGenerateAnswer }) {
  const [question, setQuestion] = useState('');

  const handleGenerateAnswer = () => {
    onGenerateAnswer(question);
    setQuestion('');
  };

  return (
    <div className='flex justify-between px-2 '>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Synth AI anything..."
        className=''
      />
      <button onClick={handleGenerateAnswer} className=''>Go</button>
    </div>
  );
}

export default Input;