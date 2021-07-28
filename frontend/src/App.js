import { useState, useEffect } from 'react';
import './App.css';
import CardInput from './components/cardinput';
import Card from './components/card';

function App() {

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getDecks', {
      'methods': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }
    })
  },[])
  .then(resp => resp.json())
  .catch(error => console.log(error))


  return (
    <div className="App">
      <h1>
        Flashcard Demo - Features and Implementation
      </h1>
      <p>This is a prototype build of the flashcards feature in LearningClues.
      </p>
      <Card />
      <CardInput />
    </div>
    
  );
}

export default App;
