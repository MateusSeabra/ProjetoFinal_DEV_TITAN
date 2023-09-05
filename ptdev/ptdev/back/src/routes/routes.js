const express = require("express");
const router = express.Router();
const getPosts = require("../functions/getPosts");
const createPost = require("../functions/createPost");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/posts", (req, res) => {
  getPosts(req, res);
  console.info(req.method, req.url);
});

router.post("/posts", (req, res) => {
  createPost(req, res);
  console.info(req.method, req.url);
});

module.exports = router;
