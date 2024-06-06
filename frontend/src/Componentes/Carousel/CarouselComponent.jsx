import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/fundo8.webp';
import img2 from '../../assets/images/fundo2.webp';
import img3 from '../../assets/images/fundo1.webp';
import './CarouselComponent.scss'; // Importe o arquivo Sass atualizado

const CarouselComponent = () => {
  const carouselItems = [
    { src: img1, alt: 'First slide', caption: 'Descubra o Pulso dos Nossos Oceanos', description: 'Experimente o poder de visualizar dados oceânicos em tempo real, permitindo uma resposta rápida e informada a mudanças ambientais críticas e eventos adversos.' },
    { src: img2, alt: 'Second slide', caption: 'Antecipando o Futuro dos Oceanos', description: 'Utilize nossa tecnologia avançada para prever tendências e identificar áreas de risco, garantindo que medidas preventivas possam ser tomadas para proteger a biodiversidade marinha.' },
    { src: img3, alt: 'Third slide', caption: 'Fortalecendo Conexões com os Oceanos', description: 'Engaje-se com nossa plataforma interativa que educa e capacita comunidades globais e locais, promovendo uma compreensão mais profunda e um envolvimento ativo na conservação marinha.' },
  ];

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
          />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
