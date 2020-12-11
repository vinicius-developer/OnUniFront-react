import React from 'react';

import logo from '../../../images/logo/logo.svg'

function Header() {
    return (
        <header className="container-fluid">
            {this.props.itensNav != undefined & this.props.itensCad != undefined ?
                <div className="box-info-header d-flex justify-content-between align-items-center">
                    <div className="box-img">
                        <a href="listOngs.html">
                            <img src={logo} alt="logo da OnUni" />
                        </a>
                    </div>
                    <nav>
                        <ul className="list-style-header">
                            {this.props.itensNav.map(itens => {
                                return (
                                    <li><a href={'#' + itens.replace(' ', '').toLowerCase()}>{itens}</a></li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="cad-buttons">
                        <ul className="list-style-header">
                            {this.props.itensCad.map(itens => {
                                return (
                                    <li><a href={'/authenticate/' + itens.toLowerCase()}>{itens}</a></li>
                                )
                            })}
                        </ul>
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

export default Header;