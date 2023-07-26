import React from "react";
import '../components/mininav.css';
import Mininav from '../components/mininav'

const FFXIV = () => {
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p class="game-title">Have you heard of the critically acclamined MMORPG...?</p>
        </header>
        </div>
        
    )
}

export default FFXIV;