import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

/* IMAGES */

import logo from '../../../imagesDefault/logo/logoverde.svg';

/* CSS */

import { Wrapper, BoxOne, BoxOneInput } from './style/Main';

/* MAKS */

import VMasker from '../../tools/vmasker';



export default class FormDoador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }

        this.request = this.request.bind(this)

    }

    componentDidMount() {
        document.getElementById('cadastrar').addEventListener('click', e => this.request(e))
    }

    componentWillUnmount() {
        document.getElementById('cadastrar').removeEventListener('click', e => this.request(e))
    }

    setForm() {
        this.setState({
            form: {
                nome: document.getElementById('nome').value,
                sobrenome: document.getElementById('sobrenome').value,
                cpf: document.getElementById('cpf').value,
                genero: document.getElementById('genero').value,
                telefone: document.getElementById('telefone').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                password_confirmation: document.getElementById('password_confirmation').value
            }
        })

    }

    request(e) {
        e.preventDefault()
        this.setForm()

        const header = {
            'Content-Type': 'application/json'
        }

        async function send(form, header) {
            console.log(form)

            await axios.post('http://127.0.0.1:8000/api/doador/auth/register',form, header)
                .then(response => {
                    success(response)
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
            const prefix = ["nome", "sobrenome", "genero", "cpf", "email", "password", "password_confirmation", "telefone"]

            for (let i = 0; i < prefix.length; i++) {
                const element = document.getElementById(prefix[i]).nextElementSibling.firstChild
                if (element != null) element.remove()
            }
        }

        function success(response) {
            const elementText = document.createElement('p');
            const contentText = document.createTextNode(response.data.message)
            const boxOne = document.querySelector('section')

            document.querySelector('form').classList = 'd-none'

            elementText.appendChild(contentText);

            elementText.classList = 'message-success'

            boxOne.appendChild(elementText)
        }

        send(this.state.form, header)
    }

    render() {
        return (
            <Wrapper className="d-flex align-items-center justify-content-center">
                <BoxOne className="d-flex flex-column align-items-center">
                    <Link to="/" className="d-flex justify-content-center">
                        <img src={logo} alt="logo onuni com cor verde" className="mt-3" />
                    </Link>
                    <form className="mt-3 d-flex flex-column align-items-center">
                        <h1 className="mt-1">Cadastrar</h1>
                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="nome">Nome: *</label>
                            <input type="text" id="nome" className="mb-1" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="sobrenome">Sobrenome: *</label>
                            <input type="text" className="mb-1" id="sobrenome" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="cpf">CPF: *</label>
                            <input type="text" onChange={e => VMasker(e.target, ['999.999.999-99', '999.999.999-99'])}
                            className="mb-1" id="cpf" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="genero">Gênero: </label>
                            <select name="genero" id="genero" defaultValue="" className="mb-1">
                                <option value="" disabled>Escolha</option>
                                <option value="1">Feminino</option>
                                <option value="2">Masculino</option>
                                <option value="3">Não Binário</option>
                                <option value="4">Intersexual</option>
                                <option value="5">Outro</option>
                                <option value="6">Prefiro não dizer</option>
                            </select>
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="telUm">Telefone 1: *</label>
                            <input type="text" onChange={e => VMasker(e.target, ['(99) 9999-9999', '(99) 99999-9999'])}className="mb-1" id="telefone" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="email">E-mail: *</label>
                            <input type="text" className="mb-1" id="email" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="password">Senha: *</label>
                            <input type="password" className="mb-1" id="password" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="password_confirmation">Confirmação de Senha: *</label>
                            <input type="password" className="mb-1" id="password_confirmation" />
                            <div className="mb-4 message-error"></div>
                        </BoxOneInput>

                        <button className="mb-5" id="cadastrar">Cadastrar</button>
                    </form>
                </BoxOne>
            </Wrapper >

        )
    }
}