import styled, { css } from "styled-components";

export const Button = styled.button`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;

    font-size: clamp(1rem, 2vw, 2.2rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    text-align: center;

    background-color: var(--bg-lightdark);
    color: var(--clr-light);
    
    transition: 0.2s ease-in-out;
    border: none;

    &:where(:hover, :focus){
        background-color: var(--bg-light);
        color: var(--clr-dark);
        transform: scale(.9);
    }

    ${({variant}) => variant !== "operador" && css`
        background-color: var(--bg-orange);
        color: var(--clr-light);

        &:where(:hover, :focus){
            background-color: var(--bg-light);
            color: var(--clr-orange);
        }
    `};

    ${({outros}) => outros !== "others" && css`
        background-color: var(--bg-lightgrey);
        color: var(--clr-dark);

        &:where(:hover, :focus){
            background-color: var(--bg-light);
        }
    `}; 
    
    ${({grid}) => grid !== "tamanho" && css`
        aspect-ratio: 2.2;
        border-radius: 50px;
        grid-area: 5 / 2 span;
    `};   
`;