import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #121214;
        color: #fff;
        letter-spacing: 1px;
    }

    .color-a-ajust {
        color: #fff !important;
    }
`;
