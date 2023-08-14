const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect("mongodb+srv://mateusseabra4223:mKY2uezLTtunUPin@cluster0.9zi2mvm.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main