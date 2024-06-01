import React from 'react';
import { Link } from 'react-router-dom';
// import './PageNotFound.scss'; // Importe o arquivo SCSS

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <h1>404</h1>
        <h2>Oops! Página não encontrada</h2>
        <p>A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.</p>
        <Link to="/" className="home-link">Voltar para a Página Inicial</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
