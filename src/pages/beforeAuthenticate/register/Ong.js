import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

/* IMAGES */

import logo from '../../../imagesDefault/logo/logoverde.svg';

/* CSS */

import { Wrapper, BoxOne, BoxOneInput, BoxTwoInput } from './style/Main';


export default class FormOng extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
            redirect: false
        }
    }

    setForm() {
        this.setState({
            form: {
                cnpj: document.getElementById('cnpj').value,
                email: document.getElementById('email').value,
                causa_social: document.getElementById('causa_social').value,
                nome_fantasia: document.getElementById('nome_fantasia').value,
                razao_social: document.getElementById('razao_social').value,
                password: document.getElementById('password').value,
                password_confirmation: document.getElementById('password_confirmation').value,
                rua: document.getElementById('rua').value,
                cep: document.getElementById('cep').value,
                numero: document.getElementById('numero').value,
                complemento: document.getElementById('complemento').value,
                bairro: document.getElementById('bairro').value,
                cidade: document.getElementById('cidade').value,
                uf: document.getElementById('uf').value,
                descricao: document.getElementById('descricao').value,
                telefone: document.getElementById('telefone').value
            }
        })
    }

    componentDidMount() {
        document.getElementById('cadastrar').addEventListener('click', (e) => {
            e.preventDefault()
            this.setForm()

            const header = {
                'Content-Type': 'application/json'
            }

            async function send(form, header) {
                await axios.post('http://127.0.0.1:8000/api/ong/auth/register', form, header)
                    .then(response => {
                        this.setForm({redirect: true})
                    })
                    .catch(error => {
                        clear(error.response.data.errors)
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
                const prefix = ["cnpj", "email", "causa_social", "nome_fantasia", "razao_social", "password", "password_confirmation", "rua", "cep", "numero", "bairro", "cidade", "uf", "descricao", "telefone"]

                for (let i = 0; i < prefix.length; i++) {
                    const element = document.getElementById(prefix[i]).nextElementSibling.firstChild
                    if (element != null) element.remove()
                }
            }

            function success(response) {
                const elementText = document.createElement('h1');
                const contentText = document.createTextNode(response.data.message)
                const boxOne = document.querySelector('section')

                document.querySelector('form').classList = 'd-none'

                elementText.appendChild(contentText);

                boxOne.appendChild(elementText)


            }

            send(this.state.form, header)
        })

    }


    render() {
        return (
            <Wrapper className="d-flex align-items-center justify-content-center">
                {!this.state.redirect ?
                <BoxOne className="d-flex flex-column align-items-center">
                    <img src={logo} alt="logo onuni com cor verde" className="mt-3" />
                    <form className="mt-3 d-flex flex-column align-items-center">
                        <h1 className="mt-1">Cadastrar</h1>
                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="cnpj">CNPJ: *</label>
                            <input type="text" id="cnpj" className="mb-1" />
                            <div className="mb-4" id="messageErrorCnpj"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="email">E-mail: *</label>
                            <input type="email" id="email" className="mb-1" />
                            <div className="mb-4" id="messageErrorEmail"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="causa_social">Causa Social: *</label>
                            <select id="causa_social" defaultValue="" className="mb-1">
                                <option value="" disabled>Escolha</option>
                                <option value="1">Proteção Ambiental</option>
                                <option value="2">Educação Infantil</option>
                                <option value="3">Tratamento Médico</option>
                                <option value="4">Proteção Animal</option>
                                <option value="5">Casa Solidária</option>
                                <option value="6">Refugiados</option>
                                <option value="7">Doação de Alimentos</option>
                                <option value="8">Violência Doméstica</option>
                                <option value="9">Outros</option>
                            </select>
                            <div className="mb-4" id="messageErrorCausaSocial"></div>
                        </BoxOneInput>

                        <BoxTwoInput className="d-flex flex-column flex-sm-row">
                            <div className="mr-0 mr-sm-3">
                                <label htmlFor="nome_fantasia">Nome Fantasia: *</label>
                                <input type="text" id="nome_fantasia" className="mb-1" />
                                <div className="mb-4" id="messageErrorNomeFatasia"></div>
                            </div>
                            <div>
                                <label htmlFor="razao_social">Razão Social: *</label>
                                <input type="text" id="razao_social" className="mb-1" />
                                <div className="mb-4" id="messageErrorRazaoSocial"></div>
                            </div>
                        </BoxTwoInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="">Telefone: *</label>
                            <input type="text" id="telefone" className="mb-1" />
                            <div className="mb-4" id="messageErrorTelUm"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="password">Senha: *</label>
                            <input type="password" id="password" className="mb-1" />
                            <div className="mb-4" id="messageErrorPassword"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="password_confirmation">Confirmação de Senha: *</label>
                            <input type="password" id="password_confirmation" className="mb-1" />
                            <div className="mb-4" id="messageErrorPassowordConfirmation"></div>
                        </BoxOneInput>

                        <BoxOneInput className="d-flex flex-column">
                            <label htmlFor="rua">Rua/Avenida: *</label>
                            <input type="text" id="rua" className="mb-1" />
                            <div className="mb-4" id="messageErrorRua"></div>
                        </BoxOneInput>

                        <BoxTwoInput className="d-flex flex-column flex-sm-row">
                            <div className="mr-3">
                                <label htmlFor="cep">CEP: *</label>
                                <input type="text" id="cep" max="9" className="mb-1" />
                                <div className="mb-4" id="messageErrorCep" ></div>
                            </div>
                            <div>
                                <label htmlFor="numero">Numero: *</label>
                                <input type="text" id="numero" className="mb-1" />
                                <div className="mb-4" id="messageErrorNumero"></div>
                            </div>
                        </BoxTwoInput>

                        <BoxTwoInput className="d-flex flex-column flex-sm-row">
                            <div className="mr-3">
                                <label htmlFor="complemento">Complemento:</label>
                                <input type="text" id="complemento" className="mb-1" />
                                <div className="mb-4" id="messageErrorComplemento"></div>
                            </div>
                            <div>
                                <label htmlFor="bairro">Bairro: *</label>
                                <input type="text" id="bairro" className="mb-1" />
                                <div className="mb-4" id="messageErrorBairro"></div>
                            </div>
                        </BoxTwoInput>

                        <BoxTwoInput className="d-flex flex-column flex-sm-row">
                            <div className="mr-3">
                                <label htmlFor="cidade">Cidade: *</label>
                                <input type="text" id="cidade" className="mb-1" />
                                <div className="mb-4" id="messageErrorCidade"></div>
                            </div>
                            <div>
                                <label htmlFor="uf">UF: *</label>
                                <select name="uf" id="uf" defaultValue="" className="mb-1">
                                    <option value='' disabled>Escolha</option>
                                    <option value="1">AC</option>
                                    <option value="2">AL</option>
                                    <option value="3">AP</option>
                                    <option value="4">AM</option>
                                    <option value="5">BA</option>
                                    <option value="6">CE</option>
                                    <option value="7">DF</option>
                                    <option value="8">DF</option>
                                    <option value="9">GO</option>
                                    <option value="10">MA</option>
                                    <option value="11">MT</option>
                                    <option value="12">MS</option>
                                    <option value="13">MG</option>
                                    <option value="14">PA</option>
                                    <option value="15">PB</option>
                                    <option value="16">PR</option>
                                    <option value="17">PE</option>
                                    <option value="18">PI</option>
                                    <option value="19">RJ</option>
                                    <option value="20">RN</option>
                                    <option value="21">RS</option>
                                    <option value="22">RO</option>
                                    <option value="23">RR</option>
                                    <option value="24">SC</option>
                                    <option value="25">SP</option>
                                    <option value="26">SE</option>
                                    <option value="27">TO</option>
                                </select>
                                <div className="mb-4" id="messageErrorUf"></div>
                            </div>
                        </BoxTwoInput>

                        <BoxOneInput>
                            <label htmlFor="descricao">Descrição: *</label>
                            <textarea name="descricao" id="descricao" cols="42" rows="4"></textarea>
                            <div className="mb-4" id="messageErrorDescricao"></div>
                        </BoxOneInput>

                        <button id="cadastrar" onClick={e => this.setForm(e)} className="mb-5">Cadastrar</button>
                    </form>
                </BoxOne> 
                : 
                <Redirect to='/authenticate/login'/>
                }
            </Wrapper>
        )
    }

}