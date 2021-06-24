import React from 'react';
import PercentageBar from './PercentageBar';
import { connect } from 'react-redux';
import { handleUpdateQuestionAnswer } from '../actions/questions'
class QuestionPage extends React.Component{
    state = {
        answered: this.isAnswered(),
    }
    isAnswered() {
        const { questions, loggedUserId } = this.props;
        const questionId = this.props.match.params.id;
        const question = questions[questionId];
        if (!question)
            return false;
        return question.optionOne.votes.includes(loggedUserId) || question.optionTwo.votes.includes(loggedUserId);
    }
    handleForm(e, questionId){
        e.preventDefault();
        const { loggedUserId } = this.props;
        // Better way ?
        const radios = document.getElementsByName('option');
        let answer;
        for(let i = 0;i < radios.length; i++){
            if (radios[i].checked){
                answer = radios[i].value;
                break;
            }
        }
        this.props.dispatch(handleUpdateQuestionAnswer({ loggedUserId, questionId, answer }))
        .then(() => {
            this.setState({
                answered: true,
            }, () => console.log('State Changed'));
        });
    }
    renderQuestionForm(){
        const { questions, loggedUserId } = this.props;
        const questionId = this.props.match.params.id;
        const question = questions[questionId];
        if (!this.isAnswered())
            return (
                <form onSubmit={ e => this.handleForm(e, questionId)} className="question-form">
                    <input type="radio" id="optionOne" name="option" value="optionOne" />
                    <label htmlFor="optionOne">{question.optionOne.text}</label><br />
                    <input type="radio" id="optionTwo" name="option" value="optionTwo" />
                    <label htmlFor="optionTwo">{question.optionTwo.text}</label><br />
                    <button className="question-form__submit" type="submit"> Submit </button>
                </form>
            );
        else {
            const total = question.optionOne.votes.length + question.optionTwo.votes.length;
            let userAnswer;
            if(question.optionOne.votes.includes(loggedUserId))
                userAnswer = 1;
            else 
                userAnswer = 2;
            let option1 =  Math.round(question.optionOne.votes.length * 100 / total) + '% ' + question.optionOne.text;
            let option2 =  Math.round(question.optionTwo.votes.length * 100 / total) + '% ' + question.optionTwo.text;
            option1 = userAnswer === 1 ? option1 + ' (your answer)' : option1;
            option2 = userAnswer === 2 ? option2 + ' (your answer)' : option2; 
            return (
                <div className="question-answer-percentage">
                    <h3 className="question-answer-percentage-results"> Results: </h3>
                    <p> {option1} </p>
                    <p style={{margin: '0.5em 0'}}> {question.optionOne.votes.length} of {total} Votes </p>
                    <PercentageBar percentage={question.optionOne.votes.length * 100 / total} />
                    <p> {option2} </p>
                    <p style={{margin: '0.5em 0'}}> {question.optionTwo.votes.length} of {total} Votes </p>
                    <PercentageBar percentage={question.optionTwo.votes.length * 100 / total} />    
                </div>
            );
        }
    }
    render(){
        const { users, questions } = this.props;
        const questionId = this.props.match.params.id;
        const question = questions[questionId];
        if (!question)
            return <p className="question-not-found"> Question not found!</p>
        const author = users[question.author];
        return (
            <div className="question">      
                <img className="question__author-avatar question-page" src={'http://' + author.avatarURL} alt='Avatar' /> 
                <div className="question__info">
                    <div style={{margin: '0.3em 0'}}> {author.name} asks: </div>
                    <div style={{margin: '0.3em 0'}}> Would you rather </div>
                    {
                        this.renderQuestionForm()
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users ,questions, loggedUserId }){
    return {
        users,
        questions,
        loggedUserId,
    };
}

export default connect(mapStateToProps)(QuestionPage);