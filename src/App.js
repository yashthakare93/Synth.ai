import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Input from './Components/Input';
import HistoryList from './Components/HistoryList';
import ErrorMessage from './Components/ErrorMessage';

function App() {
  const [history, setHistory] = useState([]); // State to store history of questions and responses
  const [errorMessage, setErrorMessage] = useState(null); // State to store error message

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

  return (
    <div className='flex flex-col h-screen bg-gray-100 px-96'>
    <div className='flex-grow overflow-auto'>
      <HistoryList history={history} />
    </div>
    <div className='flex items-end justify-center bg-gray-100'>
      <div className='w-full max-w-lg p-4 bg-white rounded-lg shadow-lg mb-4'>
        <Input onGenerateAnswer={generateAnswer} />
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      </div>
    </div>
  </div>
  );
}

export default App;

