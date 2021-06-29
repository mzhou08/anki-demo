import './App.css';
import CardInput from './components/cardinput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Anki Demo - Features and Implementation
        </p>
      </header>
      <p>This is a basic demo of Anki features and the contexts in which
      they can be applied to LearningClues.
      </p>
      <CardInput />
    </div>
    
  );
}

export default App;
