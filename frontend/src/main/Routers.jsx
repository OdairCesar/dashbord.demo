import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/pages/home/Home'
import Cliente from '../components/pages/cliente/cliente'
import Colab from '../components/pages/colaborador/colaborador'
import Fornecedor from '../components/pages/fornecedor/fornecedor.jsx'
import Produto from '../components/pages/produto/produto'
import Financa from '../components/pages/financa/financa'

export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cliente' component={Cliente}/>
        <Route path='/colaborador' component={Colab}/>
        <Route path='/produto' component={Produto}/>
        <Route path='/fornecedor' component={Fornecedor}/>
        <Route path='/financa' component={Financa}/>
        <Redirect from='*' to='/' />
    </Switch>