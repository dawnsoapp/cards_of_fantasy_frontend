import React, { useState } from "react";
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Dawn() {

    const [username, setUsername] = useState("");
    const [currentPrompt, setCurrentPrompt] = useState(0);

    const dawn = "Dawn";
    const user = username;

    let story = [
        {   
            storyPrompt: 0,
            speaker: dawn,
            user: username,
            text: "Hello there! My name is Dawn! Dawn Soap. Not sponsored by the dishsoap by the way! I'm a certified master of the Astrologian class."
        },
        {
            storyPrompt: 0,
            speaker: dawn,
            user: username,
            text: "What's your name?"
        },
        {
            storyPrompt: 0,
            speaker: dawn,
            user: username,
            text: "Hello" + {user} + " !"
        }
    ]
    const [newText, setNewText] = useState(0)
// const [optionsCurrentPrompt, setOptionsCurrentPrompt] = useState(0);

    const clickText = () => {
        if ((story[newText].storyPrompt) === currentPrompt) {
            setNewText(newText + 1);
            return story[newText].text;
        };
    }

    const submitName = () => {
        if (user) {
            setUsername(user);
        }
        
        return console.log(username);
    }


    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Chat with Dawn!</p>
        </header>
        <p onClick={() => clickText()}>{story[newText].text}</p>
        <label>
            Name: <input name={user} type="string"/>
        </label>
        <button onClick={submitName}>Submit</button>
        <p>Your Name: {username}</p>
        </div>
        
    )
}

export default Dawn;