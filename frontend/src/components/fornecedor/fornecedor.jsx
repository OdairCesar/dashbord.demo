import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'truck',
    title: 'Fornecimento de Produtos',
    subtitle: 'Controle de compras, trocas e devolução de produtos'
}

export default props =>
    <Main {...headerProps}>
        <div>
            Fornecedor
        </div>
    </Main>