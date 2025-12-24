import { useEffect, useState } from "react"
import './styles/styleCadUser.css'

const url = 'http://localhost:5001/clientes'


const CadastrarUser = () => {

  const [client, setClient] = useState([])

  useEffect(() => {
    async function getData() {

      const res = await fetch(url)
      const data = await res.json()
      setClient(data)
    }
    getData()
  }, [])


  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [fone, setFone] = useState('')
  const [number, setNumber] = useState('')
  const [bairro, setBairro] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const cadClient = {
      name,
      cpf,
      email,
      city,
      fone,
      number,
      bairro,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(cadClient)
    })

if (!res.ok) {
  alert('erro ao cadastrar')
  return
}

alert('Cliente cadastrado com sucesso!')

    setName('')
    setCpf('')
    setEmail('')
    setFone('')
    setBairro('')
    setNumber('')
    setCity('')

  }


  return (
    <div className="div-cad-geral">
         <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          <span>cpf:</span>
          <input type="number" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
        </label>

         <label>
          <span>email:</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>telefone:</span>
          <input type="number" value={fone} onChange={(e) => setFone(e.target.value)}/>
        </label>

        <label>
          <span>Nº:</span>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
        </label>

        <label>
          <span>bairro:</span>
          <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
        </label>

         <label>
          <span>cidade:</span>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        </label>

     
        <button type="submit">enviar</button>
    
       
      </form>
    </div>
  )
}

export default CadastrarUser