import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CarouselComponent from '../Componenetes/Carousel/CarouselComponent'; // Importe o carrossel
import imgAbout from "../assets/images/about2.avif";
import imgApi from "../assets/images/api_rio_sp.png";
import imgVigilancia from "../assets/images/oceanos_vigilancia.webp";
import imgEscolas from "../assets/images/escolas.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Home.scss';

const Home = () => {
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    fetch('/data/phases.json')
      .then(response => response.json())
      .then(data => setPhases(data))
      .catch(error => console.error('Error fetching phases:', error));
  }, []);

  return (
    <>
      <CarouselComponent />

      <div className="features">
        <div className="container">
          <div className="feat">
            <i className="fas fa-magic fa-3x"></i>
            <h3>Unindo Informações para Uma Ação Coordenada</h3>
            <p>Consolide dados de sensores, satélites e pesquisas em uma única plataforma poderosa, facilitando uma visão holística e detalhada da saúde dos oceanos.</p>
          </div>
          <div className="feat">
            <i className="far fa-gem fa-3x"></i>
            <h3>Transformando Dados em Decisões</h3>
            <p>Acesse análises detalhadas e relatórios personalizáveis que apoiam a tomada de decisão estratégica em projetos de conservação marinha e políticas públicas.</p>
          </div>
          <div className="feat">
            <i className="fas fa-globe-asia fa-3x"></i>
            <h3>Inovando para o Futuro do Planeta</h3>
            <p>Contribua para a sustentabilidade dos nossos oceanos utilizando uma plataforma que emprega as mais recentes inovações em tecnologia verde e análise de dados.</p>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <h2 className="special-heading">O desafio</h2>
          <p>Redução da Poluição Marinha</p>
          <div className="about-content">
            <div className="image">
              <img src={imgAbout} alt="" />
            </div>
            <div className="text">
              <p>
                No cenário atual, a tecnologia transforma radicalmente vários setores, especialmente o da sustentabilidade ambiental, onde a união entre ciência conservacionista e soluções digitais avança rapidamente. Esses avanços são vitais para enfrentar os desafios ambientais globais, exigindo intervenções eficazes e sustentáveis urgentemente.
              </p>
              <hr />
              <p>
                Na conservação oceânica, a necessidade de inovação é clara devido às ameaças como poluição, destruição de habitats e mudanças climáticas. A tecnologia redefine como monitoramos e protegemos os oceanos, expandindo as possibilidades de envolvimento e ação. Ferramentas de análise de dados, inteligência artificial e monitoramento remoto são essenciais, oferecendo novas capacidades para gerir e restaurar os oceanos. O Ocean Health Tracker é uma plataforma inovadora que integra e analisa dados diversificados, oferecendo insights essenciais para estratégias de conservação marinha.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="special-heading">Nossa Solução</h2>
          <p>Ocean Health Tracker</p>
          <div className="portfolio-content">
            <div className="card">
              <img src={imgVigilancia} alt="" />
              <div className="info">
                <h3>Vigilância Contínua dos Oceanos</h3>
                <p>Descubra o estado dos oceanos com precisão inigualável através do nosso robusto sistema de monitoramento ambiental. O 'Ocean Health Tracker' integra dados provenientes de uma variedade de fontes, incluindo sensores avançados, satélites e estações de monitoramento oceânico. Esta abordagem integrada nos permite fornecer atualizações contínuas sobre a qualidade da água, temperaturas oceânicas, níveis de poluição e outros indicadores vitais. As informações são coletadas em tempo real, garantindo que os dados disponíveis sejam sempre relevantes e atualizados, o que é essencial para o gerenciamento eficaz da saúde dos oceanos.</p>
              </div>
            </div>
            <div className="card">
              <img src={imgEscolas} alt="" />
              <div className="info">
                <h3>Promovendo a Conscientização Marinha</h3>
                <p>Além de ser uma ferramenta poderosa para cientistas e conservacionistas, o 'Ocean Health Tracker' serve como uma plataforma educacional rica, projetada para aumentar a conscientização pública sobre a importância da conservação dos oceanos. Oferecemos módulos interativos de aprendizagem e recursos educacionais que explicam os desafios enfrentados pelos oceanos e o que pode ser feito para ajudar. A plataforma fomenta um envolvimento mais profundo, incentivando o público em geral, escolas e comunidades a participar ativamente na proteção e sustentabilidade dos ambientes marinhos.</p>
              </div>
            </div>
            <div className="card">
              <img src={imgApi} alt="" />
              <div className="info">
                <h3>Integração com APIs Externas</h3>
                <p>Para garantir a amplitude e a precisão dos dados que alimentam o 'Ocean Health Tracker', integramos nossa plataforma com várias APIs externas que fornecem informações atualizadas sobre as condições marítimas globais. Isso inclui dados de qualidade da água, atividade biológica, meteorologia e muito mais. Essas integrações permitem que nossa plataforma ofereça uma visão compreensiva e multifacetada dos oceanos, enriquecendo nossa base de dados e melhorando a precisão das nossas análises e previsões.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services" id="services">
        <Container>
          <h2 className="special-heading">Fases do Projeto</h2>
          <p>Abordagem de Desenvolvimento</p>
          <div className="services-content">
            {phases.map((phase, index) => (
              <div className="col" key={index}>
                <div className="srv">
                  <i className={phase.icon}></i>
                  <div className="text">
                    <h3>{phase.fase}</h3>
                    {phase.items.map((item, idx) => (
                      <p key={idx}>
                        <strong>{item.title}:</strong> {item.description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
