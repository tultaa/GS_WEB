import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 

const Signup = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    const newUser = { username, email, password };
    
    // Armazenando no localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Cadastro realizado com sucesso!');
    navigate('/login'); // Redireciona para a página de login após o cadastro
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Cadastro</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Nome de Usuário:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirmar Senha:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <div className="login-link">
          <p>Já tem uma conta? <a href="/login">Faça login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
