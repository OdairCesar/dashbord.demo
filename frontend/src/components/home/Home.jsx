import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'home',
    title: 'Inicio',
    subtitle: 'Segundo Projeto do capítulo de React.'
}

export default props =>
    <Main {...headerProps}>
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção
            de um cadastro desenvolvido em React!</p>
    </Main>