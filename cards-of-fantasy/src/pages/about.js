import React, { useState } from "react";
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
        </div>
    )
};

export default About;