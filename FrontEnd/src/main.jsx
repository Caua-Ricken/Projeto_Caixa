import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/Login.jsx'
import Cadastrar from './routes/cadastros/Cadastrar.jsx'
import CadastrarUser from './routes/cadastros/CadastrarUser.jsx'
import CadastrarCacamba from './routes/cadastros/CadastrarCacamba.jsx'
import CadastrarFunc from './routes/cadastros/CadastrarFunc.jsx'
import Cadastrartruck from './routes/cadastros/Cadastrartruck.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/App',
    element: <App/>
  },
  {
    path: '/Cadastrar',
    element: <Cadastrar/>,

    children: [
      {
        index: true,
        element: <CadastrarUser/>
      },
      {
        path: 'CadastrarTruck',
        element: <Cadastrartruck/>
      },
      {
        path: 'CadastrarCacamba',
        element: <CadastrarCacamba/>
      },
      {
        path: 'CadastrarFunc',
        element: <CadastrarFunc/>
      }

    ]

  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
