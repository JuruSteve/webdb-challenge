const express = require('express')
const router = express.Router()
const Actions = require('../models/actions-model')

router.post('/', async (req, res) => {
    try {
        const newAction = req.body
      const actions = await Actions.addAction(newAction)
      console.log(actions)
      res.status(200).json(actions)
    } catch (error) {
      res.status(500).json({ message: 'We ran into an error adding the action' })
    }
  })

router.get('/', async (req, res) => {
    try {
      const actions = await Actions.getActions()
      console.log(actions)
      res.status(200).json(actions)
    } catch (error) {
      res.status(500).json({ message: 'We ran into an error adding the action' })
    }
  })

  module.exports = router