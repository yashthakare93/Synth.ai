import '../App.css';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import Input from '../Components/Input';
import HistoryList from '../Components/HistoryList';
import ErrorMessage from '../Components/ErrorMessage';

function Main() {
  const [history, setHistory] = useState([]); // State to store history of questions and responses
  const [errorMessage, setErrorMessage] = useState(null); // State to store error message
  const historyRef = useRef(null); // Ref to scroll to bottom of history list

  const generateAnswer = (question) => {
    const data = {
      contents: [
        {
          parts: [
            { text: question }
          ]
        }
      ]
    };

    axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD2iZgQzmKgZEpkQR75okYi4HroCwGhV24`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No content found';
        setHistory(prevHistory => [...prevHistory, { question, answer }]);
        setErrorMessage(null); // Clear any previous error messages
        scrollToBottom(); // Scroll to bottom of history list
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data.error.message || 'An error occurred'); // Store error message in state
        } else if (error.request) {
          setErrorMessage('No response received from the server');
        } else {
          setErrorMessage(error.message);
        }
      });
  };

  const scrollToBottom = () => {
    historyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
    <div className='flex-grow overflow-auto'>
      <HistoryList history={history} />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <div ref={historyRef}></div> {/* Empty div to scroll to */}
    </div>
    <div className='fixed bottom-0 left-0 w-full px-2'> {/* Fixed position at bottom */}
      <div className='max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg mb-4'>
        <Input onGenerateAnswer={generateAnswer} />
        
      </div>
    </div>
  </div>
  );
}

export default Main;
