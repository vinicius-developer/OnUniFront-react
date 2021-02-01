import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

/* Components */
import Header from '../../../default/Header'
import Footer from '../../../default/Footer'
import ModalSmartphoneComponent from '../../../default/ModalSmartphone'

/* CSS */

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 110px;

    h1 {
        font-family: ${({ theme }) => theme.font.roboto};
        color: #5f5f5f;
        font-weight: 100;
        ${({ theme }) => theme.media('472px', ['font-size: 30px'])}
    }

    article {
        width: 1000px;
        height: 500px;
        box-shadow: 5px 3px 22px 0px rgba(49, 50, 50, 0.36) ;
        margin: 0 0 60px 0;

        ${({ theme }) => {
        return theme.media('1000px', [
            'width: 472px;',
            'height: 619px;',
            'flex-direction: row;',
            'flex-wrap: wrap;'
        ])
    }}

        ${({ theme }) => theme.media('472px', ['width: 372px'])}

        ${({ theme }) => theme.media('372px', ['width: 272px'])}

        div {
            width: 50%;
            height: 100%;
            text-align: right;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            flex-direction: column;

            ${({ theme }) => theme.media('1000px',[
            'width: 100%;',
            'height: 50%;',
            'justify-content: start;',
            'align-items: start;',
            'margin-top: 2em;',
            'text-align: left'
        ])}


            h1{
                font-size: 50px;


                ${({ theme }) => theme.media('472px', ['font-size: 30px'])}
            }

            p {
                padding-left: 1.5em;
                ${({ theme }) => theme.media('1000px', ['padding: 0'])} 

                ${({ theme }) => theme.media('472px', ['font-size: 13px'])}
            }

            h5 {
                ${({ theme }) => theme.media('472px', ['font-size: 20px'])}
            }

            p,h1,h5 {
                color:  #343a40
            }

            

            button {
                color: #343a40;
                background-color: transparent;
                background-image: none;
                border: 0.5px solid #343a40;
                height: 40px;
                width: 150px;
                font-weight: bold;
                border-radius: 5px;

                &:hover{
                    background-color: #343a40;
                    transition: .5s;
                    color: #ffffff
                }
            }
        }
    }

`

const Frame = styled.div`
    width: 50%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    margin-right: 1.5rem;

    ${({ theme }) => {
        return theme.media('1000px', [
            'margin-right: 0;',
            'width: 100% !important;',
            'margin-top: 0 !important'
        ])
    }
    }
    
`

const ButtonPaginate = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: none;
    background-color: ${({ theme }) => theme.color.salmao};
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px 20px 10px;

`

export default class HomeDonor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ongs: [],
            page: '',
            last_page: '',
            redirect_path: '',
            token: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        }
    }

    componentDidMount() {
        const headers = this.state.token
        axios.get(`http://127.0.0.1:8000/api/info/users/ong/list?page`, { headers })
            .then(response => {
                const page = response.data.current_page
                this.setState({
                    ongs: response.data.data,
                    page: page,
                    last_page: response.data.last_page
                })
            })
            .catch(error => {
                localStorage.removeItem('token')
                this.setState({
                    redirect_path: '/authenticate/login'
                })
            })

        const modalMenuSmartPhone = document.querySelectorAll('.hidden-modal')

        for (let i = 0; i < modalMenuSmartPhone.length; i++) {
            modalMenuSmartPhone[i].addEventListener('click', e => this.switchModal(e))
        }

    }

    componentWillUnmount() {
        const modalMenuSmartPhone = document.querySelectorAll('.hidden-modal')
        for (let i = 0; i < modalMenuSmartPhone.length; i++) {
            modalMenuSmartPhone[i].removeEventListener('click', e => this.switchModal(e))
        }
        this.setState({
            ongs: [],
            page: '',
            last_page: '',
            redirect_path: '',
            token: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
    }

    request(e, page) {
        e.preventDefault()
        window.scrollTo(0, 0)
        const headers = this.state.token
        axios.get(`http://127.0.0.1:8000/api/info/users/ong/list?page=${page}`, { headers })
            .then(response => {
                const page = response.data.current_page
                this.setState({
                    ongs: response.data.data,
                    page: page,
                })
            })
            .catch(error => {
                localStorage.removeItem('token')
                this.setState({
                    redirect_path: '/authenticate/login'
                })
            })
    }

    switchModal(e) {
        const modal = document.getElementById('modalMenuSmartphone')

        if (modal.classList.contains('d-none')) {
            modal.classList.remove('d-none')
        } else {
            modal.classList.add('d-none')
        }
    }

    cutText(text) {
        return text.split(' ').slice(0, 15).join(' ') + '...'
    }

    render() {
        if (this.state.redirect_path === '') {
            return (
                <Fragment>
                    <Header
                        firstPage={
                            {
                                action: 'redirect'
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
                    <Wrapper className="d-flex align-items-center flex-column">
                        <h1 className="py-4 m-0">Escolha uma ONG</h1>

                        {this.state.ongs.map((val, ind) => {
                            return (
                                <article key={ind} className="d-flex p-3">
                                    <Frame style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/${val.img}')` }} />
                                    <div >
                                        <h5 className="mb-4">{val.nomeCausaSocial}</h5>
                                        <h1 className="mb-4">{val.nomeFantasia}</h1>
                                        <p className="mb-3">{this.cutText(val.descricao)}</p>
                                        <button className="mb-5">Saber Mais</button>
                                    </div>
                                </article>
                            )
                        })}
                        <div>
                            {this.state.page > 1 &&
                                <ButtonPaginate onClick={e => this.request(e, parseInt(this.state.page) - 1)}> &lt; </ButtonPaginate>
                            }
                            {this.state.page < this.state.last_page &&
                                <ButtonPaginate onClick={e => this.request(e, parseInt(this.state.page) + 1)}> &gt; </ButtonPaginate>
                            }
                        </div>
                    </Wrapper>
                    <Footer />
                    <ModalSmartphoneComponent
                        itensNav=""
                        itensCad={
                            [
                                {
                                    path: "/",
                                    label: "Ajuda"
                                },
                                {
                                    path: "/",
                                    label: "Meu Perfil"
                                },
                                {
                                    path: "/authenticate/logout",
                                    label: "Sair"
                                }
                            ]
                        } />
                </Fragment>
            )
        } else {
            return <Redirect to={this.state.redirect_path}> </Redirect>
        }
    }
}
