import React from 'react';
import { connect } from 'react-redux';
class Navbar extends React.Component{
    render(){
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
                { this.props.loggedUser !== null &&
                    (<div className="navbar__user">
                        <img className="navbar__user__avatar" src={this.props.loggedUser.avatarURL}></img>
                        <span className="navbar__user__name"> { this.props.loggedUser.name } </span>
                    </div>
                    )
                }
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