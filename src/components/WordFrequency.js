import React, { useState } from 'react';

const WordFrequency = () => {
  const [word, setWord] = useState('');
  const [frequency, setFrequency] = useState([]);

  const fetchWordFrequency = async () => {
    try {
      const response = await fetch(
        'https://www.terriblytinytales.com/test.txt'
      );
      const text = await response.text();
      const words = text.split(/\s+/);
      const wordCount = words.reduce((count, currentWord) => {
        if (currentWord === word) {
          return count + 1;
        }
        return count;
      }, 0);
      const wordFrequencyList = [{ word, frequency: wordCount }];
      setFrequency(wordFrequencyList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
      />
      <button
        onClick={fetchWordFrequency}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
      >
        Frequency
      </button>
      {frequency.length > 0 && (
        <ul className="mt-4">
          {frequency.map(({ word, frequency }) => (
            <li key={word}>
              {word}: {frequency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WordFrequency;
