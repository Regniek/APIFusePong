const mongoose = require('mongoose')
const { Schema } = mongoose

const Companys = new Schema(
  {
    name: { type: String, required: true },
    nit: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Companys', Companys)