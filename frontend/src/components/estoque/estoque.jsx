import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'edit',
    title: 'Controle de Estoque',
    subtitle: 'Toda a entrada e saida de produtos no nosso estoque'
}

export default props =>
    <Main {...headerProps}>
        <div>
            Estoque
        </div>
    </Main>