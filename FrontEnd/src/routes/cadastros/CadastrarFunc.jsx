import { useEffect, useState } from "react"

const url = 'http://localhost:5001/funcionarios'

const CadastrarFunc = () => {

  const [func, setFunc] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()
      setFunc(data)
    }
    getData()
  }, [])


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [fone, setFone] = useState('')
  const [number, setNumber] = useState('')
  const [bairro, setBairro] = useState('')
  const [city, setCity] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const CadFunc = {
      name,
      email,
      cpf,
      fone,
      number,
      bairro,
      city
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(CadFunc)
    })

    if (!res.ok) {
      alert('erro ao cadastrar')
      return
    }

    alert('Cliente cadastrado com sucesso!')

    setName('')
    setEmail('')
    setCpf('')
    setFone('')
    setNumber('')
    setBairro('')
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

export default CadastrarFunc