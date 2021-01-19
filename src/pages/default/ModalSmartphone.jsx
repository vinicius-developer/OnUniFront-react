import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const showMenuSmartphone = keyframes`
	from {
		width: 0;
	}
	to {
		width: 200px;
	}
`;

const buttonsMenuSmartphone = keyframes`
	from {
		visibility: hidden;
	}
	75% {
		visibility: hidden;
		color: ${({ theme }) => theme.color.lima};
	}
	to {
		color: #ffffff;
	}
`
const ModalSmartphone = styled.div`
	position: fixed;
	z-index: 2;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0,0,0, .5);
    font-weight: bold;

	aside {
		position: absolute;
		left: 0;
		width: 200px;
		height: 100vh;
		background-color: ${({ theme }) => theme.color.lima};
		animation-name: ${showMenuSmartphone};
		animation-duration: .5s;
	}

	aside button {
		position: absolute;
		right: 15px;
		top: 5px;
		cursor: pointer;
		background-color: ${({ theme }) => theme.color.lima};
		border: none; 
		color: #ffffff;
        font-weight: bold
	}

	aside ul {
		width: 70%;
		color: #ffffff;
	}

	aside ul li {
		margin: 20px 0;
		animation-name: ${buttonsMenuSmartphone};
		animation-duration: .5s;
		visibility: visible
	}


`

export default function ModalSmartphoneComponent(props) {
    return (
        <ModalSmartphone id="modalMenuSmartphone" className="d-none">
            <aside className="d-flex align-items-center flex-column">
                <button className="hidden-modal"> X </button>
                {props.itensNav !== '' &&
                    <ul className="mt-5">
                        {props.itensNav.map((val) => {
                            return (
                                <li key={Math.random()} >
                                    <ScrollLink
                                        className='hidden-modal'
                                        to={val.toLowerCase().split(' ').join('')}
                                        spy={true}
                                        smooth={true}
                                        duration={500}>
                                        {val}
                                    </ScrollLink>
                                </li>

                            )
                        })}
                    </ul>
                }
                {props.itensCad !== '' &&
                    <ul className="list-menu-smartphone mt-5 text-white">
                        {props.itensCad.map((val) => {
                            return (
                                <li key={Math.random()}>
                                    <Link to={val.path}>{val.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                }
            </aside>
        </ModalSmartphone>
    )

}