import React, { useState } from "react";
import './dawn.css'
import '../components/mininav.css';
import * as prompts from '../data/prompt.js';
import Mininav from '../components/mininav'



function Dawn() {
    const [chat, setChat] = useState(prompts.intro1)

    const clickText = () => {
        setChat(prompts[chat.next])
        console.log(chat)
    }

    const changeRoute = (newRoute) => {
        setChat(prompts[newRoute])
    }


    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">Chat with Dawn!</p>
        </header>
        <div>
        <img className="dawn-sprite" src={chat.sprite} alt=""/>
        {chat.option.length > 0 ? (
            <div className="chat">
            {chat.option.map((option) => {
            return (
                <ul
                className="choice-box"
                key={option.id}
                onClick={() => changeRoute(option.next)}>
                {option.text}
                </ul>
            );
            })}
        </div>
        )
        :
        (
            <div className="chat">
                <h1 className="speaker-box">{chat.speaker}</h1>
                <div className="text-box" onClick={() => clickText()}>
                <p>{chat.text}</p>
                </div>
            </div>
        
        )
        }
        </div>

        </div>
    );
};

export default Dawn;