import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dubrovnik from './places/croatia/dubrovnik';
import Krka from "./places/croatia/krka"
import Pula from "./places/croatia/pula"
import Cusco from './places/peru/cusco';
import Lima from './places/peru/lima';
import MachuPicchu from './places/peru/machupicchu';
import Garmisch from './places/germany/garmisch';
import Munich from './places/germany/munich';
import Wiesbaden from './places/germany/wiesbaden';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/croatia/dubrovnik" element={<Dubrovnik />} />
        <Route path="/croatia/krka" element={<Krka />} />
        <Route path="/croatia/pula" element={<Pula />} />  
        <Route path="/peru/machupicchu" element={<MachuPicchu/>}/>
        <Route path="/peru/lima" element={<Lima/>}/>
        <Route path="/peru/cusco" element={<Cusco/>}/>
        <Route path="/germany/garmisch" element={<Garmisch/>}/>
        <Route path="/germany/munich" element={<Munich/>}/>
        <Route path="/germany/wiesbaden" element={<Wiesbaden/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
