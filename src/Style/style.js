import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1.5rem 1rem 3rem;
    border-radius: 10px;
    background-color: var(--bg-dark);

    @media screen and (max-width: 48em){
        padding: 1rem 0.5rem;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0.5rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`;