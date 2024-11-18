import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('loggedIn', true);
        navigate('/account');
      } else {
        setError('Email ou senha incorretos!');
      }
    } else {
      setError('Nenhum usuário encontrado. Por favor, cadastre-se.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit">Entrar</button>
        </form>
        <div className="signup-link">
          <p>Ainda não tem uma conta? <a href="/signup">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
