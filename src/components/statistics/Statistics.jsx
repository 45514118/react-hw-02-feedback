import { StatList, StatListItem } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <StatList>
                <StatListItem key='1'>good feedbacks: {good}</StatListItem>
                <StatListItem key='2'>neutral feedbacks: {neutral}</StatListItem>
                <StatListItem key='3'>bad feedbacks: {bad}</StatListItem>
                <StatListItem key='4'>total feedbacks: {total}</StatListItem>
                <StatListItem key='5'>% of positive feedbacks: {positivePercentage}</StatListItem>
            </StatList>
        </>
    )
}
