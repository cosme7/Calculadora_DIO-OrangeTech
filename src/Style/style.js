import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1.5rem 1rem 3rem;
    margin: 0 auto;

    border-radius: 10px;

    background-color: red;

    @media screen and (max-width: 48em){
        padding: 1rem 0.5rem;
    }
`;

export const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    background-color: var(--bg-dark);

    @media screen and (max-width: 35em){
        width: 100%;
    }
`;