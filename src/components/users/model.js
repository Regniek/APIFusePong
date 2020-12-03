const mongoose = require('mongoose')
const { Schema } = mongoose
const Company = require('../company/model')

const Users = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    company: { type: Schema.ObjectId, ref:'Company' , required: true },
    email: {
      type: String,
      required: true,
      useCreateIndex: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Users', Users)