const router = require('express').Router()
const control = require('../controllers/controller')


router.get("/", (req, res) => {
    res.json({ message: "Olá,mundo!" })
})


router.post("/createArticle", control.createArticle)
router.post("/getArticles", control.getArticles)
router.post("/getArticle", control.getArticle)
router.post("/updateArticle", control.updateArticle)
router.post("/deleteArticle", control.deleteArticle)


module.exports = router