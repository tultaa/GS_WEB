import React from 'react';
import { Link } from 'react-router-dom';
import './ContentPage.css';

const ContentPage = () => {
  return (
    <div className="content-page">
      <h1>Nossos Conteúdos</h1>
      <div className="content-cards">
        <div className="content-card">
          <Link to="/details/1">
            <img src="/thsline.jpg" alt="Conteúdo 1" />
            <div className="card-overlay">
              <p>Conteúdo 1: Tecnologias de Energia Renovável</p>
            </div>
          </Link>
        </div>
        <div className="content-card">
          <Link to="/details/2">
            <img src="/solarline.jpg" alt="Conteúdo 2" />
            <div className="card-overlay">
              <p>Conteúdo 2: Eficiência Energética em Edifícios</p>
            </div>
          </Link>
        </div>
        <div className="content-card">
          <Link to="/details/3">
            <img src="/segusiline.jpg" alt="Conteúdo 3" />
            <div className="card-overlay">
              <p>Conteúdo 3: Inovações em Energia Solar</p>
            </div>
          </Link>
        </div>
        <div className="content-card">
          <Link to="/details/4">
            <img src="/eoliline.jpg" alt="Conteúdo 4" />
            <div className="card-overlay">
              <p>Conteúdo 4: Como Economizar Energia em Casa</p>
            </div>
          </Link>
        </div>
      </div>

      <section className="content-summary">
        <h2>Por Que Ler Nossos Conteúdos?</h2>
        <p>
          A energia renovável é a chave para um futuro mais sustentável e menos dependente dos combustíveis fósseis. Em nossos conteúdos, exploramos as mais recentes tecnologias e inovações no campo da energia limpa, desde as fontes renováveis como solar e eólica até soluções de eficiência energética em edifícios.
        </p>
        <p>
          Ao entender como essas tecnologias podem ser aplicadas em nossas casas e empresas, você aprende a economizar energia, reduzir custos e contribuir para a preservação do planeta. Se você está interessado em aprender como adotar práticas mais sustentáveis no seu dia a dia, nossos conteúdos são para você.
        </p>
        <p>
          A economia de energia não é apenas uma questão de redução de custos, mas também uma forma de proteger nossos recursos naturais e combater as mudanças climáticas. Nossos artigos vão te guiar por essa jornada de conscientização e prática, com informações valiosas sobre como aplicar a energia renovável e técnicas de eficiência energética em sua vida.
        </p>
      </section>
    </div>
  );
}

export default ContentPage;
