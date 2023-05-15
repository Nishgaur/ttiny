import React from 'react';
import { useState } from 'react';
import WordFrequency from './WordFrequency';
import HistogramData from './HistogramData';

const MainPage = () => {
  const [data, setData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://www.terriblytinytales.com/test.txt'
      );
      const fetchedData = await response.text();
      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-indigo-800 via-violet-900 to-neutral-950 p-4">
      <h1 className="text-4xl text-white font-bold mb-8">Let's get started!</h1>
      <form onSubmit={handleSubmit}>
        <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-green-500 hover:to-green-300 text-white ring-neutral-950 ring-opacity-25 ring-1 font-bold py-2 px-4 hover:shadow-white rounded-lg">
          SUBMIT
        </button>
      </form>
      {data && (
        <div className="bg-white text-black p-4 rounded-lg w-full max-w-3xl overflow-x-hidden mb-2">
          <pre className="whitespace-pre-wrap">{data}</pre>
          <br />
          <br />
          <h2 className="flex flex-col items-center text-2xl text-indigo-700 font-bold">
            Enter a word to check its Frequency :
          </h2>
          <WordFrequency />
            <br/>
            <br/>
          <h2 className="flex flex-col items-center text-2xl text-indigo-700 font-bold">
             Most occurring words:
          </h2>
          <HistogramData />
        </div>
      )}
    </div>
  );
};

export default MainPage;
