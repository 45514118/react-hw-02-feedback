import { StatList, StatListItem } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <StatList>
                <StatListItem key='1'>good: {good}</StatListItem>
                <StatListItem key='2'>neutral: {neutral}</StatListItem>
                <StatListItem key='3'>bad: {bad}</StatListItem>
                <StatListItem key='4'>total: {total}</StatListItem>
                <StatListItem key='5'>% of positive: {positivePercentage}</StatListItem>
            </StatList>
        </>
    )
}
