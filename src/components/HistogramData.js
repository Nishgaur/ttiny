import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
const HistogramData = () => {
  const [wordFrequency, setWordFrequency] = useState([]);

  useEffect(() => {
    fetchWordFrequency();
  }, []);

  const fetchWordFrequency = async () => {
    try {
      const response = await fetch(
        'https://www.terriblytinytales.com/test.txt'
      );
      const text = await response.text();
      const words = text.split(/\s+/);

      const wordCountMap = words.reduce((map, currentWord) => {
        map[currentWord] = (map[currentWord] || 0) + 1;
        return map;
      }, {});

      const sortedWords = Object.keys(wordCountMap).sort(
        (a, b) => wordCountMap[b] - wordCountMap[a]
      );

      const top20Words = sortedWords.slice(0, 20).map((word) => ({
        word,
        frequency: wordCountMap[word],
      }));

      setWordFrequency(top20Words);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Prepare data for chart
  const chartData = {
    labels: wordFrequency.map((item) => item.word),
    datasets: [
      {
        label: 'Word Frequency',
        data: wordFrequency.map((item) => item.frequency),
        backgroundColor: '#4299e1',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Histogram Data</h2>
      {wordFrequency.length > 0 && (
        <div className="w-1/2">
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default HistogramData;
