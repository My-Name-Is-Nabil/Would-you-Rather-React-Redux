import React from 'react';
import LeaderBoardUser from './LeaderBoardUser';
import { connect } from 'react-redux';
class LeaderBoard extends React.Component{
    render(){
        const users = this.props.users;
        users.sort((a,b) => Object.keys(b.answers).length + b.questions.length - Object.keys(a.answers).length - a.questions.length );
        return (
            <div className="leaderboard">
            {
                users.map(user => <LeaderBoardUser key={user.id} user={user} />)
            }
            </div>
        );
    }
}

function mapStateToProps({ users }){
    return {
        users: Object.keys(users).map( id => users[id]),
    };
}
export default connect(mapStateToProps)(LeaderBoard);