import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

/* DEFAULT */
import Header from '../default/Header'
import Footer from '../default/Footer'

/* CSS */

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`

const BoxOne = styled.section`
    padding: 100px 0 0 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: ${({ theme }) => theme.color.salmao};
    }

    div {
        ${({ theme }) => theme.media('443px', ['display: flex;', 'flex-direction: column'])}
    }

    div button {
        width: 140px;
        margin: 0 40px;
        height: 50px;
        font-size: 20px;
        color: #ffffff;
        background-color: ${({ theme }) => theme.color.lima};
        border-radius: 5px;
        border: none;
        transition: .5s;
        font-family: ${({ theme }) => theme.font.roboto};

        &:hover {
            text-decoration: underline;
            border-radius: 0;
        }
    } 

`

function Select() {
    return (
        <Fragment>
            <Header/>
            <Wrapper>
                <BoxOne>
                    <h1 className="pb-5 text-center px-3">Escolha seu tipo de usuário</h1>
                    <div>
                        <Link to="/authenticate/cadastrar/ong">
                            <button className="my-2">
                                Ong
                            </button>
                        </Link>
                        <Link href="/authenticate/cadastrar/doador">
                            <button className="my-2">
                                Doador
                            </button>
                        </Link>
                    </div>
                </BoxOne>
            </Wrapper>
            <Footer/>
        </Fragment>
    )
}

export default Select