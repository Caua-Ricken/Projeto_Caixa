import { Delay } from '../../hooks/Delay'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Cadastrar.css'

const Cadastrar = () => {  
  
  const { delayedNavigate, loading } = Delay();

  return (
    <div className='div-geral'>
      <header className='nav-cad-ger'>
        <p className='name-title'>Implantação</p>

        <div className='nav-cad-items'>
          <NavLink to='.' className='Links-nav' end>
          <span>Clientes</span>
          </NavLink>

          <NavLink to='CadastrarCacamba' className='Links-nav'>
          <span>Caçambas</span>
          </NavLink>

          <NavLink to='CadastrarTruck' className='Links-nav'>
          <span>Caminhão</span>
          </NavLink>

          <NavLink to='CadastrarFunc' className='Links-nav'>
          <span>Funcionario</span>
          </NavLink>
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