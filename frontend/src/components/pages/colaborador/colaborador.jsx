import React, { Component } from 'react'
import Main from '../../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Colaborador',
    subtitle: 'Adicione funcionario'
}

/** Estado iniciar do DB */
const baseUrl = 'http://localhost:3001/colaborador'
const initialState = {
    colaborador: {
        name: '',
        funcao: '',
        email: '',
        data_contrat: '',
        endereco: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        telefone: '',
        celular: '',
        sexo: '',
        data_nasc: '',
        cpf: '',
        rg: '',
        cart_trab: '',
        contratado_por: ''
    },
    list: []
}

export default class Colaborador extends Component {

    state = { ...initialState }

    limpar() {
        this.setState({ colaborador: initialState.colaborador })
    }

    componentWillMount() {
        axios(baseUrl)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    atualizar(colaborador) {
        this.setState({ colaborador })
    }

    excluir(colaborador) {
        axios.delete(`${baseUrl}/${colaborador.id}`)
            .then(resp => {
                const list = this.getAtualizarLista(colaborador, false)
                this.setState({ list })
            })
    }

    cadastrarOuAlterar() {
        const colaborador = this.state.colaborador
        const metodo = colaborador.id ? 'put' : 'post'
        const url = colaborador.id ? `${baseUrl}/${colaborador.id}` : baseUrl
        axios[metodo](url, colaborador)
            .then(resp => {
                const list = this.getAtualizarLista(resp.data)
                this.setState({ colaborador: initialState.colaborador, list })
            })
    }

    atualizarCampo(evento) {
        const colaborador = { ...this.state.colaborador }
        colaborador[evento.target.name] = evento.target.value
        this.setState({ colaborador })
    }

    getAtualizarLista(colaborador, adicionar = true) {
        const lista = this.state.list
            .filter(c => c.id !== colaborador.id)

        if (adicionar) {
            lista.unshift(colaborador)
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
                                value={this.state.colaborador.nome}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Função</label>
                            <input type="text" className="form-control"
                                name="funcao"
                                value={this.state.colaborador.funcao}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o função na empresa..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Sexo</label>
                            <input type="text" className="form-control"
                                name="sexo"
                                value={this.state.colaborador.sexo}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="SP" />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="date" className="form-control"
                                name="data_nasc"
                                value={this.state.colaborador.data_nasc}
                                onChange={e => this.atualizarCampo(e)}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Data de contratação</label>
                            <input type="date" className="form-control"
                                name="data_contrat"
                                value={this.state.colaborador.data_contrat}
                                onChange={e => this.atualizarCampo(e)} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control"
                                name="endereco"
                                value={this.state.colaborador.endereco}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o endereço..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>CEP</label>
                            <input type="number" className="form-control"
                                name="cep"
                                value={this.state.colaborador.cep}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o CEP..." 
                                maxlength="8"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>Bairro</label>
                            <input type="text" className="form-control"
                                name="bairro"
                                value={this.state.colaborador.bairro}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o bairro..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control"
                                name="cidade"
                                value={this.state.colaborador.cidade}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite a cidade..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-1">
                        <div className="form-group">
                            <label>UF</label>
                            <input type="text" className="form-control"
                                name="estado"
                                value={this.state.colaborador.estado}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="SP" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="e-mail" className="form-control"
                                name="email"
                                value={this.state.colaborador.email}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o E-mail..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="tel" className="form-control"
                                name="telefone"
                                value={this.state.colaborador.telefone}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o Telefone..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>Celular</label>
                            <input type="tel" className="form-control"
                                name="celular"
                                value={this.state.colaborador.celular}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o celular..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="number" className="form-control"
                                name="cpf"
                                value={this.state.colaborador.cpf}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o CPF..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="form-group">
                            <label>RG</label>
                            <input type="number" className="form-control"
                                name="rg"
                                value={this.state.colaborador.rg}
                                onChange={e => this.atualizarCampo(e)}
                                placeholder="Digite o RG..." />
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
                    <td>{dado.funcao}</td>
                    <td>{dado.email}</td>
                    <td>{dado.celular}</td>
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
