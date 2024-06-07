# Ocean Health Tracker

## Alunos

- **Matheus Farias de Lima** - RM554254
- **Miguel Mauricio Parrado Patarroyo** – RM554007

## Descrição do Projeto

O **Ocean Health Tracker** é uma plataforma desenvolvida para monitorar e analisar dados sobre a saúde dos oceanos. Utilizando tecnologias modernas de desenvolvimento web e análise de dados, a aplicação visa fornecer uma interface interativa e responsiva que permita aos usuários acessar informações detalhadas sobre as condições dos oceanos em tempo real. Este projeto é resultado da integração de conhecimentos das disciplinas de Web Development, Frontend Design e Computational Thinking with Python.

### Objetivos

- Monitorar a saúde dos oceanos em tempo real.
- Fornecer análises preditivas e insights acionáveis.
- Facilitar a tomada de decisões estratégicas para a conservação marinha.

## Tecnologias Utilizadas

### Web Development e Frontend Design

- **React**
- **Bootstrap**
- **Sass (SCSS)**
- **Axios**
- **React Router**
- **Chart.js**
- **Vite**

### Computational Thinking with Python

- **Python**
- **Flask**
- **Requests**
- **Flask-CORS**
- **Pandas**
- **Scikit-learn**

## Funcionalidades

### Frontend Design

- **Responsividade:** Abordagem mobile-first para garantir uma ótima experiência em dispositivos móveis e desktops.
- **Flexbox:** Criação de layouts flexíveis e responsivos.
- **Bootstrap:** Utilizado para padronizar e acelerar o desenvolvimento do código.
- **Sass:** Scripts de Sass para estilização do código.

### Web Development

- **Versionamento:** Utilização de Git e GitHub para controle de versão.
- **Manipulação de Branchs:** Uso de branches para desenvolvimento de novas funcionalidades e correções.
- **Consumo de API Interna:** Dados de fases do projeto consumidos a partir de uma API interna (JSON).
- **Consumo de API Externa:** Dados sobre a saúde dos oceanos obtidos de uma API pública.
- **Efeitos Diversos:** Implementação de efeitos para melhorar a experiência do usuário.
- **Validação:** Validação de formulários.
- **Carrossel Dinâmico:** Carrossel de imagens dinâmico na landing page.
- **Manipulação do DOM:** Manipulação direta do DOM para responder às interações do usuário.
- **Boas Práticas:** Código estruturado seguindo as boas práticas de desenvolvimento web.

### Computational Thinking with Python

- **Captura de Dados:** Captura de dados de qualidade da água de uma API externa.
- **Processamento de Dados:** Processamento e apresentação dos dados de forma estruturada.
- **Interface Interativa:** Integração da API com um frontend desenvolvido em React para visualização dos dados.
- **Manipulação de Arquivos:** Salvamento dos dados processados.
- **Tratamento de Exceções:** Garantia de robustez do sistema com tratamento de exceções.

## Estrutura de Arquivos

```bash
GSFrontWebBranch/
├── backend/
│   ├── app.py
│   ├── data.json
│   └── requirements.txt
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   └── images/
    │   ├── components/
    │   ├── pages/
    │   │   ├── AboutUs.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Home.jsx
    │   │   ├── OceanHealthDashboard.jsx
    │   │   ├── ChartComponent.jsx
    │   │   ├── PageNotFound.jsx
    │   │   └── ...
    │   ├── App.jsx
    │   ├── index.jsx
    │   └── ...
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
Instalação
Backend (API em Python)
Clone o repositório:

sh
Copiar código
git clone [URL do repositório]
cd [nome do repositório]/backend
Crie um ambiente virtual e ative-o:

sh
Copiar código
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows
Instale as dependências:

sh
Copiar código
pip install -r requirements.txt
Execute a aplicação:

sh
Copiar código
python app.py
A API estará disponível em http://127.0.0.1:5000.

Frontend (React)
Navegue até o diretório do frontend:

sh
Copiar código
cd ../frontend
Instale as dependências:

sh
Copiar código
npm install
Execute a aplicação:

sh
Copiar código
npm run dev
A interface estará disponível em http://localhost:5173.

Uso
Exemplos de Uso
Página Inicial (Home)
Consumo de API Interna (JSON): Apresenta informações sobre as fases do projeto.
Carrossel Dinâmico: Apresenta informações importantes sobre a plataforma.
Seções Informativas: Descrição dos principais benefícios e funcionalidades do "Ocean Health Tracker".
jsx
Copiar código
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    const fetchPhases = async () => {
      const response = await axios.get('http://127.0.0.1:5000/api/phases');
      setPhases(response.data);
    };

    fetchPhases();
  }, []);

  return (
    <div className="services" id="services">
      <Container>
        <h2 className="special-heading">Fases do Projeto</h2>
        <p>Abordagem de Desenvolvimento</p>
        <div className="services-content">
          {phases.map((phase, index) => (
            <div key={index} className="col">
              <div className="srv">
                <i className={`fas ${phase.icon} fa-2x`}></i>
                <div className="text">
                  <h3>{phase.title}</h3>
                  {phase.descriptions.map((desc, idx) => (
                    <p key={idx}><strong>{desc.title}:</strong> {desc.content}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
Contato (Contact)
Formulário de Contato: Permite que usuários enviem mensagens.
Validação: Validação dos campos do formulário antes do envio.
Dashboard de Saúde dos Oceanos (OceanHealthDashboard.jsx)
Exibição de Dados Processados: Exibe dados sobre a qualidade da água em diferentes regiões obtidos de uma API interna desenvolvida em Python.
jsx
Copiar código
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OceanHealthDashboard.scss';

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
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.location}</h5>
                <p className="card-text"><strong>Water Quality:</strong> {item.water_quality}</p>
                <p className="card-text"><small className="text-muted">Date: {item.date}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OceanHealthDashboard;
Gráficos de Dados (ChartComponent.jsx)
Consumo de API Externa: Exibe dados sobre a contagem de lixo na praia por quilômetro quadrado obtidos de uma API pública.
jsx
Copiar código
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChartComponent.scss';

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

        if (response.data && response.data.features) {
          const data = response.data.features;
          const labels = data.map(entry => {
            const timestamp = entry.attributes.obsTime;
            const date = new Date(timestamp);
            return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString();
          });

          const values = data.map(entry => entry.attributes.obsValue || 0);

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
Estrutura do Projeto
bash
Copiar código
GSFrontWebBranch/
├── backend/
│   ├── app.py
│   ├── data.json
│   └── requirements.txt
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   └── images/
    │   ├── components/
    │   ├── pages/
    │   │   ├── AboutUs.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Home.jsx
    │   │   ├── OceanHealthDashboard.jsx
    │   │   ├── ChartComponent.jsx
    │   │   ├── PageNotFound.jsx
    │   │   └── ...
    │   ├── App.jsx
    │   ├── index.jsx
    │   └── ...
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
Requisitos
Backend
Python 3.8+
Flask
Requests
Flask-CORS
Frontend
Node.js
React
Axios
Bootstrap
Chart.js
Dependências
Backend
Flask==2.0.1
Requests==2.25.1
Flask-CORS==3.0.10
Frontend
react==17.0.2
axios==0.21.1
bootstrap==5.1.0
react-bootstrap==2.0.0
chart.js==3.5.1