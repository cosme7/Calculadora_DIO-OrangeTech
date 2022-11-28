import styled from "styled-components";

export const Input = styled.input`
    max-width: 500px;
    min-height: 10vh;
    padding-inline: 0.5rem;

    font-size: clamp(1.5rem, 2.2vw, 2.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    text-transform: uppercase;
    text-align: right;

    background-color: var(--bg-dark);
    color: var(--clr-light);
    border: none;

    &:focus{
        outline: none;
    }
`