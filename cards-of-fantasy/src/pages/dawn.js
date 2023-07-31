import React, { useState } from "react";
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Dawn() {
    
    const [username, setUsername] = useState("");
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [newText, setNewText] = useState(0);
    const [selectChoice, setSelectChoice] = useState(0);

    const dawn = "Dawn";

    let story = [
        {   
            storyPrompt: 0,
            speaker: dawn,
            text: "Hello there, my name is " + (dawn) + "! Dawn Soap. Not sponsored by the dishsoap, sadly! I'm a certified master of the Astrologian class."
        },
        {
            storyPrompt: 0,
            speaker: dawn,
            text: "What's your name?"
        },
        {
            storyPrompt: 0,
            speaker: dawn,
            text: "Hello " + (username) + "! It's so nice to meet you."
        },
        {
            storyPrompt: 0,
            speaker: dawn,
            text: "Would you like a tour around my room? Or would you like to venture outside for a bit?"
        },
        {
            storyPrompt: 1,
            speaker: dawn,
            text: "So you would like to stay in? Same, the AC is pretty nice this time of year."
        },
        {
            storyPrompt: 1,
            speaker: dawn,
            text: "Are you interested in my globe? Isn't it cute!?"
        },
        {
            storyPrompt: 2,
            speaker: dawn,
            text: "Sounds great! Would love to get some air and touch grass."
        }
    ]

    let choices = {
            options: [
                {id:0, text:"Stay Inside", route:1},
                {id:1, text:"Let's go outside!", route:2}
            ]
        }



    const clickText = () => {
        if ((story[newText].storyPrompt) === currentPrompt) {
            console.log('text before state update:', newText)
            setNewText(newText + 1)
            return story[newText].text;
        } else{
            changeRoute();
        }
    }

    const changeRoute = (route) => {
        if (currentPrompt !== route) {
            for(const obj of choices.options) {
                if (route === obj.route){
                    setCurrentPrompt(route);
                    setSelectChoice(route);
                    for(const item of story) {
                        if (item.storyPrompt === currentPrompt){
                            setNewText(newText)
                            return story[newText].text;
                        }
                    }
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