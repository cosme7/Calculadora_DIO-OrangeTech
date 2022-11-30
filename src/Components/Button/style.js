import styled, { css } from "styled-components";

export const Button = styled.button`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    outline: 2px solid var(--bg-light);

    font-size: clamp(1.2rem, 2vw, 2.2rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    text-align: center;

    background-color: var(--bg-lightdark);
    color: var(--clr-light);
    
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: none;

    &:where(:hover, :focus){
        outline-offset: 8px;
        background-color: var(--bg-light);
        color: var(--clr-dark);
        transform: scale(.85);
    }

    ${({variant}) => variant !== "operator" && css`
        background-color: var(--bg-orange);
        color: var(--clr-light);

        &:where(:hover, :focus){
            outline: 2px solid var(--bg-orange);
            outline-offset: 8px;
            background-color: var(--bg-light);
            color: var(--clr-orange);
        }
    `};

    ${({clrGrey}) => clrGrey !== "greyClr" && css`
        background-color: var(--bg-lightgrey);
        color: var(--clr-dark);

        &:where(:hover, :focus){
            outline: 2px solid var(--bg-lightgrey);
            outline-offset: 8px;
            background-color: var(--bg-light);
        }
    `}; 
    
    ${({align}) => align !== "size" && css`
        aspect-ratio: 2.2;
        border-radius: 50px;
        grid-area: 6 / 2 span;
    `};   
`;