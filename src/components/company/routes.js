const express = require('express')
const router = express.Router()
const companys = require('./controller')


router.get('/company', companys.getCompanys)
router.get('/company/:id', companys.getOneCompany)
router.post('/company', companys.postCompany)
router.patch('/company/:id', companys.updateCompany)
router.delete('/company/:id',  companys.deleteCompany)

module.exports = router