import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        font-size: 100%;
        list-style-type: none;
        background: ${(props) => props.theme.colors.backgroundPrimary};
        color: ${(props) => props.theme.colors.textPrimary};
        font-family: 'Open Sans', sans-serif;
    }
    button, a {
        color: ${(props) => props.theme.colors.textPrimary}
    }
`;
