export const Feedback = ({options, onLeaveFeedback}) => {
    return (
        <>
            Feedback......OK!
            <ul>
                {options.map(option => (
                    <li key={option}>
                        <button
                            type='button'
                            className={option}
                            onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}   