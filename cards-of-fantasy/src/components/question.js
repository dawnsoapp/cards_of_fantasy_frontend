import React from "react";
import PropTypes from 'prop-types';
import handleUpvote from '../pages/about' 




const Question = (props) => {
    const upvoteClick = () => handleUpvote();
    return (
        <li>
            <h2>Name:{props.user}</h2>
            <h3>Message:{props.message}</h3>
            <button onClick={upvoteClick}>{props.upvote}</button>
        </li>
    )
};

Question.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    upvote: PropTypes.number.isRequired
};

export default Question;
    

// postQuestion: PropTypes.func.isRequired,
// showQuestions: PropTypes.func.isRequired,
// handleUpvote: PropTypes.func.isRequired,