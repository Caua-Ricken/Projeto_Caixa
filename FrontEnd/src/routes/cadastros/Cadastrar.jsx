import React from 'react'
import { Delay } from '../../hooks/Delay'
import { Link } from 'react-router-dom';
import './Cadastrar.css'

const Cadastrar = () => {

   const { delayedNavigate, loading } = Delay();

  return (
    <div>
      <h1>ola</h1>

      <Link onClick={(e) => delayedNavigate(e, "/")}>
      <p>voltar</p>
      {loading && <p className='teste000'>carregando...</p>}
      </Link>

      </div>
  )
}

export default Cadastrar