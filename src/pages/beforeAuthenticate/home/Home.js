import React, { Fragment } from 'react';
import Header from '../default/Header'
import Footer from '../default/Footer'

import pothoBoxOne from '../../../images/box-one/imagemTresPessoas.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../main.css'

function App() {
	return (
		<Fragment>
			<Header itensCad={['Entrar', 'Cadastrar']} itensNav={['O projeto', 'Causas', 'Artigos',]} />
			<div className='body'>
				<section className="box-one d-flex flex-column align-items-center">
					<h1>
						Teste
					</h1>
					<h2>
						Ajudando você a ajudar outras pessoas
					</h2>
					<img href={pothoBoxOne} name="três pessoas olhando para tela"/>
				</section>
			</div> 
			<Footer />
		</Fragment>
	);
}

export default App;
