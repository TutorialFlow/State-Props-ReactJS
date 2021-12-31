import './App.css';
import Timestamp from './Timestamp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Learn State & Props</p>
       <Timestamp val={new Date()} />
      </header>
    </div>
  );
}

export default App;
