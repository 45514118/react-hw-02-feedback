const Feedback = ({options, onLeaveFeedback}) => {
    
    return (
        <ul>
            {options.map(option => (
                <button type="button" key={option} onClick={() => onLeaveFeedback()}>{option}</button>
            )
            )}
        </ul>
    )
}
export default Feedback