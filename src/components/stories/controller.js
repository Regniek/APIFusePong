const Stories = require('./model')
const storiesController = {}

storiesController.getStories = async (req, res, next) => {
  try {
    const stories = await Stories.find()
    res.send(stories)
  } catch (error) {
    next(error)
  }
}

storiesController.getOneStorie = async (req, res, next) => {
  try {
    const storie = await Stories.findById(req.params.id)
    res.send(storie)
  } catch (error) {
    next(error)
  }
}

storiesController.getProjectStorie = async (req, res, next) => {
  try {
    const storie = await Stories.find(req.params)
    res.send(storie)
  } catch (error) {
    next(error)
  }
}

storiesController.postStorie = async (req, res, next) => {
  try {
    const storie = new Stories({
        name: req.body.name,
        description: req.body.description,
        project: req.body.project,      
    })
    await storie.save()
    res.send(storie)
  } catch (error) {
    next(error)
  }
}

storiesController.updateStorie = async (req, res, next) => {
  try {
        const storie = {
        name: req.body.name,
        description: req.body.description,
        project: req.body.project,
    }
    await Stories.findByIdAndUpdate(
      req.params.id,
      { $set: storie },
      { omitUndefined: true, upsert: true }
    )   
    res.send(storie)
  } catch (error) {
    next(error)
  }
}

storiesController.deleteStorie = async (req, res, next) => {
  try {
    await Stories.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      message: `Storie ${req.params.id} deleted`
    })
  } catch (error) {
    next(error)
  }
}

storiesController.getStorieById = async (req, res, next) => {
  try {
    const storie = await Stories.findById(req.storieId)
    res.send(storie)
  } catch (error) {
    next(error)
  }
}

module.exports = storiesController
