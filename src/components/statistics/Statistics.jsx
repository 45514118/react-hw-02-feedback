export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <ul>
                <li key='1'>good: {good}</li>
                <li key='2'>neutral: {neutral}</li>
                <li key='3'>bad: {bad}</li>
                <li key='4'>total: {total}</li>
                <li key='5'>positive %: {positivePercentage}</li>
            </ul>
        </>
    )
}
