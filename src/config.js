require("dotenv").config();

module.exports = {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT || 4000,
  host: process.env.HOST || "http://localhost",
  jwtToken: process.env.TOKEN_KEY || 'TokenAuth'
  
};
