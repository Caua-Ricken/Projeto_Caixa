import './Saudacao.css'

const Saudacao = () => {

    const hora = new Date().getHours();

    let mensagem = '';

    if (hora >= 5 && hora < 12) {
        mensagem = 'Bom Dia!'    
    }else if (hora >= 12 && hora < 18) {
        mensagem = 'Boa Tarde!'
    }else {
        mensagem = 'Boa Noite!'
    }

  return (
    <div>
        <h1>{mensagem}</h1>
    </div>
  )
}

export default Saudacao