import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Navbar extends React.Component{
    showUserOrLogin(loggedUser){
        if (loggedUser !== null){
        return (<div className="navbar__user">
                <img className="navbar__user__avatar" src={'http://'+this.props.loggedUser.avatarURL} alt="Avatar"></img>
                <span className="navbar__user__name"> { this.props.loggedUser.name } </span>
            </div>);
        }
        return <div className="navbar__user" style={{padding: '1em', marginLeft: '45%', color: '#444',}}> Login </div>
    }
    render(){
        const { loggedUser } = this.props;
        return (
            <div className="navbar">
                <ul className="navbar__ul">
                    <Link to='/'>
                        <li className="navbar__ul__li">
                            Home
                        </li>
                    </Link>
                    <Link to='/questions'>
                        <li className="navbar__ul__li">
                            New Questions
                        </li>
                    </Link>
                    <Link to='/leaderboard'>
                        <li className="navbar__ul__li">
                            Leader Board
                        </li>
                    </Link>
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