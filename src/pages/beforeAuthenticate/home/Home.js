import React, { Fragment } from 'react';
import { Link } from 'react-scroll'
import Header from '../default/Header'
import Footer from '../default/Footer'

/* BOX-ONE */
import pothoBoxOne from './images/box-one/imagemTresPessoas.svg'

/* BOX-TWO */
import vetorMeninaBlack from './images/box-two/imagemMeninaBlack.svg'
import vetorMeninaDread from './images/box-two/imagemMeninaDread.svg'
import vetorSenhor from './images/box-two/vetorSenhor.svg'

/* BOX-THREE */
import vetorMeninaLivro from './images/box-three/imagemMeninaLivro.svg'

/* BOX-FOUR */
import imgArvore from './images/box-four/arvore.svg'
import imgCachorro from './images/box-four/cachorro.png'
import imgCasa from './images/box-four/casa.png'
import imgComida from './images/box-four/comida.png'
import imgLapis from './images/box-four/lapis.png'
import imgMedicina from './images/box-four/medicina.png'
import imgRefugiados from './images/box-four/refugiados.png'
import imgWoman from './images/box-four/woman.png'

/* BOX-FIVE */
import estudantesPA from './images/box-five/estudantesPa.jpg'
import noticiasVans from './images/box-five/vansTenis.jpg'
import programaContraFome from './images/box-five/programaContraFome.jpg'

/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../main.css'
import './css/styleHome.css'


