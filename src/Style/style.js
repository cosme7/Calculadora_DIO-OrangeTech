import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding-block: 1rem 0.5rem;

    @media screen and (max-width: 48em){
        padding: 1rem 0.5rem;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    grid-area: 1 / 4 span;

    position: relative;
`;

export const Wrapper = styled.div`
    max-width: clamp(290px, 40vw, 520px);
    margin: 0 auto;
    padding: 2rem 1rem;
    border-radius: 30px;
    border: 2px solid var(--bg-orange);
    box-shadow: 0px 0 25px 0 var(--bg-orange);

    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: clamp(.8rem, .9vw, 1.2rem);

    background-color: var(--bg-dark);
    position: relative;
    isolation: isolate;
    overflow: hidden;

    &::before{
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        inset: 0;
        filter: blur(10px);
        background-color: var(--bg-light);
        opacity: 0.15;
    }
`;