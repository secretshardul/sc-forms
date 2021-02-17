import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-restricted-globals
import TypingDNA from './TypingDNA';

function App() {
  const tdna = new TypingDNA()
  function getPattern() {
    const tp = tdna.getTypingPattern({
      type: 0,
      length: 160
    })
    console.log(tp)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input id="name-field" />
        <button onClick={getPattern}>Submit</button>
      </header>
    </div>
  );
}

export default App;
