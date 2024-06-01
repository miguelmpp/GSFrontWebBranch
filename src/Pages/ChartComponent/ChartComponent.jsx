import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChartComponent.scss'; // Importe o arquivo Sass

Chart.register(...registerables);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://services3.arcgis.com/pI4ewELlDKS2OpCN/arcgis/rest/services/SDG_14_1_1_Plastic_debris_density/FeatureServer/0/query', {
          params: {
            where: '1=1',
            outFields: '*',
            geometry: '-48.662,-25.107,-39.235,-21.577',
            geometryType: 'esriGeometryEnvelope',
            inSR: 4326,
            spatialRel: 'esriSpatialRelIntersects',
            outSR: 4326,
            f: 'json'
          }
        });

        console.log('API Response:', response.data);

        if (response.data && response.data.features) {
          const data = response.data.features;
          console.log('Data:', data);

          const labels = data.map(entry => {
            const timestamp = entry.attributes.obsTime;
            const date = new Date(timestamp);
            return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString();
          });

          const values = data.map(entry => entry.attributes.obsValue || 0);

          console.log('Labels:', labels);
          console.log('Values:', values);

          setChartData({
            labels,
            datasets: [
              {
                label: 'Beach Litter Count per Square Kilometer',
                data: values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }
            ]
          });
        } else {
          setError('Os dados retornados pela API estão vazios ou no formato incorreto.');
        }
      } catch (error) {
        setError('Erro ao buscar dados da API: ' + error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">Erro: {error}</div>;
  }

  return (
    <div className="container_dashboard">
      <div className='container'>
        <h2 className="header_dashboard">Contagem de lixo na praia por quilômetro quadrado do eixo RIO SP</h2>
        <div className="chart-container">
          {chartData.labels ? <Line data={chartData} /> : <p>Carregando dados...</p>}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