function App() {
	return (
		<Fragment>
			<Header firstPage={'first'} itensCad={['Entrar', 'Cadastrar']} itensNav={['O Projeto', 'Causas', 'Artigos',]} />
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
					<h1 className="mb-5">
						Quem Somos?
					</h1>
					<div className="box-cards">
						<article className="card d-flex flex-column align-items-center" >
							<img className="card-img-top my-4" src={vetorMeninaBlack} alt="Menina de blackpower" />
							<div className="style-card-box-two card-body d-flex flex-column align-items-center">
								<h5 className="card-title mb-3">Proa</h5>
								<p className="card-text text-center">Somos fruto de uma instituição que acreditou em nós!</p>
								<a href="https://www.proa.org.br" className="link-style mb-3">Saiba Mais</a>
							</div>
						</article>
						<article className="card d-flex flex-column align-items-center" >
							<img className="card-img-top my-4" src={vetorSenhor} alt="Menina de dread" />
							<div className="style-card-box-two card-body d-flex flex-column align-items-center">
								<h5 className="card-title mb-3">Objetivos da ONU</h5>
								<p className="card-text text-center">Foi a partir da ODS 17 que identificamos nossa meta!</p>
								<a href="http://www.agenda2030.org.br/ods/17/" className="link-style mb-3">Saiba Mais</a>
							</div>
						</article>
						<article className="card d-flex flex-column align-items-center">
							<img className="card-img-top my-4" src={vetorMeninaDread} alt="Homem idoso" />
							<div className="style-card-box-two card-body d-flex flex-column align-items-center">
								<h5 className="card-title mb-3">Ligando ONGs a Pessoas</h5>
								<p className="card-text text-center">Sonhamos em criar uma grande rede solidária!</p>
								<a href="#" className="link-style mb-3">Saiba Mais</a>
							</div>
						</article>
					</div>
				</section>
				<section className="box-three d-flex">
					<img src={vetorMeninaLivro} />
					<article className="pl-4 box-text-box-three">
						<h3 className="pt-5"><strong>OnUni</strong> Faça parte dessa equipe</h3>
						<p className="text-box-three">
							A OnUni foi criada para ligar ongs e pessoas que tem
							vontade de fazer a diferença. <br />
							Acessando nossa a lista de ongs, você escolhe a causa que
							deseja apoiar, e a organização para qual vai doar. <br />
							Ao acessar a ong, selecione a lista de nescessidades dela
							e pronto. <br />
							De forma rápida e prática, você contribuirá para as causas
							que acredita.
						</p>
					</article>
				</section>
				<section id="causas" className="box-four d-flex flex-column align-items-center">
					<h1 className="mb-3">Causas</h1>
					<p className="text-center mb-5">Nós da <strong>OnUni</strong> buscamos apoiar a maior quantidade
					de causas possível, mas esses são alguns exemplos de causas que
					conseguimos alcançar.</p>
					<div className="cards-box-four d-flex flex-column align-items-center">
						<div className="line-box-four mb-5 d-flex justify-content-center">
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgArvore} alt="Árvore" />
								<h5 className="card-title title-box-four text-center">Proteção Ambiental</h5>
							</article>
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgLapis} alt="Lápis" />
								<h5 className="card-title title-box-four text-center">Educação Infantil</h5>
							</article>
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgMedicina} alt="Maleta de kit médico" />
								<h5 className="card-title title-box-four text-center">Tratamento Médico</h5>
							</article>
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgCachorro} alt="Pata de cachorro" />
								<h5 className="card-title title-box-four text-center">Proteção Animal</h5>
							</article>
						</div>
						<div className="line-box-four d-flex justify-content-center">
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgCasa} alt="casa angulo frontal" />
								<h5 className="card-title title-box-four text-center">Casa Solidária</h5>
							</article>
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgRefugiados} alt="pai, mãe e filho no colo" />
								<h5 className="card-title title-box-four text-center">Refugiados</h5>
							</article>
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgComida} alt="Prato e talheres" />
								<h5 className="card-title title-box-four text-center">Doação de Alimentos</h5>
							</article>
							<article className="card mx-2 py-4 d-flex flex-column align-items-center">
								<img className="card-img-top img-box-four mb-4" src={imgWoman} alt="Mulher" />
								<h5 className="card-title title-box-four text-center">Violência Doméstica</h5>
							</article>
						</div>
					</div>
				</section>
				<section id="artigos" className="box-five d-flex flex-column align-items-center">
					<h1 className="text-center mb-3">Histórias de Sucesso</h1>
					<p className="text-presentation-box-five text-center mb-5">Postamos aqui algumas ações tranformadores que ocorrem pelo mundo,
					para que possam ser vistas pelo nossos usários </p>
					<div className="box-five-articles d-flex ">
						<article className="card mx-3">
							<img src={noticiasVans} className="card-img-top" alt="Dois pés com tênis da marca Vans em cima de um amplificador" />
							<div className="card-body d-flex flex-column justify-content-between">
								<p className="card-text">Vans doará US$ 1 milhão para instituições que trabalham com saúde mental.</p>
								<div className="d-flex justify-content-between align-items-end">
									<span className="fs-6">06, novembro de 2020</span>
									<a href="https://www.vans.com.br/?gclid=CjwKCAiAqJn9BRB0EiwAJ1SztdXm_urGdcdZcNDvmFRS5tSTc_WOQzrsXZO75uNjQzoxZjogITqAtBoCUfsQAvD_BwE"
										className="link-style" target="_blank" rel="noreferrer">Leia Mais</a>
								</div>
							</div>
						</article>
						<article className="card mx-3">
							<img src={programaContraFome} className="card-img-top" alt="Grande grupo de pessoas tirando foto para comemoração pelo sucesso do programa" />
							<div className="card-body d-flex flex-column justify-content-between">
								<p className="card-text">Prêmio Nobel da Paz 2020 vai para o maior programa contra a fome do mundo.</p>
								<div className="d-flex justify-content-between align-items-end">
									<span className="fs-6">14, outubro de 2020</span>
									<a href="https://news.un.org/pt/tags/programa-mundial-de-alimentos"
										className="link-style" target="_blank" rel="noreferrer">Leia Mais</a>
								</div>
							</div>
						</article>
						<article className="card mx-3">
							<img src={estudantesPA} className="card-img-top" alt="Fotos de estudantes do Pará ao lado do projeto" />
							<div className="card-body d-flex flex-column justify-content-between">
								<p className="card-text">Estudantes do PA criam ecobarreira que impede plástico de chegar ao oceano.</p>
								<div className="content-box-five d-flex justify-content-between align-items-end">
									<span className="fs-6">11, setembro de 2020</span>
									<a href="https://portal.ufpa.br/index.php/ultimas-noticias2/11439-novo-projeto-do-time-enactus-ufpa-conquista-reconhecimento-nacional"
										className="link-style" target="_blank" rel="noreferrer">Leia Mais</a>
								</div>
							</div>
						</article>
					</div>
				</section>
			</div>
			<Footer />
			<div id="modalMenuSmartphone" className="modal-smartphone">
				<aside className="aside-navbar-menu-smartphone d-flex 
				align-items-center flex-column">
					<ul className="list-menu-smartphone mt-5">
						<li>
							<Link to={'oprojeto'} spy={true} smooth={true} duration={500}>
								O Projeto
							</Link>
						</li>
						<li>
							<Link to={'causas'} spy={true} smooth={true} duration={500}>
								Causas
							</Link>
						</li>
						<li>
							<Link to={'artigos'} spy={true} smooth={true} duration={500}>
								Artigos
							</Link>
						</li>
					</ul>
					<ul className="list-menu-smartphone mt-3 text-white">
						<li>
							<a>
								Entrar
							</a>
						</li>
						<li>
							<a>
								Cadastrar
							</a>
						</li>
					</ul>
				</aside>
			</div>
		</Fragment>
	);
}

export default App;
