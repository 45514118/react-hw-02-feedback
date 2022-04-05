import { ButtonList, ButtonListItem, Button } from './Feedback.styled'

export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <ButtonList>
                {options.map(option => (
                    <ButtonListItem key={option}>
                        <Button
                            type='button'
                            className={option}
                            onClick={() => onLeaveFeedback(option)}>
                        </Button>
                    </ButtonListItem>
                ))}
            </ButtonList>
        </>
    )
}   