import React, { Fragment } from 'react'
import styled from 'styled-components'

/* COMPONENTS */
import Header from '../../../default/Header'
import Footer from '../../../default/Footer'
import ModalSmartphoneComponent from '../../../default/ModalSmartphone'

/* IMAGEM */
import bussola from './img/bussola.svg'
import lupa from './img/lupa.svg'
import balaoDeCoracao from './img/balao-de-coracao.svg'

/* CSS */

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 110px;
`

const BoxOne = styled.div`
    padding: 0 110px;
    max-width: 1186px;

    div {
        width: 50%;

        h5 {
            font-size: 30px;
        }

        h1 {
            font-size: 60px;
        }

        p {
            font-size: 15px;
            padding-top: 47px;
        }
    }
`

const BoxTwo = styled.div`
    height: 900px;
    width: 100%;
    position: relative;

    .line {
        height: 300px;
        width: 100%;
        background-color: #c0e9d8;
    }

    .sheet {
        width: 641px;
        height: 80%;
        box-shadow: 0px 0px 6px 0px rgba(50, 50, 50, 0.35);
        position: absolute;
        background-color: #ffffff;

        article img{
            width: 10%;
        }

        article h3 {
            margin: 0;
            width: 90%;
            display: flex;
            align-items: center;
        }
    }
`

export default function Help() {
    return (
        <Fragment>
            <Header
                firstPage={
                    {
                        action: 'redirect',
                        path: '/donors/home'
                    }
                }
                itensNav={['']}
                itensCad={
                    [
                        {
                            path: "/donors/help",
                            label: "Ajuda"
                        },
                        {
                            path: "/donors/me",
                            label: "Meu Perfil"
                        },
                        {
                            path: "/authenticate/logout",
                            label: "Sair"
                        }
                    ]
                }
            />
            <Wrapper className="d-flex flex-column align-items-center">
                <BoxOne className="d-flex justify-content-between mx-5 mt-5">
                    <div>
                        <h5>
                            Procure, encontre e
                        </h5>
                        <h1>
                            Ajude
                        </h1>
                    </div>
                    <div>
                        <p>
                            Tentamos fazer de nosso sistema uma interface simples,
                            rápida e fácil de ser utilizada, para que à ajuda possa
                            se tornar o mais simples possível.
                            <strong> O processo é dividido em três passos</strong>
                        </p>
                    </div>
                </BoxOne>
                <BoxTwo className="d-flex align-items-center justify-content-center">
                    <div className="line"></div>
                    <div className="sheet p-4">
                        <h2 className="mt-1 text-center">Passos</h2>
                        <article className="my-5 d-flex flex-row flex-wrap">
                            <img src={bussola} alt="bussola" />
                            <h3 className="pl-3">Econtre uma ONG</h3>
                            <p className="pl-2 pt-3 m-0">
                                Pesquise em nossa lista de ONGs uma que
                                você possa e sinta mais interessado em ajudar.
                            </p>
                        </article>
                        <article className="my-5 d-flex flex-row flex-wrap">
                            <img src={lupa} alt="lupa" />
                            <h3 className="pl-3">Pesquise um Pouquinho</h3>
                            <p className="pl-1 pt-3 m-0">
                                Antes de realizar a doação pesquise
                                um pouco sobre a ONG, para ter certeza
                                da existência dela e se os dados estão
                                realmente corretos.
                            </p>
                        </article>
                        <article className="my-5 d-flex flex-row flex-wrap">
                            <img src={balaoDeCoracao} alt="Dois balão com desenhos de coração no centro" />
                            <h3 className="pl-3">Pesquise um Pouquinho</h3>
                            <p className="pl-1 pt-3 m-0">
                                Se tudo estiver certinho é só checar a
                                lista da ONG, lá você vai encontrar os
                                itens que a ONG necessita. Você pode optar
                                por comprar pelo link inserido pela ONG 
                                ou qualquer outra forma que desejar.
                            </p>
                        </article>
                    </div>
                </BoxTwo>
            </Wrapper>
            <Footer />
            <ModalSmartphoneComponent
                itensNav=""
                itensCad={
                    [
                        {
                            path: "/donors/help",
                            label: "Ajuda"
                        },
                        {
                            path: "/",
                            label: "Meu Perfil"
                        },
                        {
                            path: "/authenticate/logout",
                            label: "Sair"
                        }
                    ]
                } />
        </Fragment>
    )

}