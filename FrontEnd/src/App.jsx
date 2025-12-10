import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {

  return (
 
      <div className="main-container">

      <header className='topo-project'>
        <h2 className='text-topo'>Implantação</h2>
        <Link to='/'><i class="fa-regular fa-circle-xmark"></i></Link>
      </header>

        <aside className="sidebar">
          <h2 className='name-topo'>navegação</h2>
          <ul>
            <li>
              <Link to='/CadastrarUser'><i class="fa-solid fa-user">usuario</i></Link>
            </li>
             <li>
              <a href="#">link 2</a>
            </li>
             <li>
              <a href="#">link 3</a>
            </li>
             <li>
              <a href="#">link 4</a>
            </li>
             <li>
              <a href="#">link 5</a>
            </li>
          </ul>
        </aside>
      </div>
  )
}

export default App
