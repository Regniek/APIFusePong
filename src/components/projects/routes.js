const express = require('express')
const router = express.Router()
const projects = require('./controller')


router.get('/project', projects.getProjects)
router.get('/project/:id', projects.getOneProject)
router.get('/projectc/:company', projects.getCompanyProject)
router.post('/project', projects.postProject)
router.patch('/project/:id', projects.updateProject)
router.delete('/project/:id',  projects.deleteProject)

module.exports = router