const mongoose = require('mongoose')





const Article = mongoose.model("Article", {
    title: String,
    date: Date,
    src: String,
    articles: Array
})



module.exports = { Article }