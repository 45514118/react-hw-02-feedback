import styled from '@emotion/styled'

export const ButtonList = styled.ul`
padding: 0;
list-style: none; 
display: flex;
flex-direction: row;
`;
export const ButtonListItem = styled.li`
margin: 0.5rem;
padding: 0;
`;
export const Button = styled.button`
margin: 1rem;
width: 4rem;
height: 4rem;
border: 0;
border-radius: 50%;
background-size: cover;
background-position: center;
&:hover {
    transform: scale(1.05)
}
&:active {
    transform: scale(0.95)
}
&.good {
    background-image: url(https://e.unicode-table.com/orig/4f/070ccbbb696c2975bb0da521c2ffc5.png);
}
&.neutral {
    background-image: url(https://e.unicode-table.com/orig/a3/00e6617ec150df17efa0114e6f712c.png);
}
&.bad {
    background-image: url(https://e.unicode-table.com/orig/80/864630847478ce2ab483c21c52d1a2.png);
}
`;