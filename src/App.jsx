import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';  // Importando o Header
import Footer from './components/Footer/Footer';  // Importando o Footer
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContentPage from './pages/ContentPage/ContentPage';
import Details from './pages/Details/Details';
import EnergyData from './components/EnergyData/EnergyData';  // Importando a página de Dados de Energia
import Signup from './components/Signup/Signup'; // Importando a página de Cadastro
import Login from './components/Login/Login';   // Importando a página de Login
import Account from './components/Account/Account'; // Página da conta após login

const App = () => {
  return (
    <Router>
      <Header /> {/* Header incluído aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<ContentPage />} /> {/* Página de Conteúdos */}
        <Route path="/details/:id" element={<Details />} /> {/* Rota de detalhes do conteúdo */}
        <Route path="/energydata" element={<EnergyData />} /> {/* Rota para a página de Dados da API */}
        <Route path="/signup" element={<Signup />} />   {/* Rota para Cadastro */}
        <Route path="/login" element={<Login />} />     {/* Rota para Login */}
        <Route path="/account" element={<Account />} />  {/* Rota para a Página da Conta */}
      </Routes>
      <Footer /> {/* Footer incluído aqui */}
    </Router>
  );
}

export default App;
