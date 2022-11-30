import { createGlobalStyle } from "styled-components";
import Background from '../Assets/bg-calc.jpeg'

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root{
        --ff-primary: 'Nunito Sans', sans-serif;
        /* Background */
        --bg-dark: #000000;
        --bg-light: #FFFFFF;
        --bg-lightdark: #1C1C1C;
        --bg-orange: #FF9500;
        --bg-lightgrey: #D4D4D2;
        /* Color Font */
        --clr-light:#FFFFFF;
        --clr-dark: #000000;
        --clr-orange: #FF9500;
        /* Font-Weight */
        --fw-700: 700;
        /* Rotation */
        --rotation: 45deg;
    }

    body{
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.2;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

  &::-webkit-scrollbar{
     width: 1.2em;
     height: 1em;
  }

  &::-webkit-scrollbar-track{
      background-color: var(--bg-orange);
  }

  &::-webkit-scrollbar-thumb{
      background-color: var(--bg-lightdark);
      border: .1em solid var(--bg-orange);
      border-radius: 100vw;
  }
`