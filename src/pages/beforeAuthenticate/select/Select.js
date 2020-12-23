import React, { Fragment } from 'react'

/* DEFAULT */
import Header from '../default/Header'
import Footer from '../default/Footer'



function Select() {
    return (
        <Fragment>
            <Header/>
            <div className="body">
                <section className="box-one">
                    <h1>Escolha seu tipo de usuário</h1>
                </section>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Select