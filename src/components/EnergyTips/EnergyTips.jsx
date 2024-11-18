import React, { useEffect, useState } from "react";
import "./EnergyTips.css";


import tipsData from "../../data/energyTips.json";

const EnergyTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    
    setTips(tipsData);
  }, []);

  return (
    <div className="energy-tips">
      <h2>Dicas para Economia de Energia no mundo Tech!</h2>
      <ul>
        {tips.map((tip) => (
          <li key={tip.id}>
            <h3>{tip.title}</h3>
            <p>{tip.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyTips;
