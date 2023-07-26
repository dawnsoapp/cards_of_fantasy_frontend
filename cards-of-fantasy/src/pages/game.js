import React from "react";
import './game.css'
import '../components/mininav.css';
import Mininav from '../components/mininav'


const Game = () => {
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p class="game-title">Think Like an Astrologian!</p>
        </header>
        </div>
        
    )
}

export default Game;