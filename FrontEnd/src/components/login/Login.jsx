import React, { useState, useEffect } from 'react'
import './Login.css'

const url = 'http://localhost:5000/usuarios'

const Login = () => {

   // resgate dos dados
   const [usuarios, setUsuarios] = useState([])

     useEffect(() => {
      async function getData() {
      const res = await fetch(url)
      const data = await res.json()
      setUsuarios(data)
    }
    getData()
  }, [])


   
    // envio dos dados
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
    e.preventDefault()

    const usuario = {
      user,
      password
    }

      const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
    
    setUser('')
    setPassword('')
    }

   
  return (
    <div>

      <h1>imagem logo</h1>

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
            <label>
                <span>Usuário:</span>
                <input type="text" name='user' placeholder='Usuário' onChange={(e) => setUser(e.target.value)} value={user}/>
            </label>

            <label>
                <span>Senha:</span>
                <input type="password" name='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>

            <div className="play">
              <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Login