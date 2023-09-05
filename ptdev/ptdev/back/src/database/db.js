const fs = require("fs");

class Database {
  async connect() {
    try {
      this.data = JSON.parse(
        await fs.promises.readFile("src/database/database.json", "utf8")
      );
    } catch (error) {
      throw new Error("Can't connect to database");
    }
  }
}

const db = new Database();

module.exports = db;
