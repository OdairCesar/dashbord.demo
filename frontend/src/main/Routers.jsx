import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/userCrud'
import Fornecedor from '../components/fornecedor/fornecedor.jsx'
import Estoque from '../components/estoque/estoque'
import Financa from '../components/financa/financa'

export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Route path='/estoque' component={Estoque}/>
        <Route path='/fornecedor' component={Fornecedor}/>
        <Route path='/financa' component={Financa}/>
        <Redirect from='*' to='/' />
    </Switch>