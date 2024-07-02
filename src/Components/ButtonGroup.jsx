
import React from 'react';
import Button from './Button';

function ButtonGroup({ buttons, handleButtonClick }) {
  return (
    <div>
      {buttons.map((button, index) => (
        <div key={index} className="flex flex-wrap gap-4 gap-x-5 gap-y-5 mt-4 justify-center lg:pt-3 ">
          {button.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              onClick={() => handleButtonClick(btn.question)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonGroup;
