import React, { useState } from "react";
import './game.css'
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Game() {
    const [showTutorialScreen, setTutorialScreen] = useState(true);
    const [showCardInstructions, setCardInstructions] = useState(false)

    const startGame = () => {
        setTutorialScreen(false);
    }

    const cardInstructions = () => {
        setCardInstructions(true);
    }
    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Think Like an Astrologian!</p>
        </header>
        {showTutorialScreen ? (
            <div> 
            <h1>Think Like an Astrologian!</h1>
            <p>You are currently in a party running a dungeon as an Astrologian!
                Astrologians have a divining deck known as the Arcanum which 
                buffs their fellow players to do more damage! However, each 
                card benefits a specific class better than another! As an 
                Astrologian, it is up to you to know which card goes to which 
                class! Are you up for the task?
            </p>
            <button onClick={() => startGame()}>Start</button>
            <button onClick={() => cardInstructions()}>About the Cards</button>
            {showCardInstructions ? (
                <div>
                    <h2>How Cards Work</h2>
                    <p>Bole is blah, Spear is yah, Link says Hayah</p>
                    <button onClick={() => startGame()}>Okay!</button>
                </div>
                )
            :
            showTutorialScreen
        }
            </div>
        ) 
        :
        (<h1> Questions go here: </h1>)
        }
       
        {/* //BATTLE BOX

        //Question

        //Card

        //Choices

        //Show Results */}
        
        </div>
    )
}

export default Game;