const _CONFIG = {
    dbUrl: process.env.DB_URL || '',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',    
}

module.exports = _CONFIG