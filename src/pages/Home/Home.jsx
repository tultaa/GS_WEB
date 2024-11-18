import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link para navegação
import './Home.css';
import EnergyTips from '../../components/EnergyTips/EnergyTips'; // Importando o componente EnergyTips

const Home = () => {
  return (
    <div className="home">
      <h1>Bem-vindo à <span className="highlight">Green House</span></h1>
      <p>Temos tudo o que precisa saber para um mundo mais Verde</p>

      <EnergyTips /> {/* Componente de dicas de energia */}

      <section className="related-content">
        <h2>Conteúdo Relacionado</h2>
        <div className="related-cards">
          <Link to="/details/1" className="related-card">
            <img src="/thsline.jpg" alt="Conteúdo 1" />
            <div className="card-overlay">
              <p>Conteúdo 1: Tecnologias de Energia Renovável</p>
            </div>
          </Link>
          <Link to="/details/2" className="related-card">
            <img src="/segusiline.jpg" alt="Conteúdo 2" />
            <div className="card-overlay">
              <p>Conteúdo 2: Eficiência Energética em Edifícios</p>
            </div>
          </Link>
          <Link to="/details/3" className="related-card">
            <img src="/solarline.jpg" alt="Conteúdo 3" />
            <div className="card-overlay">
              <p>Conteúdo 3: Inovações em Energia Solar</p>
            </div>
          </Link>
          <Link to="/details/4" className="related-card">
            <img src="/eoliline.jpg" alt="Conteúdo 4" />
            <div className="card-overlay">
              <p>Conteúdo 4: Como Economizar Energia em Casa</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="api-section">
        <Link to="/energydata" className="btn-link">Acessar Dados de Energia - API</Link>
      </div>
    </div>
  );
}

export default Home;
