import { createGlobalStyle } from "styled-components";

// it already contains reset

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }


    strong {
        font-weight: bold;
    }
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html{
        min-height: 600px;
        min-width: 800px;
    }
    body{
        position:absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #DCDCDC;
        height: 100vh;
        width: 100vw;
        min-height: 100px;
        min-width: 100px;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
        
    }
    button:disabled{
        cursor: default;
    }
    textarea{
        resize: none;
    }
    #root{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
    }
`;

export default GlobalStyle;
