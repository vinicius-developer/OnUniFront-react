import styled from 'styled-components'

import background from '../images/fundoCadastro.jpg'

const details = '#00442d';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
`

const BoxOne = styled.section`
    width: 70%;
    height: 80%;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: auto;
    min-width: 716px;
    max-width: 1132px;

    ${({ theme }) => theme.media('735px', ['min-width: 512px;'])}
    ${({ theme }) => theme.media('527px', ['min-width: auto;', 'width: 95%'])}

    a {
        width: 15%;

        ${({ theme }) => theme.media('735px', ['width: 25%;'])}
        ${({ theme }) => theme.media('527px', ['width: 35%;'])}
    }

    a img {
        width: 100%;
    }

    h1 {
        font-family: ${({ theme }) => theme.font.roboto};
        color: ${({ theme }) => theme.color.salmao};
        font-size: 35px;
        font-weight: bold; 
    }

    form {
        width: 450px;

        ${({ theme }) => theme.media('735px', ['width: 400px;'])}
        ${({ theme }) => theme.media('527px', ['width: 90%;'])}
    }

    button {
        outline: none;
        background-color: ${({ theme }) => theme.color.salmao};
        color: #ffffff;
        padding: 10px;
        border: none;
        border-radius: 5px; 
        font-weight: bold;
    }

    .message-success {
        color: ${({ theme }) => theme.color.salmao};
        text-align: center;
        font-size: 25px;
        margin: 0 40px;

        ${({ theme }) => theme.media('527px', ['font-size: 20px'])}
    }
`

const BoxOneInput = styled.div`
    width: 100%;

    label {
        font-size: 14px;
        color: ${details};
        font-weight: bold;
    }

    input {
        height: 30px;
        border: none;
        border-bottom: 1px solid ${details};
        outline: none;
        color: ${details};
        font-size: 14px;
        font-weight:bold
    }

    select {
        height: 30px;
        border: none;
        background-color: #ffffff;
        border-bottom: 1px solid ${details};
        outline: none;
        font-size: 14px;
        color: ${details}
    }
    
    textarea {
        width: 100%;
        outline: none;
        font-size: 14px;
        color: ${details};
        padding: 5px;
        border: 1px solid ${details};
        border-radius: 5px
    }

    div {
        width: 100%;
        height: 40px;
        color: ${({ theme }) => theme.color.salmao};
        font-size: 13px;
        font-weight: bold;
    }

`;

const BoxTwoInput = styled.div`

    ${({ theme }) => theme.media('575px', ['width: 100%'])}

    label {
        font-size: 14px;
        color: ${details};
        font-weight: bold;
    }

    div {
        width: 48%;

        ${({ theme }) => theme.media('575px', ['width: 100%'])}
    }

    div input{
        height: 30px;
        width: 100%;
        border: none;
        border-bottom: 1px solid ${details};
        outline: none;
        color: ${details};
        font-size: 14px;
    }

    div select {
        height: 30px;
        width: 100%;
        border: none;
        background-color: #ffffff;
        border-bottom: 1px solid ${details};
        outline: none;
        font-size: 14px;
        color: ${details};
    }

    div div {
        width: 100%;
        height: 40px;
        color: ${({ theme }) => theme.color.salmao};;
        font-size: 13px;
        font-weight: bold;
    }
`;


export { Wrapper, BoxOne, BoxOneInput, BoxTwoInput }