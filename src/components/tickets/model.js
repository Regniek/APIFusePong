const mongoose = require('mongoose')
const { Schema } = mongoose
const Storie = require('../stories/model')
const User = require('../users/model')

const Tickets = new Schema(
  {
    comment: { type: String, required: true },
    status: { type: String, required: true },
    storie: { type: Schema.ObjectId, ref:'Storie' , required: true },
    user: { type: Schema.ObjectId, ref:'User' , required: true },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Tickets', Tickets)