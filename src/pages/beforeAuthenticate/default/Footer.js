import React from 'react';
import styled from 'styled-components';

/* IMG */
import logo from '../../../imagesDefault/logo/logo.svg';

/* CSS */
const FooterComponent = styled.footer`
    background-color: ${({ theme }) => theme.color.salmao};
    padding: 56px;
`

function Footer() {
    return (
        <FooterComponent className="d-flex justify-content-center alig-items-center">
            <img src={logo} alt="logo da OnUni" />
        </FooterComponent>
    )
}

export default Footer
