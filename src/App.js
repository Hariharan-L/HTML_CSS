import './App.css';
import Prop from './components/props';
import StateProp from './components/stateComponent';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import { About } from './components/about';
import { Home } from './components/home';
import { Login } from './components/login';
import { Experience } from './components/experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <Prop name={'hark'}/>
        <StateProp/>
      </header>
    </div>
  );
}

export default App;
