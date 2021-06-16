import React from 'react';
import { connect } from 'react-redux';
class User extends React.Component{
    render(){
        const users = this.props.users;
        const id = this.props.id;
        return (
            <div className="user">
                <img className="user__avatar" alt='Avatar' src={'http://'+users[id].avatarURL} />
                <div className="user__name"> {users[id].name} </div>
            </div>
        );
    }
}

function mapStateToProps({ users }){
    return {
        users,
    };
}

export default connect(mapStateToProps)(User);