import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const darkColors = ['#343a40', '#212529', '#495057', '#343a40', '#6c757d'];

  const changeBackgroundColor = () => {
    const randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
    document.querySelector('.footer').style.backgroundColor = randomColor;
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nós</h5>
            <p>
              Somos uma empresa comprometida com a conservação dos oceanos e a educação ambiental.
            </p>
          </Col>
          <Col md={4}>
            <h5>Nossas Redes</h5>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>Email: contato@empresa.com</p>
            <p>Telefone: (99) 99999-9999</p>
            <button onClick={changeBackgroundColor} className="btn btn-primary mt-3">Mudar Cor de Fundo</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
