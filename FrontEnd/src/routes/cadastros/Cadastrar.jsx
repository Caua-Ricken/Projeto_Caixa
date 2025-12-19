import { Delay } from '../../hooks/Delay'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Cadastrar.css'

const Cadastrar = () => {  
  
  const { delayedNavigate, loading } = Delay();

  return (
    <div className='div-geral'>
      <header className='nav-cad-ger'>
        <p className='name-title'>Implantação</p>

        <div className='nav-cad-items'>
          <Link to='.' className='Links-nav'>
          <span>Clientes</span>
          </Link>

          <Link to='CadastrarCacamba' className='Links-nav'>
          <span>Caçambas</span>
          </Link>

          <Link to='CadastrarTruck' className='Links-nav'>
          <span>Caminhão</span>
          </Link>

          <Link to='CadastrarFunc' className='Links-nav'>
          <span>Funcionario</span>
          </Link>
        </div>

        <Link onClick={(e) => delayedNavigate(e, "/App")}>
          <i class="fa-regular fa-circle-xmark"></i>
          {loading && <p className='exit'>carregando...</p>}
        </Link>
      </header>

      <Outlet/>

  

      </div>
  )
}

export default Cadastrar