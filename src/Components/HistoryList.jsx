import React from 'react';
import Response from './Response';
function HistoryList({ history }) {
    return (
      <div className='space-y-4 p-4'>
        {history.map((entry, index) => (
          <Response key={index} question={entry.question} answer={entry.answer} />
        ))}
      </div>
    );
  }
export default HistoryList;


