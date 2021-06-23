export default function PercentageBar(props){
    return (
        <div className="percentage-bar">
            <div className="percentage-bar__highlight" style={{width: `${props.percentage}%`,}}>
        
            </div>
        </div>
    );
}