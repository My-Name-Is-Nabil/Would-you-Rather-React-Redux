export default function Question(props){
    return (
        <div className="question">      
            <img className="question__author-avatar" src={'http://' + props.author.avatarURL} alt='Avatar' /> 
            <div className="question__info">
                <div> {props.author.name} asks: </div>
                <div> Would you rather, {props.optionOne.text} or {props.optionTwo.text} ?</div>
            </div>
        </div>
    );
}