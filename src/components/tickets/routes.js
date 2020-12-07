const express = require('express')
const router = express.Router()
const tickets = require('./controller')


router.get('/ticket', tickets.getTickets)
router.get('/ticket/:id', tickets.getOneTicket)
router.get('/tickets/:storie', tickets.getStorieTicket)
router.post('/ticket', tickets.postTicket)
router.patch('/ticket/:id', tickets.updateTicket)
router.delete('/ticket/:id',  tickets.deleteTicket)

module.exports = router