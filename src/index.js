import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/beforeAuthenticate/home/Home';
import Select from './pages/beforeAuthenticate/select/Select'
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/authenticate/cadastrar" component={Select} />
        <Route component={() => <div>Essa página não existe</div>} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
