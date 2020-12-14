import React, {Component} from 'react';

import logo from '../../../images/logo/logo.svg'

class Header extends Component {
	render() {
		return (
			<header className="container-fluid">
				{this.props.itensNav !== undefined & this.props.itensCad !== undefined ?
					<div className="box-info-header d-flex justify-content-between align-items-center">
						<div className="box-img">
							<a href={'#' + this.props.firstPage}>
								<img src={logo} alt="logo da OnUni" />
							</a>
						</div>
						<div className="box-buttons">
							<nav>
								<ul className="list-style-header">
									{this.props.itensNav.map((itens, index) => {
										return (
											<li key={index}>
												<a href={'#' + itens.replace(' ', '').toLowerCase()}>{itens}</a>
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
