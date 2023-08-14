const mongoose = require("mongoose")
const {Schema} = mongoose

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {timestamps: true})

const News = mongoose.model("News", newsSchema)
module.exports = News