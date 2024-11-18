import React from 'react';
import { useParams } from 'react-router-dom'; // Para capturar o id da URL
import './Details.css'; // Estilos para a página de detalhes

const detailsData = {
  1: {
    title: "Tecnologias de Energia Renovável",
    image: "/thsline.jpg",
    content: `
      A energia renovável é uma das soluções mais promissoras para combater as mudanças climáticas. As tecnologias mais comuns incluem solar, eólica e hidrelétrica. Cada uma dessas fontes de energia limpa tem suas próprias vantagens e desafios. 

       Principais Tecnologias:
      - Solar: Converte a luz do sol em eletricidade através de células fotovoltaicas.
      - Eólica: Usa o vento para gerar eletricidade com turbinas.
      - Hidrelétrica: Utiliza o movimento da água para gerar eletricidade.
      
      Essas fontes de energia estão cada vez mais acessíveis e eficientes, e sua implementação global tem aumentado significativamente nos últimos anos.`,
  },
  2: {
    title: "Eficiência Energética em Edifícios",
    image: "/solarline.jpg",
    content: `
      A eficiência energética é a prática de reduzir o consumo de energia sem comprometer o conforto ou a funcionalidade de um edifício. Isso pode ser alcançado por meio de melhorias no design, isolamento e uso de tecnologias inteligentes.
      
       Dicas para melhorar a eficiência energética:
      - Isolamento: Reduz a perda de calor no inverno e mantém o ambiente fresco no verão.
      - Tecnologias inteligentes: Sistemas automatizados de controle de temperatura, iluminação e ventilação.
      - Fontes de energia renovável: Como o uso de painéis solares para abastecer o edifício.
      
      A eficiência energética não só reduz os custos com eletricidade, mas também contribui para a sustentabilidade ambiental.`,
  },
  3: {
    title: "Inovações em Energia Solar",
    image: "/segusiline.jpg",
    content: `
      A energia solar está evoluindo rapidamente, com novas inovações que aumentam a eficiência e reduzem os custos. As tecnologias mais recentes incluem painéis solares bifaciais e células solares orgânicas.
      
       Inovações importantes:
      - Painéis solares bifaciais: Capturam luz solar de ambos os lados, aumentando a eficiência.
      - Células solares orgânicas: Mais baratas de produzir e flexíveis, permitindo novas aplicações.
      
      A energia solar continuará a desempenhar um papel crucial na transição para fontes de energia renovável.`,
  },
  4: {
    title: "Como Economizar Energia em Casa",
    image: "/eoliline.jpg",
    content: `
      Economizar energia em casa não só reduz sua conta de eletricidade, mas também ajuda a proteger o meio ambiente. Existem várias maneiras simples de reduzir o consumo de energia sem comprometer o conforto.
      
       Dicas práticas:
      - Desligar aparelhos eletrônicos: Não deixe equipamentos em stand-by.
      - Trocar lâmpadas: Lâmpadas LED consomem muito menos energia do que as tradicionais.
      - Ajustar a temperatura: Ajuste o termostato para um nível confortável, mas sem excessos.
      
      Essas ações simples podem gerar grandes economias a longo prazo e ainda ajudar o planeta.`,
  },
};

const Details = () => {
  const { id } = useParams(); // Captura o id da URL
  const content = detailsData[id];

  if (!content) {
    return <h2>Conteúdo não encontrado</h2>; // Caso o conteúdo não exista
  }

  return (
    <div className="details">
      <h1>{content.title}</h1>
      <img src={content.image} alt={content.title} className="content-image" />
      <div className="content-text">
        <p>{content.content}</p>
      </div>
    </div>
  );
}

export default Details;
