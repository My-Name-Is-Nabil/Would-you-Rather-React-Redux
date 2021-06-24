function LeaderBoardUser(props){
    return (
        <div className="leaderboard__user">
            <img className="leaderboard__user__avatar" src={'http://' + props.user.avatarURL} alt='Avatar' />
            <div>
                <div className="leaderboard__user__info">
                    <p className="leaderboard-info-field"> Name: {props.user.name}</p>
                </div>
                <div className="leaderboard__user__scores">
                    <p className="leaderboard-info-field"> Number of questions answered: {Object.keys(props.user.answers).length}</p>
                    <p className="leaderboard-info-field"> Number of questions answered: {props.user.questions.length}</p>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoardUser;