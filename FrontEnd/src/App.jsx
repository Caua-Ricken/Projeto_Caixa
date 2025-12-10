import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {

  return (
      <div className="main-container">
        <aside className="sidebar">
          <h2 className='name-topo'>navegação</h2>
          <ul>
            <li>
              <a href="#">link 1</a>
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
