import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Before Authenticate */

import Home from './pages/beforeAuthenticate/home/Home';
import Select from './pages/beforeAuthenticate/select/Select';
import RegisterOng from './pages/beforeAuthenticate/account/Ong';
import RegisterDoador from './pages/beforeAuthenticate/account/Donor';
import Login from './pages/beforeAuthenticate/account/Login'

/* After Authenticate */

import Logout from './pages/afterAuthenticate/logout/Logout'

/* Donor */
import HomeDonor from './pages/afterAuthenticate/donors/home/HomeDonor'
import Help from './pages/afterAuthenticate/donors/help/Help'
import Me from './pages/afterAuthenticate/donors/me/Me'
import MoreInfo from './pages/afterAuthenticate/donors/moreInfo/MoreInfo' 

/* Ong */
import HomeOng from './pages/afterAuthenticate/ongs/home/Home'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/authenticate/register" component={Select} exact/>
        <Route path="/authenticate/register/ong" component={RegisterOng} />
        <Route path="/authenticate/register/donor" component={RegisterDoador} />
        <Route path="/authenticate/login" component={Login}/>
        <Route path="/authenticate/logout" component={Logout}/>


        <Route path="/donors/home" component={HomeDonor} exact />
        <Route path="/donors/help" component={Help} />
        <Route path="/donors/me" component={Me} />
        <Route path="/donors/moreinfo/:id" component={MoreInfo} />

        <Route path="/ongs/home" component={HomeOng} exact />

        <Route path="*" component={() => <div>Essa página não existe</div>} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
