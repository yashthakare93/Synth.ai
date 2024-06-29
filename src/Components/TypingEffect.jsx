
import { useState, useEffect } from 'react';

const TypingEffect = (text, delay) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

    let index = 0;
    setDisplayedText(''); // Reset the displayed text
    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return displayedText;
};

export default TypingEffect;