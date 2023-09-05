const fs = require("fs")

class UsersDataBase {
    async read() {
        try {
            this.data = JSON.parse(
                await fs.promises.readFile("Back-end/src/db/users.json", "utf8")
            )
        } catch (error) {
            throw new Error("Couldn't read to users database")
        }
    }
}
const usersDb = new UsersDataBase()

module.exports = usersDb


class NewsDataBase {
    async read() {
        try {
            this.data = JSON.parse(
                await fs.promises.readFile("Back-end/src/db/news.json", "utf8")
            )
        } catch (error) {
            throw new Error("Couldn't read to users database")
        }
    }
}

const newsDb = new NewsDataBase()
module.exports = newsDb