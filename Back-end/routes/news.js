const newsData = require('../db/news.json');

function getAllNews(req, res) {
  // Aqui você pode acessar os dados do arquivo JSON (newsData)
  // e retornar as notícias como resposta
  res.json(newsData).json;
}

// Outras funções de callback, como getNewsById, podem ser definidas aqui

module.exports = {
  getAllNews,
  // Exporte outras funções de callback, se necessário
};
