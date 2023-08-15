import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { REACT_APP_BACKEND_URL } from "./backend";

//POST
export const postQuestion = (user, message) => {
    return axios
    .post (
    `${REACT_APP_BACKEND_URL}/question/`, {"user": user, "message": message}, 
    )
    .then((response) => console.log("successful post!", response.data)) 
    .catch((e) => console.log("Error posting question!", e.message));

}
// GET
export const showQuestions = () => {
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
        return (response.data.map(convertQuestionFromAPI))
    })
    .catch((e) => console.log("error during showQuestions"))
}


//PATCH
const handleUpvote = (id) => {

    const upvoteQuestion = () => {
    return axios
        .patch(`${REACT_APP_BACKEND_URL}/question/<id>/`, {})
        .then(res => console.log("Question upvoted!", res.data))
        .catch(err => console.log("Error in upvoting question!", err.message))
    }

    upvoteQuestion()
    }


const Question = ({user, message, upvote}) => {
    const upvoteClick = () => handleUpvote();

    return (
        <div>
            <h2>Name:{user}</h2>
            <p>Message:{message}</p>
            <button onClick={upvoteClick}>{upvote}</button>
        </div>
    )
};

Question.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    upvote: PropTypes.number.isRequired,
    postQuestion: PropTypes.func.isRequired,
    showQuestions: PropTypes.func.isRequired,
    handleUpvote: PropTypes.func.isRequired,
};

export default Question;
    

