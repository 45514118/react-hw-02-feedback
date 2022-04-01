const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        Good: {good}
        Neutral: {neutral}
        Bad: {bad}
        Total: {total}
        Positive feedback: {positivePercentage} % 
    </>
)
export default Statistics