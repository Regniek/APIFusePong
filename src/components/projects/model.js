const mongoose = require('mongoose')
const { Schema } = mongoose
const Company = require('../company/model')

const Projects = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: Schema.ObjectId, ref:'Company' , required: true },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Projects', Projects)