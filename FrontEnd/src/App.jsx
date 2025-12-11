import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'


function App() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClick = (e) => {

    const confirmar = window.confirm("Tem certeza que deseja sair?")
    if (!confirmar) return 

    setLoading(true)

    setTimeout(() => {
      navigate('/')
    },2000)
  }


  const delaye = (e, path) => {
  e.preventDefault(); 
  setLoading(true);

  setTimeout(() => {
    navigate(path);
  }, 1500); 
};

  return (
 
      <div className="main-container">

      <header className='topo-project'>
        <h2 className='text-topo'>Implantação</h2>
        <Link onClick={handleClick} disabled={loading}><i class="fa-regular fa-circle-xmark"></i></Link>
      </header>

      {loading && <p className='exit'>Carregando...</p>}

        <aside className="sidebar">
          <h2 className='name-topo'>navegação</h2>
          
          <div className="sidebar-links">
          <Link  onClick={(e) => delaye(e, "/Cadastrar")} className="nav-item">
            <i className="fa-solid fa-user"></i>
            <span>Cadastrar</span>
          </Link>

          <Link to="/CadastrarUser" className="nav-item">
            <i className="fa-solid fa-clipboard"></i>
            <span>Relatórios</span>
          </Link>

          <Link to="/CadastrarUser" className="nav-item">
            <i className="fa-solid fa-gears"></i>
            <span>Configurações</span>
          </Link>

          <Link to="/CadastrarUser" className="nav-item">
            <i className="fa-solid fa-circle-info"></i>
            <span>Sobre</span>
          </Link>
          </div>    
           
        </aside>
      </div>
  )
}

export default App
