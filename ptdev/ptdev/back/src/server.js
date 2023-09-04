const express = require("express");
const routes = require("./routes/routes.js");
const db = require("./database/db.js");
const cors = require("cors");

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function runApp() {
  await db.connect();
  console.log("Connected to database");

  app.use(routes);
}

runApp();
