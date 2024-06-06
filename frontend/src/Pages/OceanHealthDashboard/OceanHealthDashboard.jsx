import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OceanHealthDashboard.scss'; // Importe o arquivo SCSS

const OceanHealthDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/ocean-health');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-3">Carregando...</div>;
  if (error) return <div className="alert alert-danger" role="alert">Erro: {error}</div>;

  return (
    <div className="container my-5 ocean-health-dashboard">
      <h1 className="mb-4 text-center">Ocean Health Dashboard</h1>
      {data.map((item, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.location}</h5>
            <p className="card-text"><strong>Water Quality:</strong> {item.water_quality}</p>
            <p className="card-text"><small className="text-muted">Date: {item.date}</small></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OceanHealthDashboard;
