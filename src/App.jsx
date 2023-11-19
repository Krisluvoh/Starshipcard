import React, { useState, useEffect } from 'react';
import './App.css';

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
      <div className="header">
        <h1>STAR WARS STARSHIPS</h1>
      </div>
      <div className="container">
        <div className="column">
          {starships.slice(0, 3).map((starship, index) => (
            <div key={index} className="card">
              <h3>{starship.name}</h3>
            </div>
          ))}
        </div>
        <div className="column">
          {starships.slice(3, 6).map((starship, index) => (
            <div key={index} className="card">
              <h3>{starship.name}</h3>
            </div>
          ))}
        </div>
        <div className="column">
          {starships.slice(6, 8).map((starship, index) => (
            <div key={index} className="card">
              <h3>{starship.name}</h3>
            </div>
          ))}
        </div>
        <div className="column">
          {starships.slice(8, 10).map((starship, index) => (
            <div key={index} className="card">
              <h3>{starship.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
