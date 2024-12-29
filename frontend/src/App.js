import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://localhost:4000/api/onepiece/characters')
      .then((response) => {
        setCharacters(response.data.data); // Assume the API returns a JSON array
      })
      .catch((err) => {
        setError('Failed to fetch characters');
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>One Piece Characters</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {characters.map((character, index) => (
            <li key={index}>
              <h3>{character.name}</h3>
              <p>Role: {character.role}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
