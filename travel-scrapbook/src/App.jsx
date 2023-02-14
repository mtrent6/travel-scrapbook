import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    //  style={{ backgroundImage: `url(${background})` }}>
    <div style={{backgroundColor: "#F7F7F2"}}>
      <header style={{ textAlign: "center", fontFamily: 'optima', fontSize: 20, fontWeight: 55, paddingTop: "30px"}}>Travel Scrapbook</header>
      <div className="App">

        <div className='link-div'>
          <Link to="/croatia/">Croatia</Link>
        </div>
        <div className='link-div'>
          <Link to="/peru/">Peru</Link>
        </div>
        <div className='link-div'>
          <Link to="/germany/">Germany</Link>
        </div>
      </div>
    </div>
  );
}


export default App;
