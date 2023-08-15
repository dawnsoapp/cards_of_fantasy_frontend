import React, { useState, useEffect } from "react";
import './about.css';
import '../components/mininav.css';
import Mininav from '../components/mininav'
import Madi from '../imgs/Madi.JPG';
import Question, { postQuestion, showQuestions } from "../components/question";
import QuestionList from "../components/questionList";



function About() {
    const defaultEmptyList = [{
        id: 0,
        user: '',
        message: '',
        upvote: 0
    }]
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("")
    const [questions, setQuestions] = useState(defaultEmptyList)


    const changeUser = (event) => {
        setUser(event.target.value)
    }   
    const changeMessage = (event) => {
        setMessage(event.target.value)
    }   

    return (
        <div className="App">
        <header className="Page-header">
        <Mininav />
        <p className="game-title">About Me</p>
        </header>
        <main>
            <div className="meet-me">
                <h1>Meet Dawn's Counterpart!</h1>
                <p>Hello, my name is Madison Jackson, creator of Cards of Fantasy!</p>
                <img src={Madi} className="image-box" alt=""/>
                <p>With little to no experience in code, I joined Ada Developers Academy's bootcamp and powered through learning
                    python, javascript, react, SQL, flask, django, rest APIs galore! It has been a challenging but gratifying
                    experience that has allowed me to make web pages like this from scratch. I plan on tinkering this page the more
                    I learn and improve in code via frontend and backend to see how far I've come. Thank you for stopping by and 
                    checking out this page! Expect updates in the future!
                </p>
            </div>
            <div className="meet-me">
                <h1>Question Board</h1>
                <p>Upvote on questions people submit if you'd like to hear an answer as well!</p>
                <div>
                    <QuestionList entries={questions}
                    showQuestions={showQuestions}
                    />
                </div>
            </div>
        </main>
        <main>
            <div className="submit-box">
                <h2>Want to learn more about Dawn or see new features? Drop a question here!</h2>
                <form onSubmit={() => postQuestion(user, message)}>
                <label>
                    Name: <input
                    type="string"
                    name="user"
                    onChange={changeUser}
                    value={user}
                    />
                    Question: <input
                    type="string"
                    name="message"
                    onChange={changeMessage}
                    value={message}
                    />
                    <button>Submit</button>
                </label>
                </form>
            </div>
        </main>
        </div>
    )
};

export default About;