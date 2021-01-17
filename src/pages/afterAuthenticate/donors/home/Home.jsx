import React, { Component, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'

/* Components */
import Header from '../../../default/Header'
import Footer from '../../../default/Footer'
import Paginate from '../components/Paginate'


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

export default class HomeDonor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ongs: [],
            pages: {},
            token: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        }
    }

    componentDidMount() {
        // axios.get('http://127.0.0.1:8000/api/info/users/ong/list', { headers })
        //     .then(response => {
        //         this.setState({
        //             ongs: response.data.data,
        //             pages: {
        //                 nextPage: response.data.next_page_url
        //             }
        //         })
        //     })
        //     .catch(error => {

        //     })

        this.request()

    }

    request(page = 1) {
        const headers = this.state.token
        axios.get(`http://127.0.0.1:8000/api/info/users/ong/list`, {headers} )
            .then(response => {
                this.setState({
                    ongs: response.data.data,
                    pages: {
                        nextPage: response.data.next_page_url
                    }
                })
            })
            .catch(error => {

            })

    }

    cutText(text) {
        return text.split(' ').slice(0, 15).join(' ') + '...'
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
                                {console.log(val)}
                                <Frame style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/${val.img}')` }} className="mr-4" />
                                <div className="text-right d-flex flex-column justify-content-end align-items-end">
                                    <h5 className="mb-4">{val.nomeCausaSocial}</h5>
                                    <h1 className="mb-4">{val.nomeFantasia}</h1>
                                    <p className="pl-5 mb-3">{this.cutText(val.descricao)}</p>
                                    <button className="mb-5">Saber Mais</button>
                                </div>
                            </article>
                        )
                    })}

                    <Paginate nextPage={this.state.pages} />

                </Wrapper>
                <Footer />
            </Fragment>
        )
    }
}
