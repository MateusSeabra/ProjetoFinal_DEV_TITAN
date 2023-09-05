function renderFormPost() {
  const form = document.getElementById("create-post-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const authorName = event.target.authorName.value;
    const authorAge = event.target.authorAge.value;
    const post = {
      title: title,
      content: content,
      author: {
        name: authorName,
        age: authorAge,
      },
    };
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

renderFormPost();
