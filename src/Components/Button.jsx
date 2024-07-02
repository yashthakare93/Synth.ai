
import React from 'react';

function Button({ label, onClick }) {
  return (
    <button
      className="ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ... text-black font-normal rounded-lg py-2 px-4 "
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
