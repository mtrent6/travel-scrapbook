import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home Page
        </p>
        <b>Croatia</b>
        <div>
          <Link to="/croatia/dubrovnik">Dubrovnik</Link>
        </div>
        <div>
          <Link to="/croatia/krka">Krka</Link>
        </div>
        <div>
          <Link to="/croatia/pula">Pula</Link>
        </div>


        <b>Peru</b>
        <div>
          <Link to="/peru/machupicchu">Machu Picchu</Link>
        </div>
        <div>
          <Link to="/peru/lima">Lima</Link>
        </div>
        <div>
          <Link to="/peru/cusco">Cusco</Link>
        </div>



        <b>Germany</b>
        <div>
          <Link to="/germany/wiesbaden">Wiesbaden</Link>
        </div>
        <div>
          <Link to="/germany/garmisch">Garmisch</Link>
        </div>
        <div>
          <Link to="/germany/munich">Munich</Link>
        </div>



      </header>
    </div>
  );
}

export default App;
