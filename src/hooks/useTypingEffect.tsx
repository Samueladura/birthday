import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 50): string => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Reset displayed text when text changes
    setDisplayedText('');
    
    if (!text) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      }
      
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;