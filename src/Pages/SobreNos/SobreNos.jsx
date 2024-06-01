import React from 'react';
// import './AboutUs.scss'; // Importe o arquivo SCSS
import imgMiguel from '../../assets/images/miguel.jpg';
import imgMatheus from '../../assets/images/matheus_farias.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h2 className="special-heading">Sobre Nós</h2>
        <p>
          A motivação de Miguel Parrado e Matheus Farias para desenvolver o "Ocean Health Tracker" é impulsionada por uma profunda preocupação com a saúde dos oceanos e a urgência de enfrentar os desafios ambientais globais. Compreendendo a complexidade e a gravidade dos problemas como poluição marinha, acidificação dos oceanos, aumento das temperaturas das águas e destruição dos habitats, eles perceberam a necessidade crítica de uma abordagem tecnológica que pudesse oferecer soluções eficazes e sustentáveis.
        </p>
        <p>
          Inspirados por seus estudos em engenharia de software e sua paixão pela conservação ambiental, Miguel e Matheus viram uma oportunidade de usar suas habilidades para fazer uma diferença significativa. Eles reconheceram que, embora muitas iniciativas de pesquisa e conservação já existissem, havia uma lacuna considerável na capacidade de monitorar, analisar e responder de maneira proativa às condições oceânicas em tempo real. Eles vislumbraram uma plataforma que não só centralizasse dados de múltiplas fontes para uma análise mais precisa, mas também democratizasse o acesso a essas informações, permitindo que comunidades, pesquisadores e formuladores de políticas tomassem decisões informadas baseadas em dados confiáveis.
        </p>
        <p>
          Portanto, a criação do "Ocean Health Tracker" se alinha com a visão de utilizar a inovação tecnológica como uma ferramenta para a sustentabilidade ambiental, promovendo uma compreensão mais profunda e ação coletiva em prol da conservação dos oceanos. A motivação de Miguel e Matheus reflete um compromisso com a proteção dos recursos naturais e um desejo de inspirar e capacitar outros a se envolverem na preservação do meio ambiente para as futuras gerações.
        </p>
        <div className="card-container">
          <div className="card">
            <img src={imgMiguel} alt="Miguel Parrado" />
            <h3>Miguel Parrado</h3>
          </div>
          <div className="card">
            <img src={imgMatheus} alt="Matheus Farias" />
            <h3>Matheus Farias</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
