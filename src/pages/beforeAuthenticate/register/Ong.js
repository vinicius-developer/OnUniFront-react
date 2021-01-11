import React, { Component } from 'react'
import axios from 'axios'

/* IMAGES */

import logo from '../../../imagesDefault/logo/logoverde.svg'

/* CSS */

import { Wrapper, BoxOne, BoxOneInput, BoxTwoInput } from './style/Main'


export default class FormOng extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cnpj: '',
            email: '',
            causa_social: '',
            nome_fantasia: '',
            razao_social: '',
            password: '',
            password_confirmation: '',
            rua: '',
            cep: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            descricao: '',
            telefones: '',
        }
    }

    setForm() {
        const cnpj = document.getElementById('cnpj').value
        const email = document.getElementById('email').value
        const causaSocial = document.getElementById('causa_social').value
        const nomeFantasia = document.getElementById('nome_fantasia').value
        const razaoSocial = document.getElementById('razao_social').value
        const password = document.getElementById('password').value
        const passwordConfirmation = document.getElementById('password_confirmation').value
        const rua = document.getElementById('rua').value
        const cep = document.getElementById('cep').value
        const numero = document.getElementById('numero').value
        const complemento = document.getElementById('complemento').value
        const bairro = document.getElementById('bairro').value
        const cidade = document.getElementById('cidade').value
        const uf = document.getElementById('uf').value
        const descricao = document.getElementById('descricao').value
        const telefone = document.getElementById('telefone').value

        this.setState({
            cnpj: cnpj,
            email: email,
            causa_social: causaSocial,
            nome_fantasia: nomeFantasia,
            razao_social: razaoSocial,
            password: password,
            password_confirmation: passwordConfirmation,
            rua: rua,
            cep: cep,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            descricao: descricao,
            telefone: telefone
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

                    })
                    .catch(error => {
                        console.log(error.response)
                        clear(error.response.data.errors)
                        showMessageError(error.response.data.errors)
                    })
            }

            send(this.state.form, header)


            function showMessageError(errors) {
                for (let label in errors) {
                    const errorField = document.getElementById(label).nextElementSibling
                    const elementText = document.createElement('p')
                    const createTextError = document.createTextNode(errors[label])

                    elementText.appendChild(createTextError)
                    errorField.appendChild(elementText)
                }
            }

            function clear(errors) {
                const prefix = [
                    "cnpj",
                    "email",
                    "causa_social",
                    "nome_fantasia",
                    "razao_social",
                    "password",
                    "password_confirmation",
                    "rua",
                    "cep",
                    "numero",
                    "bairro",
                    "cidade",
                    "uf",
                    "descricao",
                    "telefone",
                ]

                for(let i = 0; i < prefix.length; i++) {
                    const element = document.getElementById(prefix[i]).nextElementSibling.firstChild
                    console.log(element)
                    if (element != null) element.remove()
                }

            }


        })

    }


    render() {
        return (
            <Wrapper className="d-flex align-items-center justify-content-center">
                <BoxOne className="d-flex flex-column align-items-center">
                    <img src={logo} alt="logo onuni com cor verde" className="mt-3" />
                    <h1 className="mt-3">Cadastrar</h1>
                    <form className="mt-3 d-flex flex-column align-items-center">
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
                            <select id="causa_social" defaultValue="selected" className="mb-1">
                                <option value="selected" disabled>Escolha</option>
                                <option value="1">Proteção Ambiental</option>
                                <option value="11">Educação Infantil</option>
                                <option value="21">Tratamento Médico</option>
                                <option value="31">Proteção Animal</option>
                                <option value="41">Casa Solidária</option>
                                <option value="51">Refugiados</option>
                                <option value="61">Doação de Alimentos</option>
                                <option value="71">Violência Doméstica</option>
                                <option value="81">Outros</option>
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

                        <BoxTwoInput className="d-flex flex-column flex-sm-row">
                            <div className="mr-3">
                                <label htmlFor="password">Senha: *</label>
                                <input type="password" id="password" className="mb-1" />
                                <div className="mb-4" id="messageErrorPassword"></div>
                            </div>
                            <div>
                                <label htmlFor="password_confirmation">Confirmação de Senha: *</label>
                                <input type="password" id="password_confirmation" className="mb-1" />
                                <div className="mb-4" id="messageErrorPassowordConfirmation"></div>
                            </div>
                        </BoxTwoInput>

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
                                <select name="uf" id="uf" defaultValue="selected" className="mb-1">
                                    <option value='selected' disabled>Escolha</option>
                                    <option value="1">AC</option>
                                    <option value="11">AL</option>
                                    <option value="21">AP</option>
                                    <option value="31">AM</option>
                                    <option value="41">BA</option>
                                    <option value="51">CE</option>
                                    <option value="61">DF</option>
                                    <option value="71">DF</option>
                                    <option value="81">GO</option>
                                    <option value="91">MA</option>
                                    <option value="101">MT</option>
                                    <option value="111">MS</option>
                                    <option value="121">MG</option>
                                    <option value="131">PA</option>
                                    <option value="141">PB</option>
                                    <option value="151">PR</option>
                                    <option value="161">PE</option>
                                    <option value="171">PI</option>
                                    <option value="181">RJ</option>
                                    <option value="191">RN</option>
                                    <option value="201">RS</option>
                                    <option value="211">RO</option>
                                    <option value="221">RR</option>
                                    <option value="231">SC</option>
                                    <option value="241">SP</option>
                                    <option value="251">SE</option>
                                    <option value="261">TO</option>
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
            </Wrapper>
        )
    }

}