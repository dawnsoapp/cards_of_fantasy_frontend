import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Dawn from './pages/dawn';
import FFXIV from './pages/ffxiv';
import Game from './pages/game';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Home />} path="home" />
      <Route element={<Dawn />} path="dawn" />
      <Route element={<FFXIV />} path="ffxiv" />
      <Route element={<Game />} path="game" />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Welcome to Dawn's Cards of Fantasy!
    //     </p>
    //   </header>
    //   <div class="Select-box">
    //     <p>MENU</p>
    //     <button class="Select-options">Talk to Dawn</button>
    //     <button class="Select-options">Think Like an Astrologian</button>
    //     <button class="Select-options">FFXIV</button>

    //   </div>
    // </div>
  );
}

export default App;
