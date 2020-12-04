const mongoose = require('mongoose')
const { Schema } = mongoose
const Project = require('../projects/model')

const Stories = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    project: { type: Schema.ObjectId, ref:'Project' , required: true },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Stories', Stories)