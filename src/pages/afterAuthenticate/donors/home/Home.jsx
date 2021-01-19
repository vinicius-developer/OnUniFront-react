import React, { Component, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

/* Components */
import Header from '../../../default/Header'
import Footer from '../../../default/Footer'

/* CSS */

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 110px;

    h1 {
        font-family: ${({ theme }) => theme.font.roboto};
        color: #5f5f5f;
    }

    article {
        width: 1000px;
        height: 500px;
        box-shadow: 5px 3px 22px 0px rgba(49, 50, 50, 0.36) ;
        margin: 0 0 60px 0;

        div {
            width: 50%;
            height: 100%;

            h1{
                font-size: 50px;
            }

            p,h1,h5 {
                font-weight: bold;
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

            })
    }

    request(e, page) {
        e.preventDefault()
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

            })

    }

    cutText(text) {
        return text.split(' ').slice(0, 15).join(' ') + '...'
    }

    moveScroll() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Fragment>
                <Header
                    firstPage=""
                    itensNav={['']}
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
                                path: "/",
                                label: "Sair"
                            }
                        ]
                    }
                />
                <Wrapper className="d-flex align-items-center flex-column">
                    <h1 className="py-4 m-0">Escolha uma ONG</h1>

                    {this.state.ongs.map((val, ind) => {
                        return (
                            <article key={ind} className="d-flex  p-3">
                                <Frame style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/${val.img}')` }} className="mr-4" />
                                <div className="text-right d-flex flex-column justify-content-end align-items-end">
                                    <p>{val.id}</p>
                                    <h5 className="mb-4">{val.nomeCausaSocial}</h5>
                                    <h1 className="mb-4">{val.nomeFantasia}</h1>
                                    <p className="pl-5 mb-3">{this.cutText(val.descricao)}</p>
                                    <button className="mb-5">Saber Mais</button>
                                </div>
                            </article>
                        )
                    })}
                    {this.state.last_page}
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
            </Fragment>
        )
    }
}
