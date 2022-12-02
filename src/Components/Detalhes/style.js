import styled, { keyframes, css } from "styled-components";

const toClose = keyframes`
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 79.9;
    }
    60% {
      stroke-dashoffset: 79.9;
      rotate: var(--rotation);
    }
    100% {
      stroke-dashoffset: 0;
      rotate: var(--rotation);
    }
`; 

const toOpen = keyframes`
    0% {
      stroke-dashoffset: 0;
      rotate: var(--rotation);
    }
    40% {
      stroke-dashoffset: 79.9;
      rotate: var(--rotation);
    }
    60% {
      stroke-dashoffset: 79.9;
    }
    100% {
      stroke-dashoffset: 0;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    position: relative;
    z-index: 9999;

    span{
      color: red;
      clip: rect(0 0 0 0); 
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap; 
      width: 1px;
    }

    svg{
        stroke: var(--bg-light);
        transition: rotate 800ms 100ms;
        rotate: ${({open}) => open ? '1.5turn' : '0'};
    }
    
    line:is(:nth-child(1), :nth-child(2)){
        animation: ${toOpen} 1s forwards;
    };

    line:is(:nth-child(1), :nth-child(2)){
        animation: ${({open}) => open && css`
          ${toClose} 1s forwards;
        `}
    };

    line:nth-child(1){
        --rotation: -45deg;
        transform-origin: 65px 45px;
    }

    line:nth-child(2){
        transform-origin: 60px 55px;
    }

`;

export const Historic = styled.div`
  width: 100%;
  max-height: 400px;
  padding: 1rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--bg-lightdark);
  position: absolute;
  top: 3rem;
  z-index: 2000;
  transition: transform 0.7s ease-in-out;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(150%)'};
  overflow-y: scroll;

  &::before{
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    inset: 0;
    filter: blur(100px);
    background-color: var(--bg-light);
    opacity: 0.3;
  }

  ul{
    width: 100%;
    list-style: none;
  }

  li{
    width: 100%;
    font-size: clamp(1rem, 2vw, 2.5rem);
    font-family: var(--ff-primary);
    font-weight: var(--fw-700);
    color: var(--clr-light);
    text-align: right;
  }

  button{
    padding-block: 0.5rem;
    background-color: transparent;
    border: none;
  }
`;

export const Overlay = styled.div`
    width: ${({open}) => open ? '100vw' : '0'};
    aspect-ratio: 0.5;
    margin: 0 auto;
    border-radius: 30px;
    position: absolute;
    inset: -2rem -1rem 0;
    z-index: 1000;
    transition: width 0.3s ease-in-out;
    background-image: linear-gradient( rgb(0, 0, 0, 0.2), rgb(255, 255, 255, 0.5));
`;


