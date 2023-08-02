import React, { useState, useEffect } from "react";
import './dawn.css'
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Dawn() {
    
    const [username, setUsername] = useState("");
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [newText, setNewText] = useState(0);
    const [showNameBox, setNameBox] = useState(false);
    const [showChoiceBox, setChoiceBox] = useState(false);
    // useEffect(() => {user = username}, [username])

    const dawn = "Dawn";
    const user = username;
    const intro = "intro";
    const stay_inside = "stay_inside";
    const go_outside = "go_outside";

    let story = {
        "intro": [
            {   
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                text: "Hello there, my name is " + (dawn) + "! Dawn Soap. Not sponsored by the dishsoap, sadly! I'm a certified master of the Astrologian class."
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                text: "What's your name?"
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                text: "Player Choose Choice:"
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                user: username,
                text: "Hello " + (user) + "! It's so nice to meet you."
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                user: username,
                text: "So, " + (user) + " would you like a tour around my room? Or would you like to venture outside for a bit?"
            },
        ],
        "stay_inside": [
            {
                storyPrompt: 1,
                storyRoute: stay_inside,
                speaker: dawn,
                text: "So you would like to stay in? Same, the AC is pretty nice this time of year."
            },
            {
                storyPrompt: 1,
                storyRoute: stay_inside,
                speaker: dawn,
                text: "Are you interested in my globe? Isn't it cute!?"
            },
        ],
        "go_outside": [
            {
                storyPrompt: 2,
                storyRoute: go_outside,
                speaker: dawn,
                text: "Sounds great! Would love to get some air and touch grass."
            },
            {
                storyPrompt: 2,
                storyRoute: go_outside,
                speaker: dawn,
                text: "Limsa Lominsa! This is where all of it began for me. It's quite a lively hub!"
            }
        ],
        
    }

    let choices = [
        {
            options: [
                {id:0, text:"Stay Inside", route:1},
                {id:1, text:"Let's go outside!", route:2}
            ]
        },
        {
            options: [
                {id:0, text: "What does that orb do?", route: 3},
                {id:1, text: "How did you get it?", route: 5}
            ]
        },
        {
            options: [
                {id:0, text: "A tank...to a healer?", route: 4},
                {id:1, text: "What was being a warrior like?", route: 6}
            ]
        }
    ]

    const [currentRoute, setCurrentRoute] = useState(story["intro"]);

    const clickText = () => {
        if (currentRoute[newText].text === "What's your name?") {
            setNameBox(true);
        }else {
            setNameBox(false);
        }
        if ((newText + 1) >= currentRoute.length) {
            setChoiceBox(true);
        }

        if ((currentRoute[newText].storyPrompt) === currentPrompt) {
            setNewText(newText + 1)
            return currentRoute[newText].text;
        } 
    }

    const changeRoute = (route) => {
        if (route !== currentPrompt) {
            for(const obj of choices[currentPrompt].options) {
                if (route === obj.route) {
                    setCurrentPrompt(obj.route);
                    changeStory(obj.route);
                    setChoiceBox(false);
                }
            }
        }
    }
    
    const changeStory = (currentPrompt) => {
            for (const obj in story) {
                if (story[obj][0].storyPrompt === currentPrompt) {
                    setNewText(0);
                    setCurrentRoute(story[obj]);
                    return currentRoute
                }
            }
    }


    const submitName = event => {
            setUsername(event.target.value);
            console.log(event.target.value);
            return username;

    }


    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Chat with Dawn!</p>
        </header>
        <div>
        {showChoiceBox ? (
            <div className="chat">
            {choices[currentPrompt].options.map((option) => {
            return (
                <ul
                className="choice-box"
                key={option.id}
                onClick={() => changeRoute(option.route)}>
                {option.text}
                </ul>
            );
            })}
        </div>
        )
        :
        (
            <div>
                {showNameBox ? (
                <label>
                    Name: <input
                    type="string"
                    name="username"
                    onChange={submitName}
                    value={username}/>
                    <button onClick={clickText}>Submit</button>
                    <p>Your Name: {username}</p>
                </label>
        )
        :
        (
            <div className="chat">
                <h1 className="speaker-box">{dawn}</h1>
                <div className="text-box" onClick={() => clickText()}>
                <p>{currentRoute[newText].text}</p>
                </div>
            </div>
            
        )
        }</div>
        )
        }
        </div>

        </div>
    );
};

export default Dawn;