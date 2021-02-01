import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'

/* IMAGENS */
import logo from '../../imagesDefault/logo/logo.svg';
import menu from '../../imagesDefault/utils-icons/menu.svg';

const HeaderComponent = styled.header`
	background-color: ${({ theme }) => theme.color.lima};
    position: fixed;
    height: 100px;
	width: 100%;
    z-index: 2;
    -webkit-box-shadow: 5px 3px 22px 0px rgba(49, 50, 50, 0.36);
    -moz-box-shadow:    5px 3px 22px 0px rgba(49, 50, 50, 0.36);
    box-shadow:         5px 3px 22px 0px rgba(49, 50, 50, 0.36);
	z-index: 1;	
`;

const BoxInfoHeader = styled.section`
	width: 1100px;
	margin: 0 auto;
	height: 100%;

	${({ theme }) => theme.media('1100px', ['width: 100%'])}
`;

const BoxButtons = styled.div`
	display:flex;
	align-items: center;

	${({ theme }) => theme.media('1100px', ['display: none'])}
`;

const BoxImg = styled.div`
	display: flex;
   	align-items: center;
   	justify-content: center;
	width: 120px;

	img {
		width: 100%;
	}
`;

const ItemListHeader = styled.li`
	margin: 0 20px;
	display: inline-block;
	font-size: 18px;

	a {
		cursor: pointer;
		font-weight: bold
	}
`
const MenuSmartphone = styled.div`
	display: none;

	button {
		width: 40px;
     	height: 40px;
 		background-color: ${({ theme }) => theme.color.lima};
    	border: none
	}

	button img {
		width: 30px;
 	    height: 30px;
	}

	${({ theme }) => theme.media('1100px', ['display: block'])}
`


function Header(props) {
	if (props.itensNav !== undefined || props.itensCad !== undefined) {
		return (
			<Fragment>
				<HeaderComponent>
					<BoxInfoHeader className="d-flex justify-content-between align-items-center">
						<BoxImg>
							{props.firstPage.action === 'redirect' ?
								<Link to={props.firstPage.path}>
									<img src={logo} alt="logo da OnUni" />
								</Link>
								:
								<ScrollLink className="pe-auto ml-2" to={props.firstPage.path} spy={true} smooth={true} duration={500}>
									<img src={logo} alt="logo da OnUni" />
								</ScrollLink>
							}
						</BoxImg>
						<BoxButtons>
							{props.itensNav !== '' &&
								<nav className="mr-5">
									<ul className="text-white ">
										{props.itensNav.map((itens, index) => {
											return (
												<ItemListHeader key={index}>
													<ScrollLink
														to={itens.replace(' ', '').toLowerCase()}
														spy={true}
														smooth={true}
														duration={500}>
														{itens}
													</ScrollLink>
												</ItemListHeader>
											)
										})
										}
									</ul>
								</nav>
							}
							{props.itensCad !== undefined &&
								<div>
									<ul className="text-white">
										{props.itensCad.map((itens, index) => {
											return (
												<ItemListHeader key={index}>
													<Link to={itens.path}>
														{itens.label}
													</Link>
												</ItemListHeader>
											)
										})
										}
									</ul>
								</div>
							}
						</BoxButtons>
						<MenuSmartphone>
							<button className="hidden-modal mr-3">
								<img src={menu} alt="três linhas na vertical para representar menu" />
							</button>
						</MenuSmartphone>
					</BoxInfoHeader>
				</HeaderComponent>
			</Fragment>

		)
	} else {
		return (
			<Fragment>
				<HeaderComponent>
					<BoxInfoHeader className="d-flex justify-content-center align-items-center">
						<BoxImg>
							<Link to="/">
								<img src={logo} alt="logo da OnUni" />
							</Link>
						</BoxImg>
					</BoxInfoHeader>
				</HeaderComponent>
			</Fragment>
		)
	}
}

export default Header;
