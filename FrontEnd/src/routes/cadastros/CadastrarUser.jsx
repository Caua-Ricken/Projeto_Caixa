import { useEffect, useState } from "react"

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const cadClient = {
      name,
      cpf,
      email,
      city
    }


    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(cadClient)
    })

    setName('')
    setCpf('')
    setEmail('')
    setCity('')

  }


  return (
    <div>
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
          <span>cidade:</span>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        </label>

       <input type="submit" value='enviar' />
       
      </form>
    </div>
  )
}

export default CadastrarUser