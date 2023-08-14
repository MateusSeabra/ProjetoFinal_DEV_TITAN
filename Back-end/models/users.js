const mongoose = require("mongoose")
const {Schema} = mongoose

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const Users = mongoose.model("Users", usersSchema)
module.exports = Users