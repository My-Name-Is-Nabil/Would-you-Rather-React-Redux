import React from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';
class ComposeQuestion extends React.Component{
    state = {
        text1: '',
        text2: '',
    }
    handleForm = (e, optionOneText, optionTwoText, author) => {
        e.preventDefault();
        this.props.dispatch(handleAddQuestion( { optionOneText, optionTwoText, author }))
        .then(()=> {
            this.props.history.push('/');
        });
    }
    render(){
        return (
            <div className="compose-question">
                Would you rather
                <form onSubmit={e => this.handleForm(e, this.state.text1, this.state.text2, this.props.loggedUserId)}>
                    <input onChange={e => this.setState({text1: e.target.value,})} type="text" placeholder="Option 1" className="compose-question-option" name="optionOne" />
                    <br />
                    OR
                    <br />
                    <input onChange={e => this.setState({text2: e.target.value,})} type="text" placeholder="Option 2" className="compose-question-option" name="optionTwo" />
                    <br />
                    <button disabled={this.state.text1.length === 0 || this.state.text2.length === 0} className="compose-question__submit" type="submit"> Submit </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ loggedUserId }){
    return{ 
        loggedUserId,
    };
}

export default connect(mapStateToProps)(ComposeQuestion);