const mongoose = require('mongoose')





const Article = mongoose.model("Article", {
    title: String,
    date: Date,
    src: String,
    article: Array
})



module.exports = { Article }