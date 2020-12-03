const user = require('../components/users/routes');
const company = require('../components/company/routes');
const loginRoutes = require('./auth')

const routes = function(app) {
    app.use('/', user)
    app.use('/', company)
    app.use('/', loginRoutes)
    
}

module.exports = routes;