import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/Login.jsx'
import CadastrarUser from './routes/CadastrarUser.jsx'
import Cadastrar from './routes/cadastros/Cadastrar.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/CadastrarUser',
    element: <CadastrarUser/>
  },
  {
    path: '/App',
    element: <App/>
  },
  {
    path: '/Cadastrar',
    element: <Cadastrar/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
