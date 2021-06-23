import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { handleSetLoggedUserId } from '../actions/loggedUserId'; 
import { withRouter, Redirect } from 'react-router-dom';
class Login extends React.Component{
    logUserIn = (e, id) => {
        this.props.dispatch(handleSetLoggedUserId(id));
        this.props.history.push('/');
    };
    render(){
        if (this.props.loggedUser)
            return <Redirect to='/' />;
        const { isOpen, usersIds } = this.props;
        const logUserIn = this.logUserIn;
        return (
            <div className="login">
                <h3 className="login__title"> Choose a user to log in</h3>
                <button className="login__expand-button" onClick={this.handleClick}>
                    Choose a user
                    <AiOutlineArrowDown style={{position: 'relative', left:'28%', }} />
                </button>
                {   
                    (function(){
                    if(isOpen)
                        return (
                            <div>
                                { usersIds.map( id => <User onClick={e => logUserIn(e, id)} key={id} id={id} />) }
                            </div>
                        ) 
                    })()
                } 
            </div>
        )
    } 
}

function mapStateToProps({ users, loggedUserId }){
    return {
        usersIds: Object.keys(users),
        loggedUser: users[loggedUserId],
    };
}
export default withRouter(connect(mapStateToProps)(Login));