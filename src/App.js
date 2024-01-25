import logo from './logo.svg';
import './App.css';
import Prop from './components/props';
import StateProp from './components/stateComponent';
import Iterator from './components/testComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Iterator/>
        <Prop name={'hark'}/>
        <StateProp/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
