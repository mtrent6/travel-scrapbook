import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home Page
        </p>
        <Link to="/dubrovnik">Dubrovnik</Link> 
        <Link to="/krka">Krka</Link> 
        <Link to="/pula">Pula</Link> 
      </header>
    </div>
  );
}

export default App;
