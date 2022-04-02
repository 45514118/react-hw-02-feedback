export const Feedback = ({options}) => {
    return (
        <>
            Feedback......OK!
            <ul>
                {options.map(option => (
                    <li key={option}>
                        <button type='button' className={option}>{option}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}