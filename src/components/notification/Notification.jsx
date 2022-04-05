import {Notify, Title} from './Notification.styled'

export const Notification = ({ message }) => {
    return (
        <Notify>
            <Title>{message}</Title>
        </Notify>
    )
}