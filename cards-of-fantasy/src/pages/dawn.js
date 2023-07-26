import React from "react";
import '../components/mininav.css';
import Mininav from '../components/mininav'

const Dawn = () => {
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p class="game-title">Chat with Dawn!</p>
        </header>
        </div>
        
    )
}

export default Dawn;