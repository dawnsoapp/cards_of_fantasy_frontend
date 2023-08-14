import React from "react";
import PropTypes from 'prop-types';

const handleUpvote = (id) => {

    const upvoteQuestion = (id) => {
    return axios
        .patch(`${URL}`)
        .then(res => console.log("Question upvoted!", res.data))
        .catch(err => console.log("Error in upvoting question!", err.message))
    }

    upvoteQuestion(id)
    }


const Question = ({id, user, message, upvoteCount, handleUpvote}) => {
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
    handleUpvote: PropTypes.func.isRequired
};

export default Question;

    

