const user = require('../components/users/routes');
const company = require('../components/company/routes');

const routes = function(app) {
    app.use('/', user)
    app.use('/', company)
    
}

module.exports = routes;