import React, { useState } from "react";
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Dawn() {
    
    const [username, setUsername] = useState("");
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [newText, setNewText] = useState(0);
    const [showTextBox, setTextBox] = useState(true);
    const [showNameBox, setNameBox] = useState(false);
    const [showChoiceBox, setChoiceBox] = useState(false);
    // const [selectChoice, setSelectChoice] = useState(0);

    const dawn = "Dawn";
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
                text: "Hello " + (username) + "! It's so nice to meet you."
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                text: "Would you like a tour around my room? Or would you like to venture outside for a bit?"
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

    let choices = {
            options: [
                {id:0, text:"Stay Inside", route:1},
                {id:1, text:"Let's go outside!", route:2}
            ]
        }

    const [currentRoute, setCurrentRoute] = useState(story["intro"]);

    const clickText = () => {
        if ((currentRoute[newText].storyPrompt) === currentPrompt) {
            setNewText(newText + 1)
            return currentRoute[newText].text;
        } else{
            changeRoute();
            // setNewText(newText + 1);
            // return currentRoute[newText].text
        }
    }

    const changeRoute = (route) => {
        if (route !== currentPrompt) {
            for(const obj of choices.options) {
                if (route === obj.route) {
                    // console.log("prompt: ", currentPrompt);
                    // console.log("route: ", currentRoute[newText].storyPrompt)
                    setCurrentPrompt(obj.route);
                    changeStory(currentPrompt);
                    return currentRoute[newText].text;
                }
            }
        }
    }
    
    const changeStory = (currentPrompt) => {
        if (currentPrompt !== currentRoute[newText].storyPrompt) {
            for (const obj in story) {
                if (story[obj][0].storyPrompt === currentPrompt) {
                    setNewText(0);
                    setCurrentRoute(story[obj]);
                    return currentRoute
                }
            }
        }
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
        <p onClick={() => clickText()}>{currentRoute[newText].text}</p>
        <label>
            Name: <input 
            type="string" 
            name="username"
            onChange={submitName}
            value={username}/>
        <button onClick={clickText}>Submit</button>
        </label>
        <p>Your Name: {username}</p>

        <ul>
        {choices.options.map((option) => {
          return (
            <li
              key={option.id}
              onClick={() => changeRoute(option.route)}>
              {option.text}
            </li>
          );
        })}
      </ul>

        </div>
        
    )
}

export default Dawn;