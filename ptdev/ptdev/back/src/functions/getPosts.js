const db = require("../database/db");

async function getPosts(req, res) {
  try {
    const posts = await db.data.posts;
    res.send(posts);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

module.exports = getPosts;
