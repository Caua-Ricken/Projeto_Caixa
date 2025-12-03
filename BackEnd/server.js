app.post('/usuarios', async (req, res) => {
  const { username, senha } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO caixa (username, senha) VALUES ($1, $2) RETURNING *',
      [username, senha]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao inserir usuário" });
  }
});
