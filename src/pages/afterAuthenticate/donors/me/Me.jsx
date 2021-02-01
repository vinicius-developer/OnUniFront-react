import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';

/* COMPONENTS */
import Header from '../../../default/Header';
import Footer from '../../../default/Footer';

/* CSS */

const Wrapper = styled.section`
    min-height: 100vh;
`

const BoxOne = styled.div`
    margin: 150px 0;
    background-color: ${({ theme }) => theme.color.lima};
    width: 1000px;
    height: 600px;

    nav {
        background-color: ${({ theme }) => theme.color.salmao};
        height: 50px;
        width: 500px;
        border-radius: 0 0 50px 50px;

        ul {
            li {
                width: 170px;

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }

    header {
        width: 100%
    }
`


export default class Me extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect_path: '',
            token: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        }
    }

    componentDidMount() {
        const headers = this.state.token
        axios.get('http://127.0.0.1:8000/api/doador/auth/me', { headers })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                localStorage.removeItem('token')
                this.setState({
                    redirect_path: '/authenticate/login'
                })
            })

    }

    render() {
        if (this.state.redirect_path === '') {
            return (
                <Fragment>
                    <Header
                        firstPage={
                            {
                                action: 'redirect',
                                path: '/donors/home'
                            }
                        }
                        itensNav={['']}
                        itensCad={
                            [
                                {
                                    path: "/donors/help",
                                    label: "Ajuda"
                                },
                                {
                                    path: "/donors/me",
                                    label: "Meu Perfil"
                                },
                                {
                                    path: "/authenticate/logout",
                                    label: "Sair"
                                }
                            ]
                        }
                    />
                    <Wrapper className="d-flex justify-content-center align-items-center">
                        <BoxOne className="d-flex flex-column align-items-center">
                            <header className="d-flex justify-content-center">
                                <nav className="text-white font-weight-bold d-flex align-items-center justify-content-center">
                                    <ul className="d-flex">
                                        <li className="text-center">Informações</li>
                                        <li className="text-center">Ongs Favoritas</li>
                                    </ul>
                                </nav>
                            </header>
                        </BoxOne>
                    </Wrapper>
                    <Footer />
                </Fragment>
            )
        } else {
            return <Redirect to={this.state.redirect_path} /> 
        } 
    }
}