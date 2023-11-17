import React, { useState, useEffect } from 'react';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      {starships.map((starship, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
          <h3>{starship.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;


