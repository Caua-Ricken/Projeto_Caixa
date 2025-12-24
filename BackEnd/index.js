const express = require('express')
const cors = require('cors')
const Firebird = require('node-firebird')
const dbOptions = require('./db')

const app = express()

// PASSO 4 – middlewares
app.use(cors())
app.use(express.json())

// PASSO 5 – GET clientes
app.get('/clientes', (req, res) => {
  Firebird.attach(dbOptions, (err, db) => {
    if (err) return res.status(500).json(err)

    db.query('SELECT * FROM CLIENTES', (err, result) => {
      db.detach()
      if (err) return res.status(500).json(err)

      res.json(result)
    })
  })
})

// PASSO 6 – POST clientes
app.post('/clientes', (req, res) => {
  const { name, cpf, email, city, number, fone, bairro } = req.body

  console.log('📥 DADOS RECEBIDOS:', req.body)

  Firebird.attach(dbOptions, (err, db) => {
    if (err) return res.status(500).json(err)

    const sql = `
      INSERT INTO CLIENTES (NOME, CPF, EMAIL, TELEFONE, BAIRRO, CIDADE, NUMERO)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    // Ordem exata: 
    // 1.name, 2.cpf, 3.email, 4.fone, 5.bairro, 6.city, 7.number
    const params = [name, cpf, email, fone, bairro, city, number]

    db.query(sql, params, (err) => {
      db.detach()
      if (err) {
        console.error('🔥 ERRO FIREBIRD:', err)
        return res.status(500).json(err)
      }
      res.status(201).json({ message: 'Cliente cadastrado com sucesso' })
    })
  })
})

// PASSO 7 – subir servidor
app.listen(5001, () => {
  console.log('Servidor rodando em http://localhost:5001')
})
