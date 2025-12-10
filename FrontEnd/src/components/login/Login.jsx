import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import Saudacao from '../saudação/Saudacao'

const Login = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function fazerLogin() {

    const res = await fetch(`http://localhost:5000/usuarios?user=${user}&password=${password}`)
    const data = await res.json()


    if (data.length > 0) {
      navigate('/App')
      setUser('')
      setPassword('')

    }else {
      setError('credenciais incorretas!')
    }
  }

  return (
    <div>
      <header>
        <p className='name-title'>Implantação</p>
      </header>

    <div className='container'>
      <div className="img-container">
        <img src="./logo.webp" alt=""/>
      </div>

        <form onSubmit={(e) => { e.preventDefault(), fazerLogin() }}> 
          <Saudacao />
            <label className='camp'> 
                <span className='camp-text'>Usuário:</span>
                <input className='inputs' type="text" name='user' required onChange={(e) => setUser(e.target.value)} value={user}/>
            </label>

            <label className='camp'>
                <span className='camp-text'>Senha:</span>
                <input className='inputs' type="password" name='password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>

             {error && <p className="erro">{error}</p>}

            <div className="play">
              <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Login;

