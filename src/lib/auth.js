const passport = require('passport')
const bcrypt = require('bcrypt')
const UserNames = require('../components/users/model')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
async function (email, password, cb) {
  return UserNames.findOne({
    email: email
  })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password).then(result => {
          if (result) {
            return cb(null, user.toJSON(), { message: 'loageado' })
          } else {
            return cb(null, false, { message: 'Incorrecto' })
          }
        })
      } else {
        return cb(null, false, { message: 'sin email ni password' })
      }
    }).catch(error => cb(error))
}
))

module.exports = passport
