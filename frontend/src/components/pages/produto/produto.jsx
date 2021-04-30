import React, { Component } from 'react'
import axios from 'axios'
import Main from '../../template/Main'

const headerProps = {
    icon: 'truck',
    title: 'Produtos',
    subtitle: 'Adicione e remova produtos da loja'
}

const baseUrl = 'http://localhost:3001/produto'
const initialState = {
    produto: {
        id: '',
        nome: '',
        descricao: '',
        departamento: '',
        valor: '',
        ean: '',
        qtd_estoque: '',
        id_imagens_produto: '',
        id_fornecedor: ''
    },
    list: []
}

export default class Produto extends Component {

    state = { ...initialState }

    limpar() {
        this.setState({ produto: initialState.produto })
    }

    componentWillMount() {
        axios(baseUrl)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }
    adicionarEstoque(produto){
        this.state.list.forEach(element => {
            if (element === produto){
                element.qtd_estoque = ++element.qtd_estoque
                const metodo = element.id ? 'put': 'post'
                const url = element.id ? `${baseUrl}/${element.id}` : baseUrl
                axios[metodo](url, element).then(resp=>{
                    const list = this.getAtualizarLista(resp.data)
                    this.setState({ produto: initialState.produto, list})
                })
            }
        });
    }

    atualizar(produto) {
        this.setState({ produto })
    }

    excluir(produto) {
        axios.delete(`${baseUrl}/${produto.id}`)
            .then(resp => {
                const list = this.getAtualizarLista(produto, false)
                this.setState({ list })
            })
    }

    cadastrarOuAlterar() {
        const produto = this.state.produto
        const metodo = produto.id ? 'put' : 'post'
        const url = produto.id ? `${baseUrl}/${produto.id}` : baseUrl
        axios[metodo](url, produto)
            .then(resp => {
                const list = this.getAtualizarLista(resp.data)
                this.setState({ produto: initialState.produto, list })
            })
    }

    atualizarCampo(evento) {
        const produto = { ...this.state.produto }
        produto[evento.target.name] = evento.target.value
        this.setState({ produto })
    }

    getAtualizarLista(produto, adicionar = true) {
        const lista = this.state.list
            .filter(p => p.id !== produto.id)

        if (adicionar) {
            lista.unshift(produto)
        }

        return lista
    }

    renderizarFormAdmin() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="nome"
                                value={this.state.produto.nome}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="form-group">
                            <label>Descricao</label>
                            <input type="text" className="form-control"
                                name="descricao"
                                value={this.state.produto.descricao}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite detalhes do produto..." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Valor</label>
                            <input type="text" className="form-control"
                                name="valor"
                                value={this.state.produto.valor}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o valor..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Estoque</label>
                            <input type="text" className="form-control"
                                name="estoque"
                                value={this.state.produto.estoque}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o numero em estoque..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Departamento</label>
                            <input type="text" className="form-control"
                                name="departamento"
                                value={this.state.produto.departamento}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite de qual ele é..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Codigo de barra</label>
                            <input type="text" className="form-control"
                                name="ean"
                                value={this.state.produto.ean}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o codigo de barra..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Fornecedor</label>
                            <input type="text" className="form-control"
                                name="id_fornecedor"
                                value={this.state.produto.id_fornecedor}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Codigo do fornecedor..." />
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
                    <td>{dado.nome}</td>
                    <td>{dado.departamento}</td>
                    <td>{dado.ean}</td>
                    <td>{dado.valor}</td>
                    <td>{dado.qtd_estoque}</td>
                    <td>
                        <button className="btn btn-warning m-2"
                            onClick={() => this.atualizar(dado)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-secondary m-2"
                            onClick={() => this.adicionarEstoque(dado)}>
                            +1
                        </button>
                        <button className="btn btn-danger m-2"
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
            <table className="table table-responsive-md mt-4">
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Departamento</th>
                        <th scope='col'>EAN</th>
                        <th scope='col'>Valor</th>
                        <th scope='col'>Estoque</th>
                        <th scope='col'>Ações</th>
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
