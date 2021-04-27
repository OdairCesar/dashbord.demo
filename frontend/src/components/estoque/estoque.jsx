import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'edit',
    title: 'Controle de Estoque',
    subtitle: 'Toda a entrada e saida de produtos no nosso estoque'
}

export default class Estoque extends Component {

    formulario() {
        return (
            <div className="from">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Produto</label>
                        <input type="text" className="form-control"
                            name="produto"
                            placeholder="Digite o nome do produto..." />
                    </div>
                    <div className="col-12 col-md-2">
                        <label>Qtd</label>
                        <input type="text" className="form-control"
                            name="qtd"
                            placeholder="Digite a quantidade..." />
                    </div>
                    <div className="col-12 col-md-4">
                        <label>Fornecedor</label>
                        <input type="text" className="form-control"
                            name="fornecedor"
                            placeholder="Digite qual o fornecedor..." />
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    tabela() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Fornecedor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.linhasTabela()}
                </tbody>
            </table>
        )
    }

    linhasTabela() {
            return (
                <tr>
                    <td>Identificador</td>
                    <td>Nome do produto</td>
                    <td>Quantidade no estoque</td>
                    <td>Nome do fornecedor</td>
                    <td>
                        <button className="btn btn-warning">
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2">
                            <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-dark ml-2">
                            <i>+1</i>
                        </button>
                        <button className="btn btn-secondary ml-2">
                            <i>-1</i>
                        </button>
                    </td>
                </tr>
            )
        }

    render() {
        return (
            <Main {...headerProps}>
                {this.formulario()}
                {this.tabela()}
            </Main>
        )
    }
}