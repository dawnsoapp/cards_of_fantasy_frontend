import React, { useState } from "react";
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Dawn() {

    const [username, setUsername] = useState("");
    const [currentPrompt, setCurrentPrompt] = useState(0);

    const dawn = "Dawn";
    // const user = username;

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
            text: "Hello " + (username) + "! It's so nice to meet you."
        },
        {
            storyPrompt: 0,
            speaker: dawn,
            user: username,
            text: "Would you like a tour around my room? Or would you like to venture outside for a bit?"
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

    const submitName = event => {
            setUsername(event.target.value);
            console.log(username);
        
        return username;
    }


    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Chat with Dawn!</p>
        </header>
        <p onClick={() => clickText()}>{story[newText].text}</p>
        <label>
            Name: <input 
            type="string" 
            name="username"
            onChange={submitName}
            value={username}/>
        <button onClick={clickText}>Submit</button>
        </label>
        

        
        <p>Your Name: {username}</p>
        </div>
        
    )
}

export default Dawn;