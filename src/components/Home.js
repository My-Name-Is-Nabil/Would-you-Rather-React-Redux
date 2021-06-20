import React from 'react';
import Question from './Question';
import { handleReceiveQuestions } from '../actions/questions';
import { connect } from 'react-redux';
class Home extends React.Component{
    componentDidMount(){
        this.props.dispatch(handleReceiveQuestions());
    };
    render(){
        const questions = this.props.questions;
        const users = this.props.users;
        return(
            <div>
                { this.props.questionsIds.map( id => <Question author={users[questions[id].author]} optionOne={questions[id].optionOne} optionTwo={questions[id].optionTwo} />)}
            </div>
        )
    }
}

function mapStateToProps({ questions, users }){
    return {
        questionsIds: Object.keys(questions),
        questions,
        users,
    };
}
export default connect(mapStateToProps)(Home);