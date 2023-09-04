const db = require("../database/db");
const fs = require("fs");

async function createPost(req, res) {
  try {
    const posts = await db.data.posts;
    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };
    posts.push(newPost);
    try {
      await fs.promises.writeFile(
        "src/database/database.json",
        JSON.stringify(db.data)
      );
    } catch (error) {
      throw new Error("Can't write to database");
    }
    res.send(newPost);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

module.exports = createPost;
