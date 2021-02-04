import React, {Component, Fragment, Redirect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default class moreInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            token: {
                'Authorization': `Bearer ${localStorage.token}`
            },
            redirect: false,
            ong: {},

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
                    redirect:true
                })
            })

        
    }

    render() {
        if(!this.state.redirect) {
            return <div>{this.state.id}</div>
        } else {
            <Redirect to="/authenticate/logout"/>
        }
    }

}