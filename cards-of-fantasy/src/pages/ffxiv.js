import React from "react";
import './ffxiv.css';
import '../components/mininav.css';
import Mininav from '../components/mininav'

const FFXIV = () => {
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Have you heard of the critically acclamined MMORPG...?</p>
        </header>
        <div className="slideshow-box">

        </div>
        </div>
        
    )
}

export default FFXIV;