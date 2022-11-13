import React, { useEffect, useState } from 'react';
import { getWord } from './api/openApi';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState();
  
  const searchWord = () => {
    getWord(input)
      .then((data) => {
        setWord(data);
        console.log(data);
      });
  }

  return (
    <div className="app">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={searchWord}>Search</button>
      <h2>{}</h2>
    </div>
  );
}

export default App;
