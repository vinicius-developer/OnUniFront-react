import React, { Fragment } from 'react';
import Header from '../default/Header'
import Footer from '../default/Footer'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../main.css'

function App() {
  return (
    <Fragment>
      <Header itensCad={['Entrar', 'Cadastrar']} itensNav={['O projeto', 'Causas', 'Artigos',]} />
      <Footer />
    </Fragment>
  );
}

export default App;