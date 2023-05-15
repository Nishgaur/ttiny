import React from 'react';
import WordFrequency from './WordFrequency';

const FetchedPage = ({ location }) => {
  const { data } = location.state || {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-indigo-800 via-violet-900 to-neutral-950 p-4">
      <div className="bg-white text-black p-4 rounded-lg w-full max-w-3xl overflow-x-hidden">
        <WordFrequency />
        <pre className="whitespace-pre-wrap">{data}</pre>
      </div>
    </div>
  );
};

export default FetchedPage;
