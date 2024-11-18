import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Green House</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/content">Conteúdos</Link></li>
          <li><Link to="/energydata">Dados API</Link></li>
          <li><Link to="/login">Login</Link></li> 
          <li><Link to="/signup">Cadastro</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
