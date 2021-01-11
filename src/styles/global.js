import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
   font-family: ${({ theme }) => theme.font.poppins}; 
}

button:focus {
    outline: none !important;
}

a{
    cursor: pointer;
    color: #ffffff;
}

a:link {
   color: #ffffff;
}

/* link que foi visitado */
a:visited {
    color: #ffffff;
}

/* mouse over */
a:hover {
    color: #ffffff;
}

/* link selecionado */
a:active {
    color: #ffffff;
}

ul {
    list-style: none;
    margin-bottom: 0;
}

button {
    outline: none;
}

.pe-auto {
    cursor: pointer;
}

.active {
    color: #ffffff;
    text-decoration: underline;
}
`

export default GlobalStyle