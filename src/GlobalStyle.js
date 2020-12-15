import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({theme}) => theme.body};
        padding: 200px;
    }

    button {
        background-color: ${({theme}) => theme.backgroundcolor}; 
        border: none;
        margin-left: 5px;
        color: ${({theme}) => theme.color};
        padding: 5px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        &:hover {
            opacity: 0.6;
            
        }
    }

    .texto {
        color: ${({theme}) => theme.colortext};
    }
`; 

export default GlobalStyle;
