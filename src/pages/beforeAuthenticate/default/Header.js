import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

/* IMAGENS */
import logo from '../../../imagesDefault/logo/logo.svg';
import menu from '../../../imagesDefault/utils-icons/menu.svg';

const media1100 = (elements) => {
	return `@media (max-width: 1100px) {
		${elements.join('\n')}
	}`
}

const HeaderComponent = styled.header`
	background-color: ${({ theme }) => theme.color.lima};
    position: fixed;
    height: 100px;
    z-index: 2;
    -webkit-box-shadow: 5px 3px 22px 0px rgba(49, 50, 50, 0.36);
    -moz-box-shadow:    5px 3px 22px 0px rgba(49, 50, 50, 0.36);
    box-shadow:         5px 3px 22px 0px rgba(49, 50, 50, 0.36);
    //margin: 0 25%;
	z-index: 1;	
`;

const BoxInfoHeader = styled.section`
	width: 1100px;
	margin: 0 auto;
	height: 100%;

	${media1100(['width: 100%'])}
`;

const BoxButtons = styled.div`
	display:flex;
	align-items: center;

	${media1100(['display: none;'])}
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
	font-weight: bold

	a {
		cursor: pointer
	}
`
const MenuSmartphone = styled.div`
	display: none;

	button {
		width: 40px;
     	height: 40px;
 		background-color: ${({theme})=> theme.color.lima};
    	border: none
	}

	button img {
		width: 30px;
 	    height: 30px;
	}

	${media1100(['display: block'])}
`


class Header extends Component {
	render() {
		return (
			<Fragment>
				<HeaderComponent className="container-fluid">
					{this.props.itensNav !== undefined & this.props.itensCad !== undefined ?
						<BoxInfoHeader className="d-flex justify-content-between align-items-center">
							<BoxImg>
								<Link className="pe-auto" to={this.props.firstPage} spy={true} smooth={true} duration={500}>
									<img src={logo} alt="logo da OnUni" />
								</Link>
							</BoxImg>
							<BoxButtons>
								<nav className="mr-5">
									<ul className="text-white ">
										{this.props.itensNav.map((itens, index) => {
											return (
												<ItemListHeader key={index}>
													<Link to={itens.replace(' ', '').toLowerCase()} spy={true} smooth={true} duration={500}>
														{itens}
													</Link>
												</ItemListHeader>
											)
										})}
									</ul>
								</nav>
								<div>
									<ul className="text-white">
										{this.props.itensCad.map((itens, index) => {
											return (
												<ItemListHeader key={index}>
													<a href={'/authenticate/' + itens.toLowerCase()}>
														{itens}
													</a>
												</ItemListHeader>
											)
										})}
									</ul>
								</div>
							</BoxButtons>
							<MenuSmartphone>
								<button className="hidden-modal">
									<img src={menu} alt="três linhas na vertical para representar menu" />
								</button>
							</MenuSmartphone>
						</BoxInfoHeader>
						:
						<BoxInfoHeader className="d-flex justify-content-center align-items-center">
							<BoxImg>
								<a href="/">
									<img src={logo} alt="logo da OnUni" />
								</a>
							</BoxImg>
						</BoxInfoHeader>
					}
				</HeaderComponent>
			</Fragment>
		)
	}
}

export default Header;
