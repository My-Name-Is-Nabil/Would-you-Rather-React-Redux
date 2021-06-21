import React from 'react';
import Question from './Question';
import { handleReceiveQuestions } from '../actions/questions';
import { connect } from 'react-redux';
class Home extends React.Component{
    state = {
        showAnsweredQuestions: false,
    };
    showAnsweredQuestionsButton = React.createRef();
    showUnansweredQuestionsButton = React.createRef();
    componentDidMount(){
        this.props.dispatch(handleReceiveQuestions());
    }
    renderQuestions(){
        const { users, questions, loggedUser, questionsLoading } = this.props;
        if (this.state.showAnsweredQuestions){
            if (questionsLoading)
                return <p className="questions-loading"> Loading </p>;
            return this.props.questionsIds.map( id => questions[id])
            .filter( question => !loggedUser.answers[question.id])
            .map( question => <Question key={question.id} author={users[question.author]} optionOne={question.optionOne} optionTwo={question.optionTwo} />)
        }
        if (questionsLoading)
            return <p className="questions-loading"> Loading </p>;
        return this.props.questionsIds.map( id => questions[id])
        .filter( question => loggedUser.answers[question.id])
        .map( question => <Question key={question.id} author={users[question.author]} optionOne={question.optionOne} optionTwo={question.optionTwo} />);
    }
    showAnsweredQuestions = () => {
        this.setState({
            showAnsweredQuestions: true,
        }, () => {
            this.showAnsweredQuestionsButton.current.classList.add('active');
            this.showUnansweredQuestionsButton.current.classList.remove('active');
        });
    }
    showUnansweredQuestions = () => {
        this.setState({
            showAnsweredQuestions: false,
        }, () => {
            this.showAnsweredQuestionsButton.current.classList.remove('active');
            this.showUnansweredQuestionsButton.current.classList.add('active');
        });
    }
    render(){
        return(
            <div className="questions">
                <div className="questions-buttons">
                    <div ref={this.showUnansweredQuestionsButton} className="unanswered-questions-button active" onClick={this.showUnansweredQuestions}> Unanswered Questions</div>
                    <div ref={this.showAnsweredQuestionsButton} className="answered-questions-button" onClick={this.showAnsweredQuestions}> Answered Questions</div>
                </div>
                <div>
                    { 
                        this.renderQuestions()
                    }    
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, questionsLoading, users, loggedUserId }){
    return {
        questionsIds: Object.keys(questions),
        questions,
        questionsLoading,
        users,
        loggedUser: users[loggedUserId], 
    };
}

export default connect(mapStateToProps)(Home);