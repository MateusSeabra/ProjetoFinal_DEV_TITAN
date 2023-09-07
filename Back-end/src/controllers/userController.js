import fs from 'fs'
import path from 'path'

const userJsonPath = path.join('src', 'app', 'db', 'user.json')

function readUserJson() {
    return JSON.parse(fs.readFileSync(userJsonPath, 'utf-8'))
}

class UserController {
    index(req, res) {
        try {
            const userJson = readUserJson()

            if (userJson) {
                res.status(200).json(userJson)
            } else {
                res.status(404).json({ error: 'User List Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    show(req, res) {
        try {
            const id = req.params.id
            const userJson = readUserJson()
            const user = userJson.users.find((user) => user.id == id)

            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ error: 'User Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    store(req, res) {
        try {
            const newUser = req.body
            const userJson = readUserJson()

            newUser.id = userJson.users.length + 1
            
            if (
                newUser.hasOwnProperty('email') &&
                newUser.hasOwnProperty('username') &&
                newUser.hasOwnProperty('password') &&
                newUser.hasOwnProperty('adm')
            ) {
                const user = {
                    id: newUser.id,
                    ...newUser
                }

                userJson.users.push(user)
                fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')
                res.status(201).json({ message: 'User Stored' })
            } else {
                res.status(400).json({ error: 'Not a Valid User' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    update(req, res) {
        try {
            const id = req.params.id
            const userJson = readUserJson()
            const userIndex = userJson.users.findIndex((user) => user.id === parseInt(id))

            if (userIndex !== -1) {
                userJson.users[userIndex].email = req.body.email
                userJson.users[userIndex].username = req.body.username
                userJson.users[userIndex].password = req.body.password

                fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')
                res.status(200).json({ message: 'User Updated' })
            } else {
                res.status(404).json({ error: 'User Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    delete(req, res) {
        try {
            const id = req.params.id
            const userJson = readUserJson()
            const userIndex = userJson.users.findIndex((user) => user.id === parseInt(id))

            if (userIndex !== -1) {
                userJson.users.splice(userIndex, 1)

                fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')
                res.status(200).json({ message: 'User Deleted' })
            } else {
                res.status(404).json({ error: 'User Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }
}

export default new UserController()