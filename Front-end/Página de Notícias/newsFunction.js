fetch("http://localhost:3000/news")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        atualizarDivsDeNoticias(data)
    })
    .catch((error)=> {
        console.log(error)
    })

    function atualizarDivsDeNoticias(data) {
        for (const categoria in data.news) {
          data.news[categoria].forEach(item => {
            const divNoticia = document.getElementById(item.id);
      
            if (divNoticia) {
              // Atualize as informações na div de notícia
              const imagem = divNoticia.querySelector('img');
              const titulo = divNoticia.querySelector('.news-title');
              const autor = divNoticia.querySelector('.news-date');
      
              if (imagem) {
                imagem.src = item.image;
                imagem.alt = item.title;
              }
      
              if (titulo) {
                titulo.textContent = item.title;
              }
      
              if (autor) {
                autor.textContent = item.author;
              }
            }
          });
        }
      }
      
      // Chama a função para atualizar as divs de notícias quando a página carrega
      window.addEventListener('load', function () {
        atualizarDivsDeNoticias(dadosDoBancoDeDados);
      });