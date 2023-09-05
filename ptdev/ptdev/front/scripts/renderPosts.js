fetch("http://localhost:3001/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderPosts(data);
  })
  .catch((error) => {
    console.log(error);
  });

function renderPosts(data) {
  const div = document.querySelector(".posts");

  data.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <p>${post.author.name}</p>
    <p>${post.author.age}</p>
    `;
    div.appendChild(postDiv);
  });
}
