const express = require('express')
const router = express.Router()
const stories = require('./controller')


router.get('/storie', stories.getStories)
router.get('/storie/:id', stories.getOneStorie)
router.get('/storiep/:project', stories.getProjectStorie)
router.post('/storie', stories.postStorie)
router.patch('/storie/:id', stories.updateStorie)
router.delete('/storie/:id',  stories.deleteStorie)

module.exports = router