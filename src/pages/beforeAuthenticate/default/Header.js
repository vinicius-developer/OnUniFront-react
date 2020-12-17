import React, { Component } from 'react';
import { Link } from 'react-scroll'

import logo from '../../../imagesDefault/logo/logo.svg'

import menu from '../../../imagesDefault/utils-icons/menu.svg'

class Header extends Component {
	render() {
		return (
			<header className="container-fluid">
				{this.props.itensNav !== undefined & this.props.itensCad !== undefined ?
					<div className="box-info-header d-flex justify-content-between align-items-center">
						<div className="box-img">
							<Link className="pe-auto" to={this.props.firstPage} spy={true} smooth={true} duration={500}>
								<img src={logo} alt="logo da OnUni" />
							</Link>
						</div>
						<div className="box-buttons">
							<nav>
								<ul className="list-style-header">
									{this.props.itensNav.map((itens, index) => {
										return (
											<li key={index}>
												<Link to={itens.replace(' ', '').toLowerCase()} spy={true} smooth={true} duration={500}>
													{itens}
												</Link>
											</li>
										)
									})}
								</ul>
							</nav>
							<div className="cad-buttons">
								<ul className="list-style-header">
									{this.props.itensCad.map((itens, index) => {
										return (
											<li key={index}>
												<a href={'/authenticate/' + itens.toLowerCase()}>{itens}</a>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
						<div className="menu-smartphone">
							<button className="button-menu-smartphone">
								<img src={menu} alt="três linhas na vertical para representar menu"/>
							</button>
						</div>
					</div>
					:
					<div className="box-info-header d-flex justify-content-center align-items-center">
						<div className="box-img">
							<a href="listOngs.html">
								<img src={logo} alt="logo da OnUni" />
							</a>
						</div>
					</div>
				}
			</header>
		)
	}
}

export default Header;
