import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };

  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="account-container">
      <div className="account-details">
        <h2>Minha Conta</h2>
        {storedUser ? (
          <div className="user-info">
            <p><strong>Nome:</strong> {storedUser.username}</p>
            <p><strong>Email:</strong> {storedUser.email}</p>
            <button onClick={handleLogout}>Sair</button>
          </div>
        ) : (
          <p>Você não está logado. Por favor, faça login.</p>
        )}
      </div>
    </div>
  );
};

export default Account;
