import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'laptop',
    title: 'Controle Financeiro',
    subtitle: 'Controle de entrada e saida de dinheiro. Analise de lucro, gastos e investimentos'
}

export default props =>
    <Main {...headerProps}>
        <div>
            Finanças da Empresa
        </div>
    </Main>