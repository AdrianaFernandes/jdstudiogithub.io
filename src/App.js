import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/index';
import Servicos from './Servicos';
import Sobre from './Sobre';
import Contato from './Contato';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/sobre-equipe' component={Sobre} />
        <Route path='/contato' component={Contato} />
      </Switch>
    </Router>
  )
}

export default App
