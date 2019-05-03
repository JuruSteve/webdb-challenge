const express = require('express')
const router = express.Router()
const Projects = require('../models/projects-model')

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
    const projects = await Projects.getProjectById(req.params.id)
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: 'We ran into an error retreiving the project' })
  }
})

module.exports = router