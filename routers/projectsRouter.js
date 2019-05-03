const express = require('express')
const router = express.Router()
const Projects = require('../models/projects-model')
const Actions = require('../models/actions-model')

router.post('/', async (req, res) => {
  try {
      const newProject = req.body
    const projects = await Projects.addProject(newProject)
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: 'We ran into an error adding the project' })
  }
})

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: 'We ran into an error retreiving the project' })
  }
})
router.get('/:id', async (req, res) => {
  try {
      const id = req.params.id
    const projects = await Projects.getProjectById(id)
    const actions = await Actions.getActionById(id)
    const newRes = {
        ...projects,
        actions
    }
    res.status(200).json(newRes)
  } catch (error) {
    res.status(500).json({ message: 'We ran into an error retreiving the project' })
  }
})

module.exports = router