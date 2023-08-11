import React, { useState } from "react";
import './dawn.css'
import '../components/mininav.css';
import Mininav from '../components/mininav'


function Dawn() {
    
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [newText, setNewText] = useState(0);
    const [showChoiceBox, setChoiceBox] = useState(false);

    const dawn = "Dawn";
    const intro = "intro";
    const stay_inside = "stay_inside";
    const go_outside = "go_outside";
    const ishgard = "ishgard";
    const uldah = "uldah";


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
                text: "You look like you're new here...? Are you looking to become a healer, too? Or...no!"
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                text: "You're here for a tour! Sorry, I can be quite forgetful. 'Tour Guide' was in my resume, after all."
            },
            {
                storyPrompt: 0,
                storyRoute: intro,
                speaker: dawn,
                text: "So, would you like a tour around my room? Or would you like to venture outside for a bit?"
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
                text: "Although, living in Ishgard, I'd say it's not too bad compared to Ul'dah."
            },
            {
                storyPrompt: 1,
                storyRoute: stay_inside,
                speaker: dawn,
                text: "Hm? You don't know what those places are? Which one would you like me to talk about?"
            }
        ],
            "ishgard": [
                {
                    storyPrompt: 3,
                    storyRoute: ishgard,
                    speaker: dawn,
                    text: "My humble abode! The Holy See of Ishgard is a city-state that rests in the snowy mountains alongside Dravania, home of the dragons."
                },
                {
                    storyPrompt: 3,
                    storyRoute: ishgard,
                    speaker: dawn,
                    text: "Weather is pretty much chilly all year-round. Snow storms and hail galore! Although during the summer, it's not too bad. Quite beautiful actually."
                },
                {
                    storyPrompt: 3,
                    storyRoute: ishgard,
                    speaker: dawn,
                    text: "Not long ago, Ishgard was actually at war with the dragons. They have special squadrons under the class 'Dragoons' that helped fight to protect their city."
                },
                {
                    storyPrompt: 3,
                    storyRoute: ishgard,
                    speaker: dawn,
                    text: "Why, I have a great friend who was actually one of Ishgard's best! His name is Estinien."
                },
                {
                    storyPrompt: 3,
                    storyRoute: ishgard,
                    speaker: dawn,
                    text: "He's rough around the edges, but once you get to know him, he's quite the sassy comrade. I'm sure you'd love to meet him."
                },
                {
                    storyPrompt: 3,
                    storyRoute: ishgard,
                    speaker: dawn,
                    text: "But enough about that, you asked to see my room! Anything in here that piques your interest?"
                },

            ],
            "uldah": [
                {   
                    storyPrompt: 5,
                    storyRoute: uldah,
                    speaker: dawn,
                    text: "Don't even get me started."
                },
                {   
                    storyPrompt: 5,
                    storyRoute: uldah,
                    speaker: dawn,
                    text: "It's in the middle of the DESERT."
                },
                {   
                    storyPrompt: 5,
                    storyRoute: uldah,
                    speaker: dawn,
                    text: "Wayyy too hot for me and my fur. But it's one of the wealthiest city-states in Eorzea, so they do be collecting that check."
                },
                {   
                    storyPrompt: 5,
                    storyRoute: uldah,
                    speaker: dawn,
                    text: "They said their rent was due. But they should really invest in some kind of housing fan system to keep their citizens cool."
                },
                {   
                    storyPrompt: 5,
                    storyRoute: uldah,
                    speaker: dawn,
                    text: "There were times I thought I'd collapse from heat stroke, especially if I wore armor."
                },
                {
                    storyPrompt: 5,
                    storyRoute: uldah,
                    speaker: dawn,
                    text: "But enough about that, you asked to see my room! Anything in here that piques your interest?"
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
            },
            {
                storyPrompt: 2,
                storyRoute: go_outside,
                speaker: dawn,
                text: "I miss the good old days of swinging a rusty axe around in my tattered, weird-looking gear."
            },
            {
                storyPrompt: 2,
                storyRoute: go_outside,
                speaker: dawn,
                text: "Actually, scratch that on the gear. I looked absolutely dreadful in those garbs."
            },
            {
                storyPrompt: 2,
                storyRoute: go_outside,
                speaker: dawn,
                text: "Glamours were so hard to obtain back in those days. But as a maurauder, I guess you needn't worry about such things."
            },
            {
                storyPrompt: 2,
                storyRoute: go_outside,
                speaker: dawn,
                text: "Warrior was plenty of fun though! A great introductory to the tank class, in my opinion."
            },
        ],

        
    }

    let choices = {

        "choiceroot": {
            options: [
                {id:0, text:"Stay Inside", route:1},
                {id:1, text:"Let's go outside!", route:2}
            ]
        },
        "stay1": {
            options: [
                {id:0, text: "Tell me about this place, Ishgard.", route: 3},
                {id:1, text: "How hot is it in Ul'dah...?", route: 5}
            ]
        },
        "out1": {
            options: [
                {id:0, text: "A tank...to a healer?", route: 4},
                {id:1, text: "What was being a warrior like?", route: 6}
            ]
        },
        "stay2": {
            options: [
                {id:0, text: "That sparkly globe you have...", route: 7},
                {id:1, text: "Why do you have a statue in your room-", route: 9},
                {id:2, text: "Cute plushie collection!", route: 11}
            ]
        },
    }

    const [currentRoute, setCurrentRoute] = useState(story["intro"]);
    const [currentOption, setCurrentOption] = useState(choices["choiceroot"]);
    const [options, setOptions] = useState(currentOption["options"]);

    const clickText = () => {
        if ((newText + 1) >= currentRoute.length) {
            setChoiceBox(true);
        }

        if ((currentRoute[newText].storyPrompt) === currentPrompt) {
            setNewText(newText + 1)
            return currentRoute[newText].text;
        } 
    }

    const changeRoute = (newRoute) => {
        if (newRoute !== currentPrompt) {
            for(const obj in choices) {
                console.log("current prompt: ", currentPrompt);
                for (const options in choices[obj]){
                    // console.log(choices[obj][options]);
                    for (const root of choices[obj][options]){
                        console.log(root.route);
                        console.log("newRoute: ", newRoute);
                        if (root.route === newRoute) {
                            console.log(choices[obj]);
                            setCurrentPrompt(root.route);
                            setCurrentOption(choices[obj]);
                            setOptions(currentOption["options"]);
                            changeStory(root.route);
                            setChoiceBox(false);
                    }
                    }
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



    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Chat with Dawn!</p>
        </header>
        <div>
        {showChoiceBox ? (
            <div className="chat">
            {currentOption.options.map((option) => {
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
            <div className="chat">
                <h1 className="speaker-box">{currentRoute[newText].speaker}</h1>
                <div className="text-box" onClick={() => clickText()}>
                <p>{currentRoute[newText].text}</p>
                </div>
            </div>
        
        )
        }
        </div>

        </div>
    );
};

export default Dawn;