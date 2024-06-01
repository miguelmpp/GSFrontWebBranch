import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles.scss'; // Importar o arquivo Sass
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import ChartComponent from './Componenetes/ChartComponent/ChartComponent';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'dashboard', element: <ChartComponent /> },
      { path: 'contact', element: <Contact /> }, // Adicione a rota de contato
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
