import React from 'react';
import TypingEffect from './TypingEffect'; 
import ReactMarkdown from 'react-markdown';


function Response({ question, answer }) {
    const typingText = TypingEffect(answer, 15); 
  
    return (
        <div className='break-words max-w-full p-4 '>
        <h2 className='font-semibold text-lg text-gray-700'>You</h2>
        <pre className='whitespace-pre-wrap text-gray-600 mb-4'>{question}</pre>
        <h2 className='font-semibold text-lg text-gray-700'>Synth AI</h2>
        <div className='whitespace-pre-wrap text-gray-600'>
          <ReactMarkdown>{typingText}</ReactMarkdown>
        </div>
      </div>
    );
  }
export default Response;
