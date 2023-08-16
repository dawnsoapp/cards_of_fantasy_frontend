import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';


const QuestionList = (props) => {
        return (
        <section>
            <ul>
            {props.entries.map((question) => {
                return(
                <Question
                id = {question.id}
                user = {question.user}
                message = {question.message}
                upvote = {question.upvote}
                />
                )
                
            })
        }
            </ul>
            </section>
        )};


    QuestionList.propTypes = {
        entries: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                user: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired,
                upvote: PropTypes.number.isRequired
            })
        ),

    }

export default QuestionList;

// postQuestion: PropTypes.func.isRequired,
// showQuestions: PropTypes.func.isRequired,
// handleUpvote: PropTypes.func.isRequired,