const express = require('express');
const app = express();
const PORT = 3000

const newsRoutes = require('./routes/newsRoutes');
const { getAllNews } = require('./routes/news');
// const usersRoutes = require('../routes/usersRoutes')

app.use(express.json()); // Permite analisar JSON no corpo das requisições

app.use('/api', newsRoutes)
// app.use('/api', usersRoutes)

// Iniciar o servidor

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req,res) => {
  res.send('Hello')
})
