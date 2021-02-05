import React, {Component, Fragment, Redirect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

/* COMPONENTS */ 
import Header from '../../../default/Header'
import Footer from '../../../default/Footer'

/* CSS */

const Wrapper = styled.section`
    min-height: 100vh;
`
const BoxOne = styled.div`
    padding-top: 130px;
    width: 100%;
    height: 630px;

    div {
        width: 669px;
        height: 100%;
        position: relative;
    }
`
const Frame = styled.div`
    background-image: 
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
            listItens: {}
        }
    }

    componentDidMount() {
        const headers = this.state.token
        axios.get(`http://127.0.0.1:8000/api/info/users/ong/find/${this.state.id}`, { headers })
            .then(res => {
                this.setState({
                    ong: res.data
                })
            })
            .catch(err => {
                this.setState({
                    redirect:true,
                    path: "/authenticate/logout"
                })
            })

        axios.get(`http://127.0.0.1:8000/api/info/objects/list/${this.state.id}`, { headers })
            .then(res => {
                this.setState({
                    listItens: {
                        data: res.data.data,
                        nextPageUrl: res.data.next_page_url
                    }
                })
            })
            .catch(err => {
                this.setState({
                    redirect:true,
                    path: "/donors/home"
                })
            })
    }

    render() {
        if(!this.state.redirect) {
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
                    }/>
                    <Wrapper>
                        <BoxOne className="d-flex justify-content-center align-items-center">
                            <div>

                            </div>
                        </BoxOne>
                    </Wrapper>
                    <Footer />
                </Fragment>
            )
        } else {
            <Redirect to={this.state.path}/>
        }
    }

}