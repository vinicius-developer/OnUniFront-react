import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

/* IMAGES */

import logo from '../../../imagesDefault/logo/logoverde.svg'

/* CSS */

import { Wrapper, BoxOne, BoxOneInput } from './style/Main';

/* MAKS */

import VMasker from '../../tools/vmasker'




export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedOng: false,
            loggedDonor: false,
            form: {}
        }
    }

    componentDidMount() {
        document.getElementById('cadastrar').addEventListener('click', e => this.request(e))
    }

    setForm() {
        this.setState({
            form: {
                userkey: document.getElementById('userkey').value,
                password: document.getElementById('password').value
            }
        })
    }

    request(e) {
        e.preventDefault()
        this.setForm()

        const header = {
            'Content-Type': 'application/json'
        }

        async function send(body, header, global) {
            if (body.userkey.length === 14) {
                await axiosPost('http://127.0.0.1:8000/api/doador/auth/login', body, header, global, 'doador')
            } else if (body.userkey.length === 18) {
                await axiosPost('http://127.0.0.1:8000/api/ong/auth/login', body, header, global, 'ong')
            } else {
                const messageErrorUserkey = document.getElementById('message-error-userkey')
                const elementMessage = document.createElement('p')
                const textMessage = document.createTextNode('Texto inserido não corresponde a CNPJ nem CPF')
                elementMessage.appendChild(textMessage)
                if (messageErrorUserkey.firstChild != null) messageErrorUserkey.firstChild.remove()
                messageErrorUserkey.appendChild(elementMessage)
            }
        }

        function axiosPost(url, body, header, global, type) {
            return axios.post(url, body, header)
                .then(response => {
                    localStorage.setItem('token', response.data.access_token)
                    type === 'ong' ? global.setState({ loggedDonor: true }) : global.setState({ loggedOng: true })
                })
                .catch(error => {
                    clear()
                    showMessageError(error.response.data.errors)
                })
        }

        function showMessageError(errors) {
            for (let label in errors) {
                const errorField = document.getElementById(label).nextElementSibling
                const elementText = document.createElement('p')
                const createTextError = document.createTextNode(errors[label])

                elementText.appendChild(createTextError)
                errorField.appendChild(elementText)
            }
        }

        function clear() {
            const prefix = ["userkey", "password"]
            prefix.map(val => {
                const element = document.getElementById(val).nextElementSibling.firstChild
                if (element != null) element.remove()
            })
        }

        send(this.state.form, header, this)
    }



    render() {
        if (this.state.loggedOng) {
            return <Redirect push to="/donors/home" />
        } else if (this.state.loggedDonor) {
            return <Redirect push to="/ongs/home" />
        } else {
            return (
                <Fragment>
                    <Wrapper className="d-flex align-items-center justify-content-center">
                        <BoxOne className="d-flex flex-column align-items-center">
                            <Link to="/" className="d-flex justify-content-center">
                                <img src={logo} alt="logo onuni com cor verde" className="mt-3" />
                            </Link>
                            <form className="mt-1 d-flex flex-column align-items-center">
                                <h1 className="my-3">Entrar</h1>
                                <BoxOneInput className="d-flex flex-column">
                                    <label htmlFor="userkey">CPF/CNPJ: *</label>
                                    <input type="text"
                                        id="userkey"
                                        className="mb-1"
                                        onChange={e => VMasker(e.target, ['999.999.999-99', '99.999.999/9999-99'])} />
                                    <div className="mb-4" id="message-error-userkey"></div>
                                </BoxOneInput>

                                <BoxOneInput className="d-flex flex-column">
                                    <label htmlor="password">Senha: *</label>
                                    <input type="password" className="mb-1" id="password" />
                                    <div className="mb-4" id="message-error-password"></div>
                                </BoxOneInput>

                                <button className="mb-5" id="cadastrar">Entrar</button>
                            </form>
                        </BoxOne>
                    </Wrapper>
                </Fragment>
            )
        }
    }
}