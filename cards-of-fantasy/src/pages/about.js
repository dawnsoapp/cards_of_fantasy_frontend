import React from "react";
import '../App.css';
import '../components/mininav.css';
import Mininav from '../components/mininav'


function About() {
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">About Me</p>
        </header>
        <div>
            <h1>Meet Dawn's Counterpart!</h1>
            <p>Hello, my name is Madison Jackson, creator of Cards of Fantasy!</p>
            <p>Great, I'll pick you up at 8.</p>
        </div>
        </div>
    )
};

export default About;