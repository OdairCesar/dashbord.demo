import './Nav.css'
import React from 'react'
//import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! 
            <Link to="/">
                <i className="fa fa-home"></i> Inicio
            </Link>
            */}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/cliente">
                <i className="fa fa-users"></i> Clientes
            </a>
            <a href="#/">
                <i className="fa fa-users"></i> Colaboradores
            </a>
            <a href="#/produto" >
                <i className="fa fa-edit"></i> Produtos
            </a>
            <div id='menu' className="mini-menu">
                <a href="#/">
                    <i></i> Recebimentos
                </a>
                <a href="#/">
                    <i></i> Estoque
                </a>
                <a href="#/">
                    <i></i> Vendas
                </a>
            </div>
            <a href="#/fornecedor">
                <i className="fa fa-truck"></i> Fornecedores
            </a>
            <a href="#/financa">
                <i className="fa fa-laptop"></i> Finanças
            </a>
        </nav>
    </aside>