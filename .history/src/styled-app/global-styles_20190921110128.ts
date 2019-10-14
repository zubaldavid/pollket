import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;        
        background-repeat: no-repeat;
        font-family: 'Raleway', sans-serif;
        position: relative;
        vertical-align: middle;
    }    
    html, body, div#root {
        height: 100%;
        width: 100%;        
        font-size: 62.5%; 
        font-family: 'Raleway', sans-serif;

    } 
    div#root{
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        /* safari fix */
        margin: 0;  
        padding: 0;
    }
    input, select {
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:hover {
            box-shadow: 0 0 0px 1000px white inset;
        }
    }
    ::-moz-focus-inner {
        border: 0;
    }
    ::-ms-clear {
        display: none;
    }
`
export default GlobalStyles
