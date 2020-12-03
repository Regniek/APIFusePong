const express = require('express')
const router = express.Router()
const users = require('./controller')
const passport = require('passport')
require('../../lib/passport')

router.get('/user', users.getUsers)
router.get('/user/:id', users.getOneUser)
router.post('/user', users.postUser)
router.patch('/user/:id', passport.authenticate('jwt', { session: false }), users.updateUser)
router.delete('/user/:id', passport.authenticate('jwt', { session: false }), users.deleteUser)

module.exports = router
