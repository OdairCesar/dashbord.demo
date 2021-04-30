import React, { Component } from 'react'
import axios from 'axios'
import Main from '../../template/Main'

const headerProps = {
    icon: 'truck',
    title: 'Fornecimento de Produtos',
    subtitle: 'Controle de compras, trocas e devolução de produtos'
}

const baseUrl = 'http://localhost:3001/fornecedor'
const initialState = {
    fornecedor: {
        racao_social: '',
        ramo: '',
        cnpj: '',
        email: '',
        endereco: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        telefone: '',
        celular: '',
        temp_medio_entrega: '',
        adicionado_por: '1'
    },
    list: []
}

export default class Fornecedor extends Component {

    state = { ...initialState }

    limpar() {
        this.setState({ fornecedor: initialState.fornecedor })
    }

    componentWillMount() {
        axios(baseUrl)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    atualizar(fornecedor) {
        this.setState({fornecedor })
    }

    excluir(fornecedor) {
        axios.delete(`${baseUrl}/${fornecedor.id}`)
            .then(resp => {
                const list = this.getAtualizarLista(fornecedor, false)
                this.setState({ list })
            })
    }

    cadastrarOuAlterar() {
        const fornecedor = this.state.fornecedor
        const metodo = fornecedor.id ? 'put' : 'post'
        const url = fornecedor.id ? `${baseUrl}/${fornecedor.id}` : baseUrl
        axios[metodo](url, fornecedor)
            .then(resp => {
                const list = this.getAtualizarLista(resp.data)
                this.setState({ fornecedor: initialState.fornecedor, list })
            })
    }

    atualizarCampo(evento) {
        const fornecedor = { ...this.state.fornecedor }
        fornecedor[evento.target.name] = evento.target.value
        this.setState({ fornecedor })
    }

    getAtualizarLista(fornecedor, adicionar = true) {
        const lista = this.state.list
            .filter(f => f.id !== fornecedor.id)

        if (adicionar) {
            lista.unshift(fornecedor)
        }

        return lista
    }

    renderizarFormAdmin() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Ração Social</label>
                            <input type="text" className="form-control"
                                name="racao_social"
                                value={this.state.fornecedor.racao_social}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Ramo</label>
                            <input type="text" className="form-control"
                                name="ramo"
                                value={this.state.fornecedor.ramo}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o ramo da empresa..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>CNPJ</label>
                            <input type="text" className="form-control"
                                name="cnpj"
                                value={this.state.fornecedor.cnpj}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o CNPJ..." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.fornecedor.email}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Celular</label>
                            <input type="text" className="form-control"
                                name="celular"
                                value={this.state.fornecedor.celular}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o celular..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control"
                                name="telefone"
                                value={this.state.fornecedor.telefone}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o Telefone..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>CEP</label>
                            <input type="text" className="form-control"
                                name="cep"
                                value={this.state.fornecedor.cep}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o CEP..." />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control"
                                name="endereco"
                                value={this.state.fornecedor.endereco}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o Endereço..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Bairro</label>
                            <input type="text" className="form-control"
                                name="bairro"
                                value={this.state.fornecedor.bairro}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o bairro..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control"
                                name="cidade"
                                value={this.state.fornecedor.cidade}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite a cidade..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-1">
                        <div className="form-group">
                            <label>UF</label>
                            <input type="text" className="form-control"
                                name="estado"
                                value={this.state.fornecedor.estado}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="SP" />
                        </div>
                    </div>

                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.cadastrarOuAlterar(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.limpar()}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderizarLinhas() {
        return this.state.list.map(dado => {
            return (
                <tr key={dado.id}>
                    <td>{dado.id}</td>
                    <td>{dado.racao_social}</td>
                    <td>{dado.email}</td>
                    <td>{dado.telefone}</td>
                    <td>{dado.cidade}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.atualizar(dado)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.excluir(dado)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })

    }

    renderizarTabela() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderizarLinhas()}
                </tbody>
            </table>
        )

    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderizarFormAdmin()}
                {this.renderizarTabela()}
            </Main>
        )
    }
}
