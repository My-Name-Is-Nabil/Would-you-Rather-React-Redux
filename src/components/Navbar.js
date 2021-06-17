import React from 'react';
import { connect } from 'react-redux';
class Navbar extends React.Component{
    showUserOrLogin(loggedUser){
        if (loggedUser !== null){
        return (<div className="navbar__user">
                <img className="navbar__user__avatar" src={'http://'+this.props.loggedUser.avatarURL} alt="Avatar"></img>
                <span className="navbar__user__name"> { this.props.loggedUser.name } </span>
            </div>);
        }
        return <div className="navbar__user" style={{padding: '1em', marginLeft: '45%',}}> Login </div>
    }
    render(){
        const { loggedUser } = this.props;
        return (
            <div className="navbar">
                <ul className="navbar__ul">
                    <li className="navbar__ul__li">
                        Home
                    </li>
                    <li className="navbar__ul__li">
                        New questions
                    </li>
                    <li className="navbar__ul__li">
                        Leader Board
                    </li>
                </ul>
                {this.showUserOrLogin(loggedUser)}
            </div>
        );
    }
}

function mapStateToProps({ users, loggedUserId }){
    return {
        loggedUser: loggedUserId !== null ? users[loggedUserId] : null ,
    };
}
export default connect(mapStateToProps)(Navbar);