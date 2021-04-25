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
            <a href="#/users">
                <i className="fa fa-users"></i> Clientes
            </a>
            <a href="#/estoque">
                <i className="fa fa-edit"></i> Estoque
            </a>
            <a href="#/fornecedor">
                <i className="fa fa-truck"></i> Fornecedores
            </a>
            <a href="#/financa">
                <i className="fa fa-laptop"></i> Finanças
            </a>
        </nav>
    </aside>