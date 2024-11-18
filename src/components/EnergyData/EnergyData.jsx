import React, { useEffect, useState } from 'react';
import './EnergyData.css';

const EnergyData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = 'ad714a201567120b2938f98969a29fe7'; // Sua chave da API
    const LAT = '-23.5505';  // Latitude de São Paulo
    const LON = '-46.6333';  // Longitude de São Paulo

    const fetchEnergyData = async () => {
      try {
        // Verificar se os dados já estão no localStorage
        const storedData = localStorage.getItem('weatherData');
        const storedDataTime = localStorage.getItem('dataFetchTime');
        const currentTime = new Date().getTime();

        // Se houver dados armazenados e não estiverem muito antigos, use-os
        if (storedData && storedDataTime && currentTime - storedDataTime < 3600000) { // 1 hora em milissegundos
          console.log('Usando dados do localStorage');
          setData(JSON.parse(storedData));
          setLoading(false);
        } else {
          // Caso contrário, faça a requisição à API
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=pt`
          );

          if (!response.ok) {
            throw new Error('Erro ao buscar dados');
          }

          const data = await response.json();
          console.log('Dados da API:', data);

          // Armazenar os dados e a hora da requisição no localStorage
          localStorage.setItem('weatherData', JSON.stringify(data));
          localStorage.setItem('dataFetchTime', currentTime.toString());

          setData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchEnergyData();
  }, []);

  // Para evitar dados repetidos ou duplicados
  const uniqueForecasts = data ? [...new Map(data.list.map(item => [item.dt_txt, item])).values()] : [];

  return (
    <div className="energy-data">
      <h1>Previsão de Clima</h1>

      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <div>
          <h2>Previsões de Tempo em <span className="highlight">{data.city.name}, {data.city.country}</span></h2>
          {/* Exibindo os dados recebidos da API */}
          {data ? (
            <div>
              <h3>Previsões no intervalo de 3 Horas:</h3>
              <ul>
                {uniqueForecasts.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <br></br>
                    <p><strong>Data:</strong> {new Date(item.dt * 1000).toLocaleString()}</p>
                    <p><strong>Temperatura:</strong> {item.main.temp}°C</p> {/* Temperatura em °C */}
                    <p><strong>Descrição:</strong> {item.weather[0].description}</p> {/* Descrição do clima */}
                    <p><strong>Velocidade do vento:</strong> {item.wind.speed} km/h</p> {/* Velocidade em km/h */}
                    <p><strong>Humidade:</strong> {item.main.humidity}%</p> {/* Umidade */}
                    <br></br>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Não há dados disponíveis para exibição</p>
          )}
        </div>
      )}
    </div>
  );
}

export default EnergyData;
