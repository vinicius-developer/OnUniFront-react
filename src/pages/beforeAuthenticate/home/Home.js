import React, { Fragment } from 'react';
import Header from '../default/Header'
import Footer from '../default/Footer'

import pothoBoxOne from '../../../images/box-one/imagemTresPessoas.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../main.css'

function App() {
	return (
		<Fragment>
			<Header firstPage={'first'} itensCad={['Entrar', 'Cadastrar']} itensNav={['Quem Somos?', 'Causas', 'Artigos',]} />
			<div className='body'>
				<section id="first" className="box-one d-flex flex-column align-items-center">
					<h1 className="mt-3">
						OnUni
					</h1>
					<h2 className="text-center mb-3">
						Ajudando você a ajudar outras pessoas
					</h2>
					<img src={pothoBoxOne} alt="três pessoas olhando para tela" />
				</section>
				<section id="oprojeto" className="box-two d-flex flex-column align-items-center">
					<h1 className="my-5">
						Quem Somos?
					</h1>
					<div className="box-cards">
						<article className="card" >
							<img  className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</article>
						<article className="card" >
							<img className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</article>
						<article className="card">
							<img className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</article>
					</div>
				</section>
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
