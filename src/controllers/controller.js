const { query } = require('express')
const { Article } = require('../models/model')


async function createArticle(req, res) {
    try {
        const { title, src, articles, date } = req.body
        const newArticle = await Article.create({ title, src, articles, date })
        res.status(201).json({ message: "Artigo criado com sucesso" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}

async function getArticles(req, res) {
    try {
        const articles = await Article.find({})
        console.log(articles);
        return res.status(200).json(articles)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}

async function getArticle(req, res) {
    const _id = req.query.id
    console.log(_id);
    try {
        const article = await Article.findById({ _id })

        console.log(article)
        return res.status(200).json(article)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}


module.exports = { createArticle, getArticles, getArticle }