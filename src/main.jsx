import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//ROTAS
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Routes/Home.jsx';
import Produtos from './Routes/Produtos.jsx';
import Erro from './Routes/Erro.jsx';

const routes = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Erro/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/produtos', element: <Produtos/>}
    ]
}
]);
//ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
