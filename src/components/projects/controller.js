const Projects = require('./model')
const projectsController = {}

projectsController.getProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find()
    res.json({
      status: 200,
      message: 'Projects listed',
      body: projects
    })
  } catch (error) {
    next(error)
  }
}

projectsController.getOneProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id)
    res.json({
      status: 200,
      message: 'Project listed',
      body: project
    })
  } catch (error) {
    next(error)
  }
}

projectsController.postProject = async (req, res, next) => {
  try {
    const project = new Projects({
        name: req.body.name,
        description: req.body.description,
        company: req.body.company,      
    })
    await project.save()
    res.json({
      status: 201,
      message: 'Project created',
      body: project
    })
  } catch (error) {
    next(error)
  }
}

projectsController.updateProject = async (req, res, next) => {
  try {
    const project = {
        name: req.body.name,
        description: req.body.description,
        company: req.body.company,
    }
    await Projects.findByIdAndUpdate(
      req.params.id,
      { $set: project },
      { omitUndefined: true, upsert: true }
    )
    res.json({
      status: 200,
      message: `Project ${req.params.id} updated`,
      body: project
    })
  } catch (error) {
    next(error)
  }
}

projectsController.deleteProject = async (req, res, next) => {
  try {
    await Projects.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      message: `Project ${req.params.id} deleted`
    })
  } catch (error) {
    next(error)
  }
}

projectsController.getProjectById = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.projectId)
    res.json({
      state: 200,
      message: 'Project with token listed',
      body: project
    })
  } catch (error) {
    next(error)
  }
}

module.exports = projectsController
