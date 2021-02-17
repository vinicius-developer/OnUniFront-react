import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

/* CSS */

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    z-index: 2;
    min-width: 200px;
    min-height: 200px;

    div {
        height: 50%;
        width: 40%;
        background-color: ${({ theme }) => theme.color.salmao};
        position: relative;
    }
`

const ButtonClose = styled.button`
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.color.lima};
    font-size: 16px;
    top: -25px;
    right: -25px;
`

export default class ReportModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            none: this.props.visibility
        }
    }

    setNoneModal() {
        this.state.none ? this.setState({ none: false }) : this.setState({ none: true })
    }

    render() {
        return (
            <Fragment>
                {console.log(this.state.none)}
                {this.state.none ?
                    <Wrapper className="d-flex justify-content-center align-items-center">
                        <div>
                            <ButtonClose onClick={() => this.setNoneModal()} className="text-white font-weight-bold">X</ButtonClose>
                        </div>
                    </Wrapper>
                    :
                    <Wrapper className="d-none">
                        <div>
                            <ButtonClose onClick={() => this.setNoneModal()} className="text-white font-weight-bold">X</ButtonClose>
                        </div>
                    </Wrapper>
                }
            </Fragment>
        )
    }
}