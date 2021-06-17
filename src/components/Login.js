import React from 'react';
import User from './User';
import { handleReceiveUsers } from '../actions/users';
import { connect } from 'react-redux';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { handleSetLoggedUserId } from '../actions/loggedUserId'; 
class Login extends React.Component{
    componentDidMount() {
        this.props.dispatch(handleReceiveUsers());
    };
    logUserIn = (e, id) => {
        console.log(id);
        this.props.dispatch(handleSetLoggedUserId(id));
    };
    render(){
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

function mapStateToProps({ users }){
    return {
        usersIds: Object.keys(users),
    }
}
export default connect(mapStateToProps)(Login);