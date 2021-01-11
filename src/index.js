import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/beforeAuthenticate/home/Home';
import Select from './pages/beforeAuthenticate/select/Select';
import Ong from './pages/beforeAuthenticate/register/Ong';
import Doador from './pages/beforeAuthenticate/register/Doador';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/authenticate/cadastrar" component={Select} exact/>
        <Route path="/authenticate/cadastrar/ong" component={Ong} />
        <Route path="/authenticate/cadastrar/doador" component={Doador} />
        <Route path="*" component={() => <div>Essa página não existe</div>}/>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
