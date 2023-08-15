import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { REACT_APP_BACKEND_URL } from "./backend";

//POST
export const postQuestion = (user, message) => {
    return axios
    .post(`${REACT_APP_BACKEND_URL}/question/`, {"user": user, "message": message}, 
    // {
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }
    // }
    )

}




//PATCH
const handleUpvote = (id) => {

    const upvoteQuestion = () => {
    return axios
        .patch(`${REACT_APP_BACKEND_URL}/question`)
        .then(res => console.log("Question upvoted!", res.data))
        .catch(err => console.log("Error in upvoting question!", err.message))
    }

    upvoteQuestion()
    }


const Question = ({id, user, message, upvoteCount}) => {
    const upvoteClick = () => handleUpvote(id);

    return (
        <div>
            <p>{user}</p>
            <p>{message}</p>
            <p count={upvoteCount} handleUpvote={upvoteClick}/>
        </div>
    )
};

Question.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    upvoteCount: PropTypes.number.isRequired,
};

export default Question;

    

