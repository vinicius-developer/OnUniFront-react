import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
   font-family: 'Poppins', sans-serif; 
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