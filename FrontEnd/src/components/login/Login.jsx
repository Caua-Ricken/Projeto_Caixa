import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function fazerLogin() {

    setError('')
    setUser('')
    setPassword('')

    const res = await fetch(`http://localhost:5000/usuarios?user=${user}&password=${password}`)
    const data = await res.json()


    if (data.length > 0) {
      navigate('/CadastrarUser')

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
      <h1>imagem logo</h1>

        <form onSubmit={(e) => { e.preventDefault(), fazerLogin() }}> 
          <h2>Login</h2>
            <label>
                <span>Usuário:</span>
                <input type="text" name='user' placeholder='Usuário' onChange={(e) => setUser(e.target.value)} value={user}/>
            </label>

            <label>
                <span>Senha:</span>
                <input type="password" name='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password}/>
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

