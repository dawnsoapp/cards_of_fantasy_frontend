import React, { useState } from "react";
import './game.css'
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Game() {
    //Properties
    const [showTutorialScreen, setTutorialScreen] = useState(true);
    const [showCardInstructions, setCardInstructions] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showFinalScore, setShowFinalScore] = useState(false)
    const questions = [
        {
            card: "The Bole",
            text: "Which role should receive this card?",
            options: [
            {id:0, text: "TANK", isCorrect: false},
            {id:1, text: "MELEE", isCorrect: false},
            {id:2, text: "CASTER", isCorrect: true},
            {id:3, text: "YOURSELF", isCorrect: false},
            ]
        },
        {
            card: "The Balance",
            text: "Which role should receive this card?",
            options: [
            {id:0, text: "TANK", isCorrect: false},
            {id:1, text: "MELEE", isCorrect: true},
            {id:2, text: "CASTER", isCorrect: false},
            {id:3, text: "YOURSELF", isCorrect: false},
            ]
        },
        {
            card: "The Ewer",
            text: "Which role should receive this card?",
            options: [
            {id:0, text: "TANK", isCorrect: false},
            {id:1, text: "MELEE", isCorrect: false},
            {id:2, text: "MELEE", isCorrect: false},
            {id:3, text: "YOURSELF", isCorrect: true},
            ]
        },
        {
            card: "The Spear",
            text: "Which role should receive this card?",
            options: [
            {id:0, text: "TANK", isCorrect: true},
            {id:1, text: "CASTER", isCorrect: false},
            {id:2, text: "CASTER", isCorrect: false},
            {id:3, text: "YOURSELF", isCorrect: false},
            ]
        },
        {
            card: "The Arrow",
            text: "Oh no, the MELEE DC'd! Which role should receive this card?",
            options: [
            {id:0, text: "TANK", isCorrect: true},
            {id:1, text: "MELEE", isCorrect: false},
            {id:2, text: "CASTER", isCorrect: false},
            {id:3, text: "YOURSELF", isCorrect: false},
            ]
        },
        {
            card: "The Spire",
            text: "The MELEE is resetting their router! Which role should receive this card?",
            options: [
            {id:0, text: "TANK", isCorrect: false},
            {id:1, text: "MELEE", isCorrect: false},
            {id:2, text: "CASTER", isCorrect: true},
            {id:3, text: "YOURSELF", isCorrect: false},
            ]
        }
    ]

    //Helper Functions
    const startGame = () => {
        setTutorialScreen(false);
    }

    const cardInstructions = () => {
        setCardInstructions(true);
    }

    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
          setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setShowFinalScore(true);
          }
        };


    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Cards of Fantasy</p>
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
                </div>
                ) 
                : showTutorialScreen
            }
            </div>
        ) 
        :
        (
        <div>
        <h3>Score: {score}</h3>
        <h4>{questions[currentQuestion].card}</h4>
        <h5>{questions[currentQuestion].text}</h5>
        <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
        )
        }
        
        </div>
    )
}

export default Game;