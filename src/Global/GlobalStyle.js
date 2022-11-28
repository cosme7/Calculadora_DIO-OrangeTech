import { createGlobalStyle } from "styled-components";

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
    }

    body{
        min-height: 100vh;
        display: grid;
        place-content: center;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background-color: #F3f3f3;
    }
`