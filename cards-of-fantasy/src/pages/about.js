import React, { useState } from "react";
import axios from 'axios';
import { REACT_APP_BACKEND_URL } from "../components/backend";
import './about.css';
import '../components/mininav.css';
import Mininav from '../components/mininav'
import Madi from '../imgs/Madi.JPG';
import QuestionList from "../components/questionList";
// import Question from "../components/question";

function About() {
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("")
    // const [upvote, setUpvote] = useState(0)
    const [questions, setQuestions] = useState([])

    //GET
    const showQuestions = () => {
        const convertQuestionFromAPI = (data) => {
            return {
                user: data.user,
                message: data.message,
                upvote: data.upvote
            };
        };
        return axios
        .get(`${REACT_APP_BACKEND_URL}/question/`)
        .then((response) => {
            console.log("Successfully opened backend")
            setQuestions(response.data)
            console.log(response.data)
            return (response.data.map(convertQuestionFromAPI))
        })
        .catch((e) => console.log("error during showQuestions"))
    }
    
    //POST
    const postQuestion = (user, message) => {
        return axios
        .post (
        `${REACT_APP_BACKEND_URL}/question/`, {"user": user, "message": message}, 
        )
        .then((response) => console.log("successful post!", response.data)) 
        .catch((e) => console.log("Error posting question!", e.message));

    }

    //PATCH
    // const handleUpvote = (id) => {

        const upvoteQuestion = () => {
        return axios
            .patch(`${REACT_APP_BACKEND_URL}/question/<id>/`)
            .then(res => console.log("Question upvoted!", res.data))
            .catch(err => console.log("Error in upvoting question!", err.message))
        }

        upvoteQuestion()
        // }

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
                <p onClick={showQuestions}>Upvote on questions people submit if you'd like to hear an answer as well!</p>
                <div>
                    <h2> Under Construction!</h2>
                    <p>Feature will be displayed in next update!</p>
                    <QuestionList
                    entries={questions}
                    key={questions.id}
                    >
                    {questions}
                    </QuestionList>
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