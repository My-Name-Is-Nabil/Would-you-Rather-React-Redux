import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class Navbar extends React.Component{
    showUserOrLogin(loggedUser){
        if (loggedUser !== null){
            return (
                <div className="navbar__user">
                    <img className="navbar__user__avatar" src={'http://'+this.props.loggedUser.avatarURL} alt="Avatar"></img>
                    <span className="navbar__user__name"> { this.props.loggedUser.name } </span>
                </div>
            );
        }
        return <div className="navbar__user" style={{padding: '1em', marginLeft: '45%', color: '#444',}}> Login </div>
    }
    render(){
        const { loggedUser } = this.props;
        return (
            <div className="navbar">
                <ul className="navbar__ul">
                    <li className="navbar__ul__li">
                        <NavLink className="navbar-link" to='/' exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar__ul__li">
                        <NavLink className="navbar-link" to='/add' exact activeClassName="active">
                            New Question
                        </NavLink>
                    </li>
                    <li className="navbar__ul__li">
                        <NavLink className="navbar-link" to='/leaderboard' exact activeClassName="active">
                            LeaderBoard
                        </NavLink>
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