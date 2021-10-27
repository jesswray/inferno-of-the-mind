import logo from './logo.svg';
import './App.css';
import Puffer from './Puffer.js';

const numPuffers = 8

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="puffers-container">
        {[...Array(numPuffers)].map( ( _num, i ) => {
          return (
            <div className="puffer-wrapper">
              <Puffer key={`puffer-${i}`} />
            </div> 
          );
        })}
        </div>
      </header>
    </div>
  )
}

export default App;
