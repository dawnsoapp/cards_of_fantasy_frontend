import React, { useState } from "react";
import './game.css'
import '../components/mininav.css';
import '../components/timer.js';
import Mininav from '../components/mininav'
import meleedps from '../imgs/meleedps.png';
import casterdps from '../imgs/casterdps.png';
import tank from '../imgs/tank.png';
import monster from '../imgs/monster.png';
import dawnhome from '../imgs/dawnhome.png';


function Game() {
    //Properties
    const [showTutorialScreen, setTutorialScreen] = useState(true);
    const [showCardInstructions, setCardInstructions] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showFinalScore, setShowFinalScore] = useState(false)
    const [user, setUser] = useState("")
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

    const restartGame = () => {
            setScore(0);
            setCurrentQuestion(0);
            setShowFinalScore(false);
          };
    
    const changeUser = (event) => {
        setUser(event.target.value)
        }  


    return (
        <div className="Game-App">
        <header className="Page-header">
        <Mininav />
        </header>
        {/* FINAL SCORE */}
        {showFinalScore ? (
        <div className="final-score"> 
          <h1>Final Score</h1>
          <h2>
            {score} out of {questions.length} correct!
          </h2>
          <h3>
          Name:<input
          type="string"
          name="user"
          onChange={changeUser}
          value={user}
          />
          </h3>
          <button onClick={() => restartGame()}>Play Again?</button>
        </div>
        ) 
        : 
        (
        // TUTORIAL SCREEN
        <div className="Game-App">
        {showTutorialScreen ? (
        <div className="tutorial-screen"> 
        <h1 className="title-screen">Think Like an Astrologian!</h1>
        <img className="game-image" src={dawnhome} alt=""/>
        <p className="instructions">You are currently in a party running a dungeon as an Astrologian!
            Astrologians have a divining deck known as the Arcanum which 
            buffs their fellow players to do more damage! However, each 
            card benefits a specific class better than another! As an 
            Astrologian, it is up to you to know which card goes to which 
            class! Are you up for the task?
        </p>
        <button className="start-button" onClick={() => startGame()}>Start</button>
        <button className="card-button" onClick={() => cardInstructions()}>About the Cards</button>

        {/* ABOUT CARDS */}
        {showCardInstructions ? (
            <div className="card-instructions">
                <h2>How Cards Work</h2>
                <p>Magic Cards: Ewer, Spire and Bole
                <li>These will strengthen Casters & Healers!</li>
                Physical Cards: Spear, Arrow and Balance
                <li>These will strengthen DPS & Tanks!</li>
                </p>
            </div>
            ) 
            : 
        (showTutorialScreen)
        }
        </div>
    ) 
    :
    (
        // THE GAME
    <div>
    <div className="battle-box">
        <img className="caster" src={casterdps} alt=""/>
        <img className="melee" src={meleedps} alt=""/>
        <img className="tank" src={tank} alt=""/>
        <img className="monster" src={monster} alt=""/>
    </div>
    <p className="score">Score: {score}</p>
    <h3 className="card">{questions[currentQuestion].card}</h3>
    <h4 className="text">{questions[currentQuestion].text}</h4>
    <ul className="question-box">
        {questions[currentQuestion].options.map((option) => {
          return (
            <li className="option-boxes"
              key={option.id}
              onClick={() => optionClicked(option.isCorrect)}
            >
              {option.text}
            </li>
          );
        })}
      </ul>
    </div>
    )}
    </div>
    )}

        
        
        </div>
    )
}

export default Game;