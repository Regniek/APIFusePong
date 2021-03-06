const Users = require('./model')
const bcrypt = require('bcrypt')
const usersController = {}

usersController.getUsers = async (req, res, next) => {
  try {
    const users = await Users.find().populate('Company');
    res.send(users)
  } catch (error) {
    next(error)
  }
}

usersController.getOneUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id)
    res.send(user)
  } catch (error) {
    next(error)
  }
}

usersController.getEmailUser = async (req, res, next) => {
  try {
    const user = await Users.find(req.params)
    res.send(user)
  } catch (error) {
    next(error)
  }
}


usersController.postUser = async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const user = new Users({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: password,
      email: req.body.email,
      company: req.body.company,
      
    })
    await user.save()
    res.send(user)
  } catch (error) {
    next(error)
  }
}

usersController.updateUser = async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: password,
      email: req.body.email,
      company: req.body.company,
    }
    await Users.findByIdAndUpdate(
      req.params.id,
      { $set: user },
      { omitUndefined: true, upsert: true }
    )
    res.send(user)
  } catch (error) {
    next(error)
  }
}

usersController.deleteUser = async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      message: `User ${req.params.id} deleted`
    })
  } catch (error) {
    next(error)
  }
}

usersController.getUserById = async (req, res, next) => {
  try {
    const user = await Users.findById(req.userId)
    res.send(user)
  } catch (error) {
    next(error)
  }
}

module.exports = usersController
