import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar"
// import "./components/NavBar.css"
import Home from './pages/home';
import Dawn from './pages/dawn';
import FFXIV from './pages/ffxiv';
import Game from './pages/game';


function App() {
  return (
    <div>
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Home />} path="home" />
      <Route element={<Dawn />} path="dawn" />
      <Route element={<FFXIV />} path="ffxiv" />
      <Route element={<Game />} path="game" />
    </Routes>


    
    </div>
)}

export default App;
