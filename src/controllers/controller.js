const { Article } = require('../models/model')


async function createArticle(req, res) {
    try {
        const { title, src, articles, date } = req.body
        if (!title || !src || !articles || !date) {
            return res.status(400).json({ message: "Preencha todos os campos." })
        }
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
        return res.status(200).json(articles)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}

async function getArticle(req, res) {
    const _id = req.query.id
    try {
        if (!_id) {
            return res.status(400).json({ message: "Id não itendificado." })
        }
        const article = await Article.findById({ _id })
        if (!article) {
            return res.status(404).json({ message: "Artigo não encontrado." })
        }
        return res.status(200).json(article)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}

async function updateArticle(req, res) {
    const { _id, title, src, articles, } = req.body
    try {
        if (!_id, !title || !src || articles) {
            return res.status(400).json({ message: "Preencha todos os campos." })
        }
        const updateArticle = await Article.findByIdAndUpdate({ _id }, { title, src, articles })
        if (!updateArticle) {
            return res.status(404).json({ message: "Falha ao atualizar artigo." })
        }
        return res.status(200).json({ message: "Artigo atualizado com sucesso!" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}

async function deleteArticle(req, res) {
    const { _id } = req.body
    console.log(req.body);
    try {
        if (!_id) {
            return res.status(400).json({ message: "Id não identificado." })
        }
        const deleteArticle = await Article.findByIdAndDelete({ _id })
        if (!deleteArticle) {
            return res.status(404).json({ message: "Artigo não encontrado." })
        }
        return res.status(200).json({ message: "Artigo excluído com sucesso!", })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno de servidor." })
    }
}

module.exports = { createArticle, getArticles, getArticle, deleteArticle, updateArticle }