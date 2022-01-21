import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }

    body{
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #fff;
        color: #010101;
    } 

    ul {
        padding: 0;
        margin: 0;
        list-style: none; 
    }

    img{
        display: block;
        max-width: 100%;
    }

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
`;
