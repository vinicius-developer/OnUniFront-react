import React, { Component, Fragment, Redirect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

/* COMPONENTS */
import Header from '../../../default/Header'
import Footer from '../../../default/Footer'

/* IMAGES */
import Balao from '../../img/balao-de-coracao.svg'
import BalaoPreenchido from '../../img/balao-de-coracao-preenchido.svg'
import Adendo from '../../img/adendo.svg'
import AdendoPreenchido from '../../img/adendo-preenchido.svg'

/* CSS */

const Wrapper = styled.section`
    min-height: 100vh;
`
const BoxOne = styled.div`
    padding-top: 130px;
    width: 710px;
    height: 630px;
    position: relative;
`

const Frame = styled.div`
    height: 100%;
    width: 60%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: relative;
    box-shadow: 5px 3px 22px 0px rgba(49, 50, 50, 0.36);

    div {
        position: absolute;
        background-color: ${({ theme }) => theme.color.lima};
        padding: 20px;
        z-index: 2;
        bottom: 50px;
        right: -110px;
        max-width: 400px;
        box-shadow: 5px 3px 22px 0px rgba(49, 50, 50, 0.36);

        h1 {
            font-size: 40px;
        }
    }
`

const BoxActions = styled.div`
    position: absolute;
    right: 0;
    top: 130px;

    button {
        width: 50px;
        height: 50px;
        border: none;
        background-color: inherit;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin: 0 5px 
    }
`

export default class moreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            token: {
                'Authorization': `Bearer ${localStorage.token}`
            },
            redirect: false,
            path: '',
            ong: {},
            listItens: {},
            fav: false,
            report: false
        }
    }

    componentDidMount() {
        this.getInfoOng()
        this.getInfoList()
        this.getInfoFav()
        this.getInfoReport()
    }

    async getInfoOng() {
        const headers = this.state.token
        await axios.get(`http://127.0.0.1:8000/api/info/users/ong/find/${this.state.id}`, { headers })
            .then(({ data }) => {
                this.setState({
                    ong: data
                })
            })
            .catch(err => {
                this.setState({
                    redirect: true,
                    path: "/authenticate/logout"
                })
            })
    }

    async getInfoList() {
        const headers = this.state.token
        await axios.get(`http://127.0.0.1:8000/api/info/objects/list/${this.state.id}`, { headers })
            .then(({ data }) => {
                this.setState({
                    listItens: {
                        data: data.data,
                        nextPageUrl: data.next_page_url
                    }
                })
            })
            .catch(err => {
                this.setState({
                    redirect: true,
                    path: "/donors/home"
                })
            })
    }

    async getInfoFav() {
        const headers = this.state.token
        await axios.get(`http://127.0.0.1:8000/api/actions/follow/find/${this.state.id}`, { headers })
            .then(({ data }) => {
                this.setState({
                    fav: data.exists
                })
            })
            .catch(err => {
                this.setState({
                    redirect: true,
                    path: "/donors/home"
                })
            })
    }

    async getInfoReport() {
        const headers = this.state.token
        await axios.get(`http://127.0.0.1:8000/api/actions/report/findong/${this.state.id}`, { headers })
            .then(({ data }) => {
                this.setState({
                    report: data.exists
                })
            })
            .catch(err => {
                this.setState({
                    redirect: true,
                    path: "/donors/home"
                })

            })
    }

    async setReport() {
        const headers = this.state.token
        //await axios.put(`http://127.0.0.1:8000/api/actions/report/reg`)
    }

    render() {
        if (!this.state.redirect) {
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
                        } />
                    <Wrapper className="d-flex flex-column align-items-center">
                        <BoxOne >
                            <Frame style={this.state.ong.img ? { backgroundImage: `url(http://127.0.0.1:8000/storage/${this.state.ong.img})` } : { backgroundImage: '' }}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <h1 className="text-white font-weigth-bold">{this.state.ong.nomeFantasia}</h1>
                                </div>
                            </Frame>
                            <BoxActions>
                                <button style={this.state.fav ? {backgroundImage: `url(${BalaoPreenchido})`} : {backgroundImage: `url(${Balao})`}}></button>
                                <button style={this.state.report ? {backgroundImage: `url(${AdendoPreenchido})`} : {backgroundImage: `url(${Adendo})`}}></button>
                            </BoxActions>
                        </BoxOne>

                    </Wrapper>
                    <Footer />
                </Fragment>
            )
        } else {
            <Redirect to={this.state.path} />
        }
    }

}