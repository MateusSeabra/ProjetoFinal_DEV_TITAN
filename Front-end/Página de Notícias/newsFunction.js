
async function loadAndGenerateNewsHTML() {
    try {
      const response = await fetch('http://localhost:3000/news'); // Caminho para o seu arquivo JSON
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
      }
      const newsData = await response.json();
  
      // Suponha que suas categorias estejam definidas em um array
      const categories = ['sports', 'tech', 'arts', 'others'];
  
      categories.forEach((category) => {
        const categoryNews = newsData.news[category];
        generateNewsHTML(category, categoryNews);
      });
    } catch (error) {
      console.error('Erro ao carregar dados das notícias:', error);
    }
  }
  
  // Chame a função para carregar e gerar o HTML das notícias
  loadAndGenerateNewsHTML();
      function generateNewsHTML(category, news) {
        const newsContainer = document.getElementById("news-container");
        const categoryClass = category.toLowerCase();
      
        news.forEach((item) => {
          const newsHTML = `
            <div class="col-md-4 project-box ${categoryClass}" id="${item.id}">
              <img src="${item.image}" class="img-fluid" alt="${item.title}">
              <p class="news-title">${item.title}</p>
              <p class="news-date">Autor: ${item.author}</p>
            </div>
          `;
          newsContainer.innerHTML += newsHTML;
        });
      }
      
      // Gerar o HTML para cada categoria
      generateNewsHTML("sports", newsData.news.sports);
      generateNewsHTML("tech", newsData.news.tech);
      generateNewsHTML("arts", newsData.news.arts);
      generateNewsHTML("others", newsData.news.others);