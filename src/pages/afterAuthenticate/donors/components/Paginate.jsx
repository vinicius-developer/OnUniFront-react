import React, { Component, Fragment } from 'react'


export default class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ne
                return this.props.nextPage.split('=')
            },
            lastPage: () => {
                return this.props.nextPage - 1
            }
        }
    }
    render() {
        return (
            <Fragment>
                {console.log(this.state.nextPage)}
            </Fragment>
        )
    }

}