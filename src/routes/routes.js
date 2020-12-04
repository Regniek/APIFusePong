const user = require('../components/users/routes');
const company = require('../components/company/routes');
const project = require('../components/projects/routes');
const storie = require('../components/stories/routes');
const ticket = require('../components/tickets/routes');
const loginRoutes = require('./auth')

const routes = function(app) {
    app.use('/', user)
    app.use('/', company)
    app.use('/', loginRoutes)
    app.use('/', project)
    app.use('/', storie)
    app.use('/', ticket)
}

module.exports = routes;