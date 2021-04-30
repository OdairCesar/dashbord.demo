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
            <a href="#/colaborador">
                <i className="fa fa-users"></i> Colaboradores
            </a>
            <a href="#/produto" >
                <i className="fa fa-edit"></i> Produtos
            </a>
            <a href="#/fornecedor">
                <i className="fa fa-truck"></i> Fornecedores
            </a>
        </nav>
    </aside>